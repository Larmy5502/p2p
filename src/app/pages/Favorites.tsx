import { useState } from "react";
import { ProductCard, ProductItem } from "../components/ProductCard";

const MOCK_FAVORITES: ProductItem[] = [
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
];

export function Favorites() {
  const [filter, setFilter] = useState<"all" | "rent" | "coown">("all");
  const [favorites, setFavorites] = useState<ProductItem[]>(MOCK_FAVORITES);

  const filteredFavorites = favorites.filter((item) => {
    if (filter === "all") return true;
    if (filter === "rent") return item.type === "Аренда";
    if (filter === "coown") return item.type === "Совладение";
    return true;
  });

  // Track removed items by id to show overlay instead of removing immediately
  const [removedIds, setRemovedIds] = useState<(string | number)[]>([]);

  const toggleFavorite = (id: string | number) => {
    if (removedIds.includes(id)) {
      // Restore item
      setRemovedIds((prev) => prev.filter((rid) => rid !== id));
    } else {
      // Mark item as removed
      setRemovedIds((prev) => [...prev, id]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Избранное</h1>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
        Ваши сохранённые товары для аренды и совладения.
      </p>

      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-xl font-semibold ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          }`}
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={`px-4 py-2 rounded-xl font-semibold ${
            filter === "rent"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          }`}
          onClick={() => setFilter("rent")}
        >
          Аренда
        </button>
        <button
          className={`px-4 py-2 rounded-xl font-semibold ${
            filter === "coown"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          }`}
          onClick={() => setFilter("coown")}
        >
          Совладение
        </button>
      </div>

      {filteredFavorites.length === 0 ? (
        <p className="text-center text-slate-500 dark:text-slate-400 mt-20">
          Нет сохранённых товаров в этой категории.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFavorites.map((item) => {
            const isRemoved = removedIds.includes(item.id);
            return (
              <div key={item.id} className="relative group">
                <ProductCard
                  item={item}
                  isFavorite={!isRemoved} // Сердечко активно, если товар не помечен как удаленный
                  onFavoriteToggle={() => toggleFavorite(item.id)} // Обработчик для сердечка
                />
                {isRemoved && (
                  <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-4 text-center pointer-events-auto">
                    <p className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                      Товар убран из избранного
                    </p>
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Вернуть
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
