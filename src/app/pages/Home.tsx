import { Link } from "react-router-dom";
import { Shield, Smartphone, Box, Gamepad2, Plane, PenTool, Zap, Camera, Star, ArrowRight } from "lucide-react";

import { ProductCard } from "../components/ProductCard";

const CATEGORIES = [
  { id: "electro", name: "Электроника", icon: Smartphone },
  { id: "transport", name: "Транспорт", icon: Plane },
  { id: "tools", name: "Инструменты", icon: PenTool },
  { id: "sport", name: "Спорт", icon: Zap },
  { id: "hobby", name: "Хобби", icon: Gamepad2 },
  { id: "pc", name: "Компьютеры", icon: Box },
  { id: "photo", name: "Фото/Видео", icon: Camera },
  { id: "other", name: "Разное", icon: Star },
];

const FEATURED_ITEMS = [
  {
    id: "1",
    title: "Sony PlayStation 5 с 2 джойстиками",
    price: "1 200 ₽",
    unit: "/ день",
    type: "Аренда",
    rating: 4.9,
    reviews: 12,
    location: "Москва, м. Китай-город",
  },
  {
    id: "2",
    title: "Электросамокат Ninebot E2 Pro",
    price: "15 000 ₽",
    unit: "/ доля 10%",
    type: "Совладение",
    rating: 5.0,
    reviews: 4,
    location: "Доступно онлайн",
    isShare: true,
  },
  {
    id: "3",
    title: "Перфоратор Makita HR2470",
    price: "800 ₽",
    unit: "/ день",
    type: "Аренда",
    rating: 4.8,
    reviews: 35,
    location: "Москва, м. Выхино",
  },
  {
    id: "4",
    title: "Сапборд Gladiator Pro 10.6",
    price: "2 500 ₽",
    unit: "/ доля 25%",
    type: "Совладение",
    rating: 4.7,
    reviews: 2,
    location: "Пироговское вдхр.",
    isShare: true,
  },
];

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 space-y-10 md:space-y-16">
      
      {/* 1. Main Entry Points */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/catalog?type=rent" className="group flex flex-col justify-center bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-colors p-5 sm:p-8 rounded-2xl relative overflow-hidden min-h-[140px] sm:min-h-[180px]">
          <div className="z-10 relative space-y-2 sm:space-y-3 max-w-[240px] sm:max-w-sm">
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">Аренда вещей</h2>
            <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
              Находите нужные вещи рядом и берите на удобный срок.
            </p>
            <div className="inline-flex font-semibold text-xs sm:text-base text-blue-600 dark:text-blue-400 mt-1 sm:mt-2 items-center gap-1">Найти вещь <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" /></div>
          </div>
          <div className="absolute -right-12 -bottom-12 sm:-right-8 sm:-top-8 w-40 h-40 sm:w-64 sm:h-64 bg-slate-200/40 dark:bg-slate-800/50 rounded-full group-hover:scale-110 transition-transform duration-500" />
        </Link>
        <Link to="/co-own" className="group flex flex-col justify-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors p-5 sm:p-8 rounded-2xl relative overflow-hidden min-h-[140px] sm:min-h-[180px] text-white shadow-lg shadow-blue-600/20">
          <div className="z-10 relative space-y-2 sm:space-y-3 max-w-[260px] sm:max-w-sm">
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight leading-tight">Совместное владение</h2>
            <p className="text-xs sm:text-base text-blue-100 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
              Покупайте долю в дорогих вещах и пользуйтесь ими по расписанию.
            </p>
            <div className="inline-flex font-semibold text-xs sm:text-base text-white mt-1 sm:mt-2 items-center gap-1">Купить долю <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" /></div>
          </div>
          <div className="absolute -right-16 -bottom-16 sm:-right-10 sm:-top-10 w-44 h-44 sm:w-64 sm:h-64 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
        </Link>
      </section>

      {/* 2. Categories */}
      <section>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Популярные категории</h3>
          <Link to="/catalog" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">Все</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:grid sm:grid-cols-4 lg:grid-cols-8 sm:mx-0 sm:px-0">
          {CATEGORIES.map(cat => (
            <Link key={cat.id} to={`/category/${cat.id}`} className="group flex flex-col items-center gap-2 w-[84px] sm:w-auto shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:border-slate-200 dark:group-hover:border-slate-700 group-hover:shadow-sm transition-all">
                <cat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-center leading-tight px-1">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Recommended Items */}
      <section>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-5">Рекомендуем вам</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-6">
          {FEATURED_ITEMS.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 4. CTA Block */}
      <section className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-5 sm:p-8 flex items-center justify-between gap-6 overflow-hidden relative">
        <div className="relative z-10 flex flex-col items-start w-full sm:max-w-md">
          <div className="flex items-center gap-1.5 mb-2.5 text-blue-600 dark:text-blue-500">
            <Shield className="w-4 h-4" />
            <span className="font-bold tracking-wide uppercase text-[10px] sm:text-xs">Безопасная сделка</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight max-w-[220px] sm:max-w-none">
            Сдавайте вещи и зарабатывайте
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 max-w-[240px] sm:max-w-none">
            Платформа проверяет пользователей и помогает снизить риски.
          </p>
          <Link to="/post" className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors inline-flex justify-center items-center w-full sm:w-auto shadow-sm">
            Разместить вещь
          </Link>
        </div>
        
        <div className="absolute right-[-20px] bottom-[-20px] sm:relative sm:right-auto sm:bottom-auto w-32 h-32 sm:w-48 sm:h-48 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl flex items-center justify-center shadow-sm shrink-0 rotate-12 opacity-30 sm:opacity-100 pointer-events-none">
          <Box className="w-12 h-12 sm:w-20 sm:h-20 text-slate-300 dark:text-slate-600" />
        </div>
      </section>
    </div>
  );
}
