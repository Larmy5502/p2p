import { Link } from "react-router";
import { Star, ShieldCheck, Clock, MapPin, Camera, MessageSquare } from "lucide-react";

import { ProductCard, ProductItem } from "../components/ProductCard";

export function SellerProfile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* 1. Profile Header */}
      <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-8 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full shrink-0 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700 transition-colors">
            <span className="text-2xl text-slate-500 dark:text-slate-400 font-bold">А</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 truncate">
                  Александр Иванов
                </h1>

                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-900 dark:text-slate-100">4.9</span>
                    <span className="text-slate-500 dark:text-slate-400">· 45 отзывов</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-600 dark:text-green-500" />
                    Документы проверены
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    Отвечает за 15 минут
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    На платформе с 2024 года
                  </div>
                </div>
              </div>

              <div className="flex gap-2 sm:pt-0">
                <button className="bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm">
                  Написать
                </button>
                <button className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors shadow-sm text-sm">
                  Показать номер
                </button>
              </div>
            </div>

            <div className="mt-4 prose prose-slate dark:prose-invert max-w-2xl text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              Сдаю в аренду профессиональную фототехнику. Всегда на связи, оборудование в идеальном состоянии. Возможна доставка по Москве.
            </div>
          </div>
        </div>
      </div>

      {/* 2. Content Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-200 dark:border-slate-800 mb-8 transition-colors">
        <button className="pb-4 font-bold text-slate-900 dark:text-slate-100 border-b-2 border-slate-900 dark:border-slate-100 text-lg transition-colors">
          Объявления <span className="text-slate-500 dark:text-slate-400 font-normal ml-2">12</span>
        </button>
        <button className="pb-4 font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-lg transition-colors">
          Отзывы <span className="text-slate-400 dark:text-slate-500 font-normal ml-2">45</span>
        </button>
      </div>

      {/* 3. Active Listings Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {[1, 2, 3, 4, 5, 6].map(i => {
          const isShare = i % 2 === 0;
          const item: ProductItem = {
            id: `user-item-${i}`,
            title: isShare ? "Объектив Sony 24-70mm f/2.8" : "Камера Sony A7 III Body",
            price: isShare ? "15 000 ₽" : "2 500 ₽",
            unit: isShare ? " / доля 10%" : " / день",
            type: isShare ? "Совладение" : "Аренда",
            rating: "4.9",
            reviews: Math.floor(Math.random() * 20) + 1,
            location: "Москва, м. Китай-город",
            isShare
          };
          return <ProductCard key={i} item={item} />;
        })}
      </div>

    </div>
  );
}
