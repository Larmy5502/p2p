import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BadgeCheck,
  Camera,
  ChevronRight,
  Flag,
  Heart,
  MapPin,
  MessageSquare,
  Phone,
  Share2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { ProductCard, ProductItem } from "../components/ProductCard";

type DetailItem = ProductItem & {
  description: string;
  characteristics: string;
  address: string;
  addressHint: string;
  sellerName: string;
  sellerInitial: string;
  sellerRating: string;
  documentsVerified: boolean;
  availability: string;
  pickupMethod: string;
  number: string;
  publishedLabel: string;
};

const SIMILAR_ITEMS: ProductItem[] = [
  {
    id: "similar-1",
    title: "Sony Alpha a6400 Body (модель 1)",
    price: "2 000 ₽",
    unit: "/ день",
    type: "Аренда",
    rating: 4.8,
    reviews: 8,
    location: "Москва, м. Китай-город",
  },
  {
    id: "similar-2",
    title: "Sony Alpha a6400 Body (модель 2)",
    price: "2 000 ₽",
    unit: "/ день",
    type: "Аренда",
    rating: 4.8,
    reviews: 9,
    location: "Москва, м. Китай-город",
  },
  {
    id: "similar-3",
    title: "Sony Alpha a6400 Body (модель 3)",
    price: "2 000 ₽",
    unit: "/ день",
    type: "Аренда",
    rating: 4.8,
    reviews: 7,
    location: "Москва, м. Китай-город",
  },
  {
    id: "similar-4",
    title: "Sony Alpha a6400 Body (модель 4)",
    price: "2 000 ₽",
    unit: "/ день",
    type: "Аренда",
    rating: 4.8,
    reviews: 1,
    location: "Москва, м. Китай-город",
  },
];

