import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Camera, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface ProductItem {
  id: string | number;
  title: string;
  price: string;
  unit: string;
  type: string; // "Аренда" or "Совладение"
  rating: string | number;
  reviews: number;
  location: string;
  image?: string;
  isShare?: boolean;
}

interface ProductCardProps {
  item: ProductItem;
  isFavorite?: boolean; // Optional prop to control favorite state from parent
  onFavoriteToggle?: (e: React.MouseEvent) => void; // Optional prop for favorite toggle handler
}

function getReviewDeclension(count: number) {
  const n = Math.abs(count) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return "отзывов";
  if (n1 > 1 && n1 < 5) return "отзыва";
  if (n1 === 1) return "отзыв";
  return "отзывов";
}

export function ProductCard({ item, isFavorite: isFavoriteProp, onFavoriteToggle: onFavoriteToggleProp }: ProductCardProps) {
  const isShare = item.type === "Совладение" || item.isShare;
  const [isFavoriteState, setIsFavoriteState] = useState(false);

  // Use prop if provided, otherwise use internal state
  const isFavorite = isFavoriteProp !== undefined ? isFavoriteProp : isFavoriteState;

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onFavoriteToggleProp) {
      onFavoriteToggleProp(e);
    } else {
      setIsFavoriteState(!isFavoriteState);
    }
  };

  return (
    <Link to={`/item/${item.id}?type=${isShare ? 'coown' : 'rent'}`} className="group flex flex-col h-full">
      {/* 1. Изображение товара */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full bg-slate-100 dark:bg-slate-800/80 rounded-2xl mb-3 sm:mb-4 overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/50 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors">
        {item.image ? (
          <ImageWithFallback 
            src={item.image} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
            alt={item.title}
          />
        ) : (
          <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-slate-300 dark:text-slate-600" />
        )}
        
        {/* 2. Бейдж типа сделки поверх изображения (левый верхний угол) */}
        <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md shadow-sm border border-slate-200/50 dark:border-slate-700/50">
          <span className="text-[9px] sm:text-[10px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
            {isShare ? "Совладение" : "Аренда"}
          </span>
        </div>

        {/* Favorite Button (правый верхний угол) */}
        <button 
          onClick={handleFavoriteToggle}
          className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 p-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 active:scale-95 transition-all"
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${isFavorite ? "fill-red-500 text-red-500" : "text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500"}`} />
        </button>
      </div>
      
      <div className="flex flex-col flex-1 px-0.5">
        {/* 3. Строка цены */}
        <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-none mb-1.5 sm:mb-2">
          {item.price} <span className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400">{item.unit}</span>
        </div>
        
        {/* 4. Название товара */}
        <h4 className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium leading-snug line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {item.title}
        </h4>
        
        <div className="mt-auto flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400 pt-1">
          {/* 5. Строка рейтинга и количества отзывов */}
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
            <span className="font-medium text-slate-700 dark:text-slate-300">{item.rating}</span>
            <span className="text-slate-400 dark:text-slate-500">· {item.reviews} {getReviewDeclension(item.reviews)}</span>
          </div>
          
          {/* 6. Строка локации */}
          <div className="truncate text-slate-500 dark:text-slate-400 mt-0.5">{item.location}</div>
        </div>
      </div>
    </Link>
  );
}
