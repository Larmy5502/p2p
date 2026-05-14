import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Plus, Star, ShieldCheck, Camera, PackageOpen, Check, Edit2, ReceiptText } from "lucide-react";
import { ProductCard, ProductItem } from "../components/ProductCard";

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Евгений",
    phone: "+7 (999) 000-00-00",
    location: "Москва, Хамовники",
    about: "Люблю активный отдых и технологии. Бережно отношусь к вещам."
  });

  const myItems: ProductItem[] = [
    {
      id: "my-1",
      title: "Палатка туристическая 3-местная",
      price: "800 ₽",
      unit: " / день",
      type: "Аренда",
      rating: "5.0",
      reviews: 2,
      location: "Москва, Хамовники"
    },
    {
      id: "my-2",
      title: "Проектор XGIMI Halo+",
      price: "1 500 ₽",
      unit: " / день",
      type: "Аренда",
      rating: "4.8",
      reviews: 5,
      location: "Москва, Хамовники"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* 1. Profile Header */}
      <div className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-8 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div className="relative group">
            <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full shrink-0 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700 transition-colors">
              <span className="text-2xl text-slate-500 dark:text-slate-400 font-bold">Е</span>
            </div>
            {isEditing && (
              <button className="absolute inset-0 bg-slate-900/40 rounded-full flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-[11px] font-medium">Сменить</span>
              </button>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="min-w-0">
                {isEditing ? (
                  <div className="space-y-3 max-w-xl">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Имя</label>
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-lg font-bold text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Телефон</label>
                        <input
                          type="tel"
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Местоположение</label>
                        <input
                          type="text"
                          value={profile.location}
                          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                          className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">О себе</label>
                      <textarea
                        rows={3}
                        value={profile.about}
                        onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                        className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white resize-none"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 truncate">
                      {profile.name}
                    </h1>

                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4.5 h-4.5 text-slate-300 dark:text-slate-600" />
                        <span className="font-medium text-slate-500 dark:text-slate-400">Нет отзывов</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                        Документы не проверены
                      </div>

                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        {profile.location}
                      </div>
                    </div>

                    <div className="mt-4 prose prose-slate dark:prose-invert max-w-2xl text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                      {profile.about}
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-2">
                <Link
                  to="/transactions"
                  className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors shadow-sm text-sm inline-flex items-center gap-2"
                >
                  <ReceiptText className="w-4 h-4" />
                  <span>Сделки</span>
                </Link>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors shadow-sm text-sm inline-flex items-center gap-2"
                >
                  {isEditing ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Сохранить</span>
                    </>
                  ) : (
                    <>
                      <Edit2 className="w-4 h-4" />
                      <span>Редактировать</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. My Items Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-8 border-b border-slate-200 dark:border-slate-800 flex-1">
          <button className="pb-4 font-bold text-slate-900 dark:text-slate-100 border-b-2 border-slate-900 dark:border-slate-100 text-lg transition-colors">
            Мои объявления <span className="text-slate-500 dark:text-slate-400 font-normal ml-2">{myItems.length}</span>
          </button>
        </div>
        <Link to="/post" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl transition-colors shadow-sm inline-flex items-center gap-2 text-sm ml-4 mb-4">
          <Plus className="w-4 h-4" />
          Разместить объявление
        </Link>
      </div>

      {myItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {myItems.map(item => (
            <div key={item.id} className="relative group/myitem cursor-pointer">
              <ProductCard item={item} />
              <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover/myitem:opacity-100 transition-opacity">
                <button className="bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-1.5 rounded-lg shadow-sm border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transition-colors text-xs font-medium">
                  Изменить
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-3xl p-12 text-center flex flex-col items-center justify-center transition-colors max-w-2xl mx-auto mt-12">
          <PackageOpen className="w-16 h-16 text-slate-300 dark:text-slate-600 mb-4" />
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">У вас пока нет объявлений</h4>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
            Разместите свою первую вещь для аренды или совместного владения, чтобы начать зарабатывать на том, что лежит без дела.
          </p>
          <Link to="/post" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-sm inline-flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Разместить первое объявление
          </Link>
        </div>
      )}
    </div>
  );
}