export function ItemDetail() {
  const location = useLocation();
  const isNew = location.pathname.includes("/item/new");

  const lastPublishedAd = useMemo(() => {
    if (isNew) {
      try {
        const stored = localStorage.getItem("vv:lastPublishedAd");
        return stored ? JSON.parse(stored) : null;
      } catch {
        return null;
      }
    }
    return null;
  }, [isNew]);

  const item: DetailItem = useMemo(() => {
    if (isNew && lastPublishedAd) {
      return {
        id: lastPublishedAd.id,
        title: "Новое объявление",
        price: "Договорная",
        unit: "",
        type: lastPublishedAd.type === "rent" ? "Аренда" : "Совладение",
        rating: 0,
        reviews: 0,
        location: "Уточняется",
        isShare: lastPublishedAd.type === "share",
        description: lastPublishedAd.description || "Описание отсутствует.",
        characteristics: lastPublishedAd.characteristics || "Характеристики отсутствуют.",
        address: "Адрес уточняется",
        addressHint: "Точное место можно согласовать с владельцем",
        sellerName: "Евгений",
        sellerInitial: "Е",
        sellerRating: "нет",
        documentsVerified: false,
        availability: "Уточняется",
        pickupMethod: lastPublishedAd.pickupMethod === "delivery" ? "Доставка" : "Самовывоз",
        number: lastPublishedAd.number || "7889892685",
        publishedLabel: "5 апреля в 12:45",
      };
    }

    return {
      id: "1",
      title: "Профессиональная камера Sony A7 III Body",
      price: "2 500 ₽",
      unit: "/ день",
      type: "Аренда",
      rating: 4.9,
      reviews: 12,
      location: "Москва, ул. Тверская, 15",
      isShare: false,
      description:
        "Идеальное состояние, использовалась только для студийной съемки. Всегда на связи, могу подсказать по настройкам.",
      characteristics:
        "Модель: Sony A7 III Body. Состояние: отличное. Комплект: 2 АКБ, зарядка, ремешок. Пробег затвора: ~12 000 кадров.",
      address: "Москва, ул. Тверская, 15",
      addressHint: "м. Охотный ряд (5 мин), м. Тверская (7 мин)",
      sellerName: "Александр",
      sellerInitial: "А",
      sellerRating: "4.9",
      documentsVerified: true,
      availability: "Свободно завтра",
      pickupMethod: "Самовывоз",
      number: "7889892685",
      publishedLabel: "13 апреля в 17:32",
    };
  }, [isNew, lastPublishedAd]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <Breadcrumbs />

      <div className="mb-6 flex items-start justify-between gap-4">
        <h1 className="max-w-4xl text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          {item.title}
        </h1>
        <div className="flex shrink-0 items-center gap-2 pt-1">
          <IconButton label="В избранное" icon={Heart} />
          <IconButton label="Поделиться" icon={Share2} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-8">
          <Gallery />
          <LocationBlock item={item} />
          <TextSection title="Описание" text={item.description} />
          <TextSection title="Характеристики" text={item.characteristics} />
          <p className="text-xs text-slate-400 dark:text-slate-600">
            № {item.number} | {item.publishedLabel}
          </p>
        </div>

        <SellerActionCard item={item} />
      </div>

      <section className="mt-10 sm:mt-12">
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Похожие объявления
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-6">
          {SIMILAR_ITEMS.map((similarItem) => (
            <ProductCard key={similarItem.id} item={similarItem} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
      <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
        Главная
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link to="/category/electro" className="hover:text-blue-600 dark:hover:text-blue-400">
        Электроника
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link to="/category/photo" className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
        Фото и видеокамеры
      </Link>
    </nav>
  );
}

function IconButton({ label, icon: Icon }: { label: string; icon: typeof Heart }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-500 dark:hover:bg-slate-900 dark:hover:text-blue-400"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

function Gallery() {
  return (
    <section>
      <div className="relative flex aspect-[16/9] min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
        <Camera className="h-16 w-16 text-slate-300 dark:text-slate-600" />
        <div className="absolute bottom-4 right-4 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-500 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-400">
          1 / 5
        </div>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <button
            key={item}
            type="button"
            className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border bg-slate-50 transition-colors dark:bg-slate-900 ${
              item === 1
                ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400"
                : "border-slate-200 text-slate-300 hover:border-slate-300 dark:border-slate-800 dark:text-slate-700 dark:hover:border-slate-700"
            }`}
          >
            <Camera className="h-5 w-5" />
          </button>
        ))}
      </div>
    </section>
  );
}

function SellerActionCard({ item }: { item: DetailItem }) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-4 p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              {item.sellerInitial}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <Link to="/seller/1" className="truncate font-bold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                  {item.sellerName}
                </Link>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                  <Star className="h-3 w-3 fill-current" />
                  {item.sellerRating}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                {item.documentsVerified ? (
                  <>
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    Документы проверены
                  </>
                ) : (
                  <>
                    <BadgeCheck className="h-3.5 w-3.5 text-slate-400" />
                    Документы не проверены
                  </>
                )}
              </div>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
        </div>

        <div className="border-t border-slate-200 p-5 dark:border-slate-800">
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold leading-none text-slate-900 dark:text-white">{item.price}</span>
            <span className="text-base font-medium text-slate-500 dark:text-slate-400">{item.unit}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold uppercase text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {item.type}
            </span>
            <span className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold uppercase text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {item.pickupMethod}
            </span>
            <span className="inline-flex items-center rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold uppercase text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              {item.availability}
            </span>
          </div>

          <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-700">
            Арендовать
          </button>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
              <MessageSquare className="h-4 w-4" />
              Написать
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
              <Phone className="h-4 w-4" />
              Позвонить
            </button>
          </div>

          <div className="mt-5 border-t border-slate-200 pt-4 text-center dark:border-slate-800">
            <button className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400">
              <Flag className="h-4 w-4" />
              Пожаловаться
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function LocationBlock({ item }: { item: DetailItem }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Местоположение</h2>
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-[1fr_240px] sm:items-center">
        <div className="flex items-start gap-3 px-1 sm:px-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white">{item.address}</div>
            <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.addressHint}</div>
          </div>
        </div>

        <div className="relative flex h-28 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
          <MapPin className="h-7 w-7 text-blue-600 dark:text-blue-400" />
          <span className="absolute bottom-2 right-2 rounded bg-slate-900/70 px-1.5 py-0.5 text-[10px] text-white dark:bg-slate-950/80">
            Яндекс.Карты
          </span>
        </div>
      </div>
    </section>
  );
}

function TextSection({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <p className="max-w-3xl whitespace-pre-wrap text-base leading-7 text-slate-700 dark:text-slate-300">{text}</p>
    </section>
  );
}
