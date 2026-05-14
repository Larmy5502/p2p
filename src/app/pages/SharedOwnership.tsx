import { Link } from "react-router-dom";
import { ArrowRight, Bike, Camera, Check, ShieldCheck, Users, Zap } from "lucide-react";
import { ProductCard, ProductItem } from "../components/ProductCard";

const SHARED_ITEMS: ProductItem[] = [
  {
    id: "share-1",
    title: "Электросамокат Ninebot Max G2",
    price: "7 000 ₽",
    unit: "/ доля 10%",
    type: "Совладение",
    rating: 4.9,
    reviews: 8,
    location: "Москва, м. Китай-город",
    isShare: true,
  },
  {
    id: "share-2",
    title: "Камера Sony A7 IV",
    price: "25 000 ₽",
    unit: "/ доля 10%",
    type: "Совладение",
    rating: 4.8,
    reviews: 12,
    location: "Москва, м. Тверская",
    isShare: true,
  },
  {
    id: "share-3",
    title: "Палатка Naturehike 4-местная",
    price: "3 000 ₽",
    unit: "/ доля 20%",
    type: "Совладение",
    rating: 4.7,
    reviews: 5,
    location: "Москва, м. Сокол",
    isShare: true,
  },
  {
    id: "share-4",
    title: "Игровая приставка PlayStation 5",
    price: "6 000 ₽",
    unit: "/ доля 10%",
    type: "Совладение",
    rating: 5.0,
    reviews: 9,
    location: "Москва, м. Парк культуры",
    isShare: true,
  },
];

const STEPS = [
  {
    title: "Купите долю",
    text: "Выберите вещь и размер участия. Каждая доля даёт право пользоваться вещью по расписанию.",
    icon: Users,
  },
  {
    title: "Бронируйте дни",
    text: "Планируйте использование заранее и договаривайтесь с другими участниками.",
    icon: Bike,
  },
  {
    title: "Расходы делятся",
    text: "Обслуживание, хранение и возможные риски распределяются между участниками.",
    icon: ShieldCheck,
  },
];

export function SharedOwnership() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 space-y-12">
      <section className="rounded-3xl bg-blue-600 text-white p-6 sm:p-10 overflow-hidden relative">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-100">
            Совместное владение
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Владейте дорогими вещами вместе
          </h1>
          <p className="text-sm sm:text-lg leading-7 text-blue-100 max-w-xl mb-7">
            Покупайте долю от 10% в премиальной технике, электротранспорте или инструментах и пользуйтесь вещью по договорённости.
          </p>
          <Link
            to="/catalog?type=share"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50"
          >
            Смотреть объявления
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute right-12 top-12 hidden h-24 w-24 items-center justify-center rounded-3xl bg-white/10 sm:flex">
          <Camera className="h-10 w-10 text-white/80" />
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Как устроено совладение
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
        <div className="grid gap-6 md:grid-cols-[1fr_320px] md:items-center">
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Пример расчёта доли
            </h2>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
              Если вещь стоит 120 000 ₽, участник может купить 20% за 24 000 ₽ и пользоваться вещью в заранее согласованные дни.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950">
            <div className="flex items-center justify-between py-2 text-sm">
              <span className="text-slate-500 dark:text-slate-400">Стоимость вещи</span>
              <span className="font-bold text-slate-900 dark:text-white">120 000 ₽</span>
            </div>
            <div className="flex items-center justify-between py-2 text-sm">
              <span className="text-slate-500 dark:text-slate-400">Ваша доля</span>
              <span className="font-bold text-slate-900 dark:text-white">20%</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-4 text-sm dark:border-slate-800">
              <span className="font-medium text-slate-700 dark:text-slate-300">К оплате</span>
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">24 000 ₽</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Популярные объявления
          </h2>
          <Link to="/catalog?type=share" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
            Все варианты
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-4 sm:gap-x-5">
          {SHARED_ITEMS.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-7">
        <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          Что важно знать
        </div>
        <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-400 md:grid-cols-2">
          <div className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            Покупка доли оформляется договором между участниками.
          </div>
          <div className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            График использования согласуется заранее.
          </div>
          <div className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            Расходы на обслуживание распределяются пропорционально долям.
          </div>
          <div className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            Доля может быть перепродана другому участнику.
          </div>
        </div>
      </section>
    </div>
  );
}
