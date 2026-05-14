import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, Camera, Star, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";

import { ProductCard } from "../components/ProductCard";

// Mock data generator for the grid
const generateItems = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `item-${i + 1}`,
    title: `Профессиональная камера Sony Alpha (модель ${i + 1})`,
    price: i % 3 === 0 ? "1 500 ₽" : "15 000 ₽",
    unit: i % 3 === 0 ? "/ день" : "/ доля 10%",
    type: i % 3 === 0 ? "Аренда" : "Совладение",
    rating: (Math.random() * 1 + 4).toFixed(1),
    reviews: Math.floor(Math.random() * 50) + 1,
    location: "Москва, м. Охотный ряд",
    isShare: i % 3 !== 0,
  }));
};

const CHIPS = ["Электроника", "Транспорт", "Инструменты", "Спорт и отдых", "Дом и сад", "Работа"];

export function Catalog() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'all';

  const [items] = useState(generateItems(24));
  const [filterType, setFilterType] = useState(initialType);
  const [activeChip, setActiveChip] = useState("Электроника");

  useEffect(() => {
    if (initialType) {
      setFilterType(initialType);
    }
  }, [initialType]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (filterType === 'all') return true;
      if (filterType === 'rent') return item.type === 'Аренда';
      if (filterType === 'share') return item.type === 'Совладение';
      return true;
    });
  }, [items, filterType]);

  const FiltersContent = () => (
    <div className="space-y-6 overflow-y-auto max-h-[80vh] lg:max-h-none pb-8 lg:pb-0 scrollbar-hide px-1">
      {/* Type Filter */}
      <div className="space-y-3">
        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Тип сделки</h4>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="filterTypeMobile"
            className="w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-700 dark:bg-slate-900 focus:ring-blue-600 dark:focus:ring-blue-500 focus:ring-2 accent-blue-600"
            checked={filterType === 'all'}
            onChange={() => setFilterType('all')}
          />
          <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">Любой тип</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="filterTypeMobile"
            className="w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-700 dark:bg-slate-900 focus:ring-blue-600 dark:focus:ring-blue-500 focus:ring-2 accent-blue-600"
            checked={filterType === 'rent'}
            onChange={() => setFilterType('rent')}
          />
          <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">Аренда</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="radio"
            name="filterTypeMobile"
            className="w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-700 dark:bg-slate-900 focus:ring-blue-600 dark:focus:ring-blue-500 focus:ring-2 accent-blue-600"
            checked={filterType === 'share'}
            onChange={() => setFilterType('share')}
          />
          <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">Совместное владение</span>
        </label>
      </div>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* Price Range */}
      <div className="space-y-3">
        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Цена, ₽</h4>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="От" className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors" />
          <span className="text-slate-400 dark:text-slate-500">—</span>
          <input type="number" placeholder="До" className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors" />
        </div>
      </div>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* Condition */}
      <div className="space-y-3">
        <h4 className="font-semibold text-slate-900 dark:text-slate-100">Состояние</h4>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-700 dark:bg-slate-900 rounded focus:ring-blue-600 dark:focus:ring-blue-500 focus:ring-2 accent-blue-600" />
          <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">Новое</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-700 dark:bg-slate-900 rounded focus:ring-blue-600 dark:focus:ring-blue-500 focus:ring-2 accent-blue-600" />
          <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">Б/У в отличном состоянии</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input type="checkbox" className="w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-700 dark:bg-slate-900 rounded focus:ring-blue-600 dark:focus:ring-blue-500 focus:ring-2 accent-blue-600" />
          <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">Требует ремонта</span>
        </label>
      </div>

      <div className="pt-4 lg:pt-0 sticky bottom-0 lg:static bg-white dark:bg-slate-950 pb-2">
        <button className="w-full bg-blue-600 text-white rounded-lg py-3 lg:py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg lg:shadow-none shadow-blue-600/20">
          Показать {filteredItems.length}
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      
      {/* 1. Category Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
        {CHIPS.map((chip, i) => (
          <button
            key={i}
            onClick={() => setActiveChip(chip)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeChip === chip
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-slate-100" 
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="flex gap-8 items-start">
        
        {/* 2. Left Filters Sidebar */}
        <aside className="w-64 shrink-0 hidden lg:block sticky top-24">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">Фильтры</h3>
            <button 
              className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
              onClick={() => setFilterType('all')}
            >
              Очистить
            </button>
          </div>
          <FiltersContent />
        </aside>

        {/* 3. Main Content Area */}
        <div className="flex-1 min-w-0">
          
          {/* Top Bar: Sort & Filter Toggle (Mobile) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{activeChip} в Москве <span className="text-slate-400 dark:text-slate-500 font-normal text-lg ml-2">{filteredItems.length}</span></h1>
            
            <div className="flex items-center gap-3">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="lg:hidden flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <SlidersHorizontal className="w-4 h-4" />
                    Фильтры
                  </button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[85vh] rounded-t-2xl p-6 sm:max-w-none flex flex-col bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                  <SheetHeader className="mb-6 shrink-0 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="text-xl font-bold text-slate-900 dark:text-white">Фильтры</SheetTitle>
                      <button 
                        className="text-blue-600 dark:text-blue-400 text-sm hover:underline font-medium"
                        onClick={() => setFilterType('all')}
                      >
                        Очистить
                      </button>
                    </div>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto">
                    <FiltersContent />
                  </div>
                </SheetContent>
              </Sheet>
              
              <div className="relative group shrink-0">
                <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <ArrowUpDown className="w-4 h-4" />
                  По умолчанию
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 4. Listing Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8">
            {filteredItems.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>

          {/* 5. Pagination */}
          {filteredItems.length > 0 && (
            <div className="mt-10 sm:mt-12 flex items-center justify-center gap-1.5 sm:gap-2">
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 transition-colors" disabled>
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm sm:text-base font-medium transition-colors">1</button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm sm:text-base font-medium transition-colors">2</button>
              <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-base font-medium transition-colors">3</button>
              <span className="text-slate-400 dark:text-slate-600 px-1">...</span>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm sm:text-base font-medium transition-colors">102</button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
