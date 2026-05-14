import { useState, useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { 
  ChevronRight, 
  ArrowUpDown, 
  Camera, 
  Star, 
  Gamepad2, 
  Laptop, 
  Speaker, 
  Smartphone,
  ChevronDown,
  LayoutGrid,
  Filter,
  Monitor,
  PenTool,
  Home,
  Tv,
  Car,
  Tent,
  Music,
  Baby,
  Briefcase,
  Handshake,
  Box
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import { ProductCard } from "../components/ProductCard";

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

const generateItems = (count: number, categoryId: string, subcategoryId?: string) => {
  return Array.from({ length: count }).map((_, i) => {
    const isShare = i % 3 === 0;
    return {
      id: `item-${categoryId}-${subcategoryId || 'all'}-${i + 1}`,
      title: `${subcategoryId ? decodeURIComponent(subcategoryId) : 'Товар'} (модель ${i + 1})`,
      price: isShare ? "15 000 ₽" : "1 500 ₽",
      unit: isShare ? "/ доля 10%" : "/ день",
      type: isShare ? "Совладение" : "Аренда",
      rating: (Math.random() * 1 + 4).toFixed(1),
      reviews: Math.floor(Math.random() * 50) + 1,
      location: "Москва, м. Охотный ряд",
      isShare,
    };
  });
};

const SORT_OPTIONS = [
  "По популярности",
  "Сначала дешевле",
  "Сначала дороже",
  "Новые объявления",
  "Высокий рейтинг"
];

export function Category() {
  const params = useParams();
  const categoryId = params.categoryId || "electro";
  const subcategoryId = params.subcategoryId ? decodeURIComponent(params.subcategoryId) : null;

  const [searchParams] = useSearchParams();
  const filterType = searchParams.get('type') || 'all';
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(SORT_OPTIONS[0]);

  // Fetch category data or fallback
  const category = CATALOG_CATEGORIES.find(c => c.id === categoryId) || CATALOG_CATEGORIES[0];
  const subcategory = subcategoryId && category.sub.includes(subcategoryId) ? subcategoryId : null;

  // Generate items
  const items = useMemo(() => generateItems(24, categoryId, subcategoryId || undefined), [categoryId, subcategoryId]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (filterType === 'all') return true;
      if (filterType === 'rent') return item.type === 'Аренда';
      if (filterType === 'share') return item.type === 'Совладение';
      return true;
    });
  }, [items, filterType]);

  const Breadcrumbs = () => (
    <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide pb-1">
      <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Главная</Link>
      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" />
      {subcategory ? (
        <>
          <Link to={`/category/${category.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{category.name}</Link>
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" />
          <span className="text-slate-900 dark:text-slate-200 font-medium">{subcategory}</span>
        </>
      ) : (
        <span className="text-slate-900 dark:text-slate-200 font-medium">{category.name}</span>
      )}
    </nav>
  );

  const SubcategoriesBlock = () => {
    const list = category.sub;
    
    if (!list || list.length === 0 || subcategory) return null;

    return (
      <div className="flex flex-wrap gap-2.5 mb-8">
        {!subcategory && (
          <Link 
            to={`/category/${category.id}`}
            className="inline-flex items-center px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-medium transition-colors"
          >
            Все товары
          </Link>
        )}
        
        {list.map((sub: string) => {
          const isActive = sub === subcategory;
          return (
            <Link
              key={sub}
              to={`/category/${category.id}/${encodeURIComponent(sub)}`}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                isActive 
                  ? "bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-900 shadow-sm" 
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {sub}
            </Link>
          );
        })}
      </div>
    );
  };

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Type Filter */}
      <div className="space-y-3.5">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Тип сделки</h4>
        <div className="flex flex-col gap-2.5">
          <Link to={`/category/${category.id}${subcategory ? `/${encodeURIComponent(subcategory)}` : ''}?type=all`} className={`text-sm ${filterType === 'all' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'}`}>Любой тип</Link>
          <Link to={`/category/${category.id}${subcategory ? `/${encodeURIComponent(subcategory)}` : ''}?type=rent`} className={`text-sm ${filterType === 'rent' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'}`}>Аренда</Link>
          <Link to={`/category/${category.id}${subcategory ? `/${encodeURIComponent(subcategory)}` : ''}?type=share`} className={`text-sm ${filterType === 'share' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'}`}>Совместное владение</Link>
        </div>
      </div>

      <hr className="border-slate-100 dark:border-slate-800/80" />

      {/* Price Range */}
      <div className="space-y-3.5">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Цена, ₽</h4>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">от</span>
            <input type="number" className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-slate-900 dark:text-white transition-all placeholder:text-transparent" placeholder="0" />
          </div>
          <span className="text-slate-300 dark:text-slate-600">-</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">до</span>
            <input type="number" className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-slate-900 dark:text-white transition-all placeholder:text-transparent" placeholder="100000" />
          </div>
        </div>
      </div>

      <hr className="border-slate-100 dark:border-slate-800/80" />

      {/* Condition */}
      <div className="space-y-3.5">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Состояние</h4>
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 accent-blue-600" />
            <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Новое</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 accent-blue-600" />
            <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Б/у, идеальное</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 accent-blue-600" />
            <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">Б/у, хорошее</span>
          </label>
        </div>
      </div>

      <button className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl text-sm font-medium transition-colors">
        Применить фильтры
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
      
      {/* Header Area */}
      <Breadcrumbs />
      
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          {subcategory ? subcategory : category.name}
        </h1>
      </div>

      {/* Subcategories */}
      <SubcategoriesBlock />

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <FilterSidebar />
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Найдено <span className="font-medium text-slate-900 dark:text-white">{filteredItems.length}</span> товаров
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Toggle */}
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Фильтры
              </button>

              {/* Mobile Filter Overlay */}
              {isMobileFiltersOpen && (
                <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col lg:hidden">
                  <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Фильтры</h2>
                    <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                      <ChevronRight className="w-6 h-6 rotate-180" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    <FilterSidebar />
                  </div>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                    <button 
                      onClick={() => setIsMobileFiltersOpen(false)}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-colors shadow-sm"
                    >
                      Показать {filteredItems.length} товаров
                    </button>
                  </div>
                </div>
              )}

              {/* Sort Dropdown */}
              <div className="relative group shrink-0">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
                  <ArrowUpDown className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline">{activeSort}</span>
                  <span className="sm:hidden">Сортировка</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-1.5">
                  {SORT_OPTIONS.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => setActiveSort(opt)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${opt === activeSort ? 'bg-slate-50 dark:bg-slate-800/50 text-blue-600 dark:text-blue-400 font-medium' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8">
              {filteredItems.map(item => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 border-dashed">
              <LayoutGrid className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Товаров не найдено</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                Попробуйте изменить параметры фильтров или выбрать другую подкатегорию
              </p>
              <button 
                onClick={() => window.location.href = `/category/${category.id}`}
                className="mt-6 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                Сбросить фильтры
              </button>
            </div>
          )}

          {/* Pagination / Load More */}
          {filteredItems.length > 0 && (
            <div className="mt-12 flex justify-center">
              <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl text-sm font-medium transition-colors">
                Показать еще
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
