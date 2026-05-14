import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, Heart, MessageSquare, User, Menu, Moon, Sun,
  MapPin, ChevronDown, ChevronRight, Clock, TrendingUp, Sparkles, Plus,
  Smartphone, Camera, Monitor, PenTool, Home, Tv, Car, Tent, 
  Gamepad2, Music, Baby, Briefcase, Handshake, Box, X, ReceiptText
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const CATALOG_CATEGORIES = [
  { id: 'electro', name: 'Электроника', icon: Smartphone, sub: ['Смартфоны', 'Планшеты', 'Ноутбуки', 'Игровые приставки', 'Наушники', 'Умные часы'] },
  { id: 'photo', name: 'Фото и видео', icon: Camera, sub: ['Фотоаппараты', 'Объективы', 'Видеокамеры', 'Дроны', 'Штативы', 'Свет и студийное оборудование'] },
  { id: 'pc', name: 'Компьютерная техника', icon: Monitor, sub: ['ПК', 'Мониторы', 'Проекторы', 'Периферия', 'VR-устройства', 'Сетевое оборудование'] },
  { id: 'tools', name: 'Инструменты и ремонт', icon: PenTool, sub: ['Дрели и шуруповерты', 'Перфораторы', 'Бензопилы', 'Шлифмашины', 'Строительные пылесосы', 'Наборы инструментов'] },
  { id: 'home', name: 'Дом и дача', icon: Home, sub: ['Газонокосилки', 'Мойки высокого давления', 'Садовый инструмент', 'Лестницы и стремянки', 'Генераторы', 'Тепловое оборудование'] },
  { id: 'appliances', name: 'Бытовая техника', icon: Tv, sub: ['Пылесосы', 'Клининг-техника', 'Кухонная техника', 'Пароочистители', 'Осушители и увлажнители', 'Обогреватели'] },
  { id: 'transport', name: 'Транспорт', icon: Car, sub: ['Велосипеды', 'Электросамокаты', 'Самокаты', 'Детские кресла', 'Багажники и боксы', 'Автоаксессуары'] },
  { id: 'sport', name: 'Спорт и отдых', icon: Tent, sub: ['Палатки', 'Спальные мешки', 'Сапборды', 'Лыжи и сноуборды', 'Туристическое снаряжение', 'Велотренажеры'] },
  { id: 'hobby', name: 'Хобби и развлечения', icon: Gamepad2, sub: ['Настольные игры', 'Музыкальные инструменты', 'Караоке и аудио', 'Игровые наборы', 'Проекторы для мероприятий', 'Костюмы и реквизит'] },
  { id: 'events', name: 'Для мероприятий', icon: Music, sub: ['Колонки', 'Микрофоны', 'Световое оборудование', 'Декор', 'Фотозоны', 'Проекторы и экраны'] },
  { id: 'kids', name: 'Детские товары', icon: Baby, sub: ['Коляски', 'Автокресла', 'Манежи', 'Игрушки', 'Электромобили', 'Товары для праздников'] },
  { id: 'pro', name: 'Профессиональное оборудование', icon: Briefcase, sub: ['Строительное оборудование', 'Диагностические приборы', 'Генераторы', 'Измерительная техника', 'Складское оборудование', 'Оборудование для бизнеса'] },
  { id: 'coown', name: 'Совладение', icon: Handshake, sub: ['Камеры и объективы', 'Дроны', 'Игровые приставки', 'Электротранспорт', 'Премиальная техника', 'Инвестиционные проекты'] },
  { id: 'other', name: 'Разное', icon: Box, sub: ['Редкие вещи', 'Товары на сезон', 'Новинки', 'Локальные предложения'] },
];

const POPULAR_SEARCHES = ['Аренда шуруповерта', 'Аренда PlayStation', 'Аренда палатки', 'Совладение квадрокоптера'];
const RECENT_SEARCHES = ['Камера Sony в аренду', 'Велосипед на выходные', 'Проектор для мероприятия'];
const AUTOCOMPLETE_RESULTS = ['Samsung TV', 'Samsung Galaxy', 'Samsung projector', 'Телевизоры Samsung', 'Смартфоны Samsung', 'Мониторы Samsung'];

const CITIES = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Казань', 'Новосибирск'];

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeCatalogCategory, setActiveCatalogCategory] = useState(CATALOG_CATEGORIES[0].id);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [city, setCity] = useState("Москва");

  const [isPostOpen, setIsPostOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);
  const postRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        setIsCatalogOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setIsCityOpen(false);
      }
      if (postRef.current && !postRef.current.contains(event.target as Node)) {
        setIsPostOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 transition-colors" ref={headerRef}>
        <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between md:justify-start gap-4 sm:gap-6 relative">
          
          {/* Mobile Menu & Search Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 -ml-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 flex flex-col bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800">
                <SheetHeader className="p-4 border-b border-gray-200 dark:border-slate-800 text-left shrink-0">
                  <SheetTitle className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                    </div>
                    ВещьВокруг
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex-1 overflow-y-auto py-2">
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Навигация</div>
                    <Link to="/" className="flex items-center gap-3 py-2 text-slate-700 dark:text-slate-300 font-medium">Главная</Link>
                    <Link to="/catalog" className="flex items-center gap-3 py-2 text-slate-700 dark:text-slate-300 font-medium">Все категории</Link>
                    <Link to="/co-own" className="flex items-center gap-3 py-2 text-slate-700 dark:text-slate-300 font-medium">Совладение</Link>
                  </div>
                  
                  <div className="w-full h-px bg-gray-100 dark:bg-slate-800 my-2"></div>
                  
                  <div className="px-4 py-2">
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Каталог</div>
                    {CATALOG_CATEGORIES.map(cat => {
                      const Icon = cat.icon;
                      return (
                        <Link key={cat.id} to={`/catalog?category=${cat.id}`} className="flex items-center gap-3 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                          <Icon className="w-5 h-5 shrink-0" />
                          <span>{cat.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200 dark:border-slate-800 shrink-0">
                  <button 
                    onClick={() => setIsCityOpen(!isCityOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 w-full p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                    {city}
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  </button>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Темная тема</span>
                    <button
                      onClick={toggleTheme}
                      className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <button 
              className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsSearchFocused(!isSearchFocused)}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group mx-auto md:mx-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block">
            ВещьВокруг
          </span>
        </Link>

        {/* Catalog Button */}
        <div ref={catalogRef}>
          <button 
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shrink-0 ${isCatalogOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-slate-900 hover:bg-gray-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'}`}
          >
            <Menu className="w-4 h-4" />
            Каталог
          </button>

          {isCatalogOpen && (
            <div className="absolute top-[64px] left-4 w-[1160px] max-w-[calc(100%-2rem)] bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-slate-800 flex overflow-hidden z-50">
              {/* Left column - Categories */}
              <div className="w-[340px] bg-slate-50/50 dark:bg-slate-900/50 border-r border-gray-100 dark:border-slate-800 py-2 shrink-0">
                {CATALOG_CATEGORIES.map(cat => {
                  const Icon = cat.icon;
                  const isActive = activeCatalogCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onMouseEnter={() => setActiveCatalogCategory(cat.id)}
                      className={`w-full text-left px-5 py-2.5 flex items-center justify-between text-sm transition-colors ${isActive ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium shadow-sm relative z-10' : 'text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                        <span>{cat.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                  )
                })}
              </div>
              {/* Right column - Subcategories */}
              <div className="flex-1 bg-white dark:bg-slate-900 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {CATALOG_CATEGORIES.find(c => c.id === activeCatalogCategory)?.name}
                  </h3>
                  <Link to={`/category/${activeCatalogCategory}`} onClick={() => setIsCatalogOpen(false)} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1">
                    Перейти в категорию
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-auto">
                  {CATALOG_CATEGORIES.find(c => c.id === activeCatalogCategory)?.sub.map(sub => (
                    <Link to={`/category/${activeCatalogCategory}/${encodeURIComponent(sub)}`} onClick={() => setIsCatalogOpen(false)} key={sub} className="text-left group flex flex-col gap-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                        {sub}
                      </span>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-100 dark:border-slate-800 grid grid-cols-2 gap-6">
                   <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-xl border border-blue-100/50 dark:border-blue-900/50 flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                       <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                     </div>
                     <div>
                       <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                         Популярное в категории
                       </div>
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Часто арендуют на этой неделе</p>
                       <button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1">
                         Смотреть подборку <ChevronRight className="w-3 h-3" />
                       </button>
                     </div>
                   </div>

                   <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                       <TrendingUp className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                     </div>
                     <div>
                       <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                         Новинки проката
                       </div>
                       <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Свежие поступления от владельцев</p>
                       <button className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                         Изучить новинки <ChevronRight className="w-3 h-3" />
                       </button>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar Wrapper */}
        <div className="flex-1 max-w-2xl flex items-center gap-2 hidden md:flex">
          {/* City Dropdown */}
          <div className="relative shrink-0" ref={cityRef}>
            <button 
              onClick={() => setIsCityOpen(!isCityOpen)}
              className={`h-10 px-3 flex items-center gap-1.5 border rounded-lg text-sm transition-colors ${isCityOpen ? 'bg-white dark:bg-slate-950 border-blue-600/50 dark:border-blue-500/50 text-slate-900 dark:text-white' : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
            >
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-500" />
              <span className="truncate max-w-[120px] font-medium">{city}</span>
            </button>

            {isCityOpen && (
              <div className="absolute top-12 left-0 w-80 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden">
                <div className="p-3 border-b border-gray-100 dark:border-slate-800">
                  <input 
                    type="text" 
                    placeholder="Поиск города..." 
                    className="w-full h-9 px-3 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>
                <button 
                  className="w-full text-left px-4 py-3 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800 transition-colors"
                  onClick={() => { setIsCityOpen(false); }}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Определить автоматически</span>
                </button>
                <div className="p-2">
                  <div className="px-2 py-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">Популярные города</div>
                  {CITIES.map(c => (
                    <button 
                      key={c}
                      onClick={() => { setCity(c); setIsCityOpen(false); }}
                      className="w-full text-left px-2 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Input Container */}
          <div className="flex-1 relative" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Поиск по товарам, аренде и совладению..."
              className={`w-full h-10 pl-4 pr-10 border rounded-lg text-sm focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white ${isSearchFocused ? 'bg-white dark:bg-slate-950 border-blue-600/50 dark:border-blue-500/50 ring-2 ring-blue-600/20 dark:ring-blue-500/20' : 'bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-800'}`}
            />
            <button className="absolute right-0 top-0 h-full w-10 flex items-center justify-center text-gray-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Search className="w-4 h-4" />
            </button>

            {isSearchFocused && (
              <div className="absolute top-12 left-0 w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden">
                {!searchQuery ? (
                  <div className="p-4 flex flex-col gap-5">
                    {/* Recent */}
                    <div>
                       <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-wider">Недавние запросы</div>
                       <div className="flex flex-col">
                          {RECENT_SEARCHES.map(s => (
                            <button key={s} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md px-2 -mx-2 transition-colors text-left">
                               <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                               <span className="truncate">{s}</span>
                            </button>
                          ))}
                       </div>
                    </div>
                    {/* Popular */}
                    <div>
                       <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">Популярное сейчас</div>
                       <div className="flex flex-wrap gap-2">
                          {POPULAR_SEARCHES.map(s => (
                            <button key={s} className="flex items-center gap-1.5 text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-1.5 px-3 rounded-full transition-colors">
                               <TrendingUp className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                               <span>{s}</span>
                            </button>
                          ))}
                       </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-2 flex flex-col">
                    {AUTOCOMPLETE_RESULTS.map(s => (
                      <button key={s} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 py-2.5 px-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors text-left">
                         <Search className="w-4 h-4 text-slate-400 shrink-0" />
                         <span>
                           <span className="font-medium text-slate-900 dark:text-white">{s.substring(0, 7)}</span>
                           {s.substring(7)}
                         </span>
                      </button>
                    ))}
                    <div className="border-t border-slate-100 dark:border-slate-800 mt-2 pt-2 px-3 pb-1">
                       <button className="flex items-center justify-between w-full text-sm text-blue-600 dark:text-blue-400 hover:underline py-1">
                          <span>Искать «{searchQuery}» во всех категориях</span>
                          <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-auto">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900"
            aria-label="Переключить тему"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

           <div className="hidden sm:flex items-center gap-1">
             <NavIcon iconComponent={Heart} label="Избранное" to="/favorites" />
             <NavIcon iconComponent={ReceiptText} label="Сделки" to="/transactions" />
             <NavIcon iconComponent={MessageSquare} label="Сообщения" to="/messages" />
            <NavIcon iconComponent={User} label="Профиль" to="/profile" />
          </div>
          
          <Link 
            to="/post"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            Разместить
          </Link>
        </div>
      </div>
      </header>
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-around items-center px-2 py-2 safe-area-pb">
        <Link to="/" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/' ? 'text-blue-600 dark:text-blue-500' : 'text-slate-500 dark:text-slate-400'}`}>
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium leading-none">Главная</span>
        </Link>
        <Link to="/catalog" className={`flex flex-col items-center gap-1 p-2 ${location.pathname.startsWith('/catalog') ? 'text-blue-600 dark:text-blue-500' : 'text-slate-500 dark:text-slate-400'}`}>
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium leading-none">Поиск</span>
        </Link>
        <Link to="/post" className="flex flex-col items-center gap-1 p-2 text-blue-600 dark:text-blue-500 relative -mt-5">
          <div className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white p-3 rounded-full shadow-lg border-4 border-white dark:border-slate-950 transition-colors">
            <Plus className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-medium leading-none mt-1">Разместить</span>
        </Link>
        <Link to="/messages" className={`flex flex-col items-center gap-1 p-2 ${location.pathname.startsWith('/messages') ? 'text-blue-600 dark:text-blue-500' : 'text-slate-500 dark:text-slate-400'}`}>
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px] font-medium leading-none">Сообщения</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center gap-1 p-2 ${location.pathname.startsWith('/profile') ? 'text-blue-600 dark:text-blue-500' : 'text-slate-500 dark:text-slate-400'}`}>
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium leading-none">Профиль</span>
        </Link>
      </div>

      {/* Full-screen Mobile Search Overlay */}
      {isSearchFocused && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col">
          <div className="h-14 px-4 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800">
            <button 
              onClick={() => setIsSearchFocused(false)}
              className="p-2 -ml-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <div className="flex-1 relative">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Искать вещи, аренду..."
                className="w-full h-10 pl-3 pr-10 bg-slate-100 dark:bg-slate-900 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
             <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">Недавние запросы</div>
             <div className="flex flex-col gap-1">
                {RECENT_SEARCHES.map(s => (
                  <button key={s} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 py-3 border-b border-slate-100 dark:border-slate-800/50 transition-colors text-left" onClick={() => setIsSearchFocused(false)}>
                     <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                     <span>{s}</span>
                  </button>
                ))}
             </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavIcon({ iconComponent: Icon, label, badge, to }: { iconComponent: any, label: string, badge?: string, to?: string }) {
  if (to) {
    return (
      <Link to={to} className="flex flex-col items-center justify-center w-14 h-12 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group pointer-events-auto">
        <Icon className="w-5 h-5 mb-1" />
        <span className="text-[10px] font-medium leading-none">{label}</span>
        {badge && (
          <span className="absolute top-1 right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-slate-950 leading-none">
            {badge}
          </span>
        )}
      </Link>
    );
  }

  return (
    <button className="flex flex-col items-center justify-center w-14 h-12 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group pointer-events-auto">
      <Icon className="w-5 h-5 mb-1" />
      <span className="text-[10px] font-medium leading-none">{label}</span>
      {badge && (
        <span className="absolute top-1 right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-slate-950 leading-none">
          {badge}
        </span>
      )}
    </button>
  );
}
