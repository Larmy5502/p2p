import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Camera, Check, ChevronRight, MapPin, Search } from "lucide-react";

type DraftAd = {
  title: string;
  category: string;
  condition: string;
  location: string;
  type: "rent" | "share";
  pickupMethod: "self" | "delivery";
  price: string;
  description: string;
  characteristics: string;
};

export function PostAdWizard() {
  const [step, setStep] = useState(1);
  const [adData, setAdData] = useState<DraftAd>({
    title: "",
    category: "",
    condition: "used_good",
    location: "",
    type: "rent",
    pickupMethod: "self",
    price: "",
    description: "",
    characteristics: ""
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const publishHref = `/item/new?type=${adData.type === "share" ? "coown" : "rent"}`;

  const handlePublish = () => {
    const now = Date.now();
    const adNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    const payload = {
      id: "new",
      type: adData.type,
      pickupMethod: adData.pickupMethod,
      description: adData.description.trim(),
      characteristics: adData.characteristics.trim(),
      publishedAt: now,
      number: adNumber
    };
    try {
      localStorage.setItem("vv:lastPublishedAd", JSON.stringify(payload));
    } catch {
      // ignore (storage blocked)
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Новое объявление</h1>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-1 h-2 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 transition-colors">
            <div 
              className={`h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ${step >= i ? 'w-full' : 'w-0'}`}
            />
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm transition-colors">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Что вы хотите сдать или разделить?</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">Что это за вещь?</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-500/50 focus:border-blue-600 dark:focus:border-blue-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all"
                  placeholder="Например: Камера Sony A7 III"
                  value={adData.title}
                  onChange={(e) => setAdData({...adData, title: e.target.value})}
                />
                <p className="text-xs text-slate-500 mt-1.5">Используйте понятное название без лишних слов. Это поможет людям быстрее найти вашу вещь.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">Категория</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-500/50 focus:border-blue-600 dark:focus:border-blue-500 text-slate-700 dark:text-slate-100 transition-all"
                    value={adData.category}
                    onChange={(e) => setAdData({...adData, category: e.target.value})}
                  >
                    <option value="">Выберите категорию</option>
                    <option value="electronics">Электроника</option>
                    <option value="tools">Инструменты</option>
                    <option value="transport">Транспорт</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">Состояние</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-500/50 focus:border-blue-600 dark:focus:border-blue-500 text-slate-700 dark:text-slate-100 transition-all"
                    value={adData.condition}
                    onChange={(e) => setAdData({...adData, condition: e.target.value})}
                  >
                    <option value="new">Новое</option>
                    <option value="used_perfect">Б/У, в идеале</option>
                    <option value="used_good">Б/У, хорошее</option>
                    <option value="used_repair">Требует ремонта</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">Местоположение</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-500/50 focus:border-blue-600 dark:focus:border-blue-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all"
                    placeholder="Город, улица, дом"
                    value={adData.location}
                    onChange={(e) => setAdData({...adData, location: e.target.value})}
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
                     <Search className="w-4 h-4 text-slate-500" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1.5">Формат размещения</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Выберите, как вы хотите монетизировать вашу вещь.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`cursor-pointer rounded-2xl border p-5 transition-all flex items-start gap-4 ${adData.type === 'rent' ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 shadow-[0_0_0_1px_rgba(37,99,235,0.1)]' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-950/50'}`}>
                <div className={`mt-1 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${adData.type === 'rent' ? 'border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500' : 'border-slate-300 dark:border-slate-600'}`}>
                  {adData.type === 'rent' && <Check className="w-3 h-3 text-white" />}
                </div>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-slate-100 mb-1">Сдать в аренду</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Сдавайте вещь посуточно и получайте стабильный доход.</p>
                </div>
                <input
                  type="radio"
                  name="type"
                  className="hidden"
                  checked={adData.type === 'rent'}
                  onChange={() => setAdData({...adData, type: 'rent'})}
                />
              </label>

              <label className={`cursor-pointer rounded-2xl border p-5 transition-all flex items-start gap-4 ${adData.type === 'share' ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 shadow-[0_0_0_1px_rgba(37,99,235,0.1)]' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-950/50'}`}>
                <div className={`mt-1 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${adData.type === 'share' ? 'border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500' : 'border-slate-300 dark:border-slate-600'}`}>
                  {adData.type === 'share' && <Check className="w-3 h-3 text-white" />}
                </div>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-slate-100 mb-1">Продать долю</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Разделите стоимость дорогой вещи с другими людьми.</p>
                </div>
                <input
                  type="radio"
                  name="type"
                  className="hidden"
                  checked={adData.type === 'share'}
                  onChange={() => setAdData({...adData, type: 'share'})}
                />
              </label>
            </div>
            
            <div className="pt-2">
              <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                {adData.type === 'rent' ? 'Стоимость аренды (₽ / день)' : 'Стоимость всей вещи для оценки долей (₽)'}
              </label>
              <div className="relative max-w-sm">
                <input 
                  type="number" 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-500/50 focus:border-blue-600 dark:focus:border-blue-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all font-medium text-lg"
                  placeholder="0"
                  value={adData.price}
                  onChange={(e) => setAdData({...adData, price: e.target.value})}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-medium">
                  ₽
                </div>
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
                Способ получения
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={`cursor-pointer rounded-xl border px-4 py-3 transition-all flex items-start gap-3 ${adData.pickupMethod === 'self' ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 hover:border-slate-300 dark:hover:border-slate-700'}`}>
                  <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center ${adData.pickupMethod === 'self' ? 'border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500' : 'border-slate-300 dark:border-slate-600'}`}>
                    {adData.pickupMethod === 'self' && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900 dark:text-slate-100">Самовывоз</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Арендатор забирает вещь у вас.</span>
                  </div>
                  <input
                    type="radio"
                    name="pickupMethod"
                    className="hidden"
                    checked={adData.pickupMethod === 'self'}
                    onChange={() => setAdData({ ...adData, pickupMethod: 'self' })}
                  />
                </label>

                <label className={`cursor-pointer rounded-xl border px-4 py-3 transition-all flex items-start gap-3 ${adData.pickupMethod === 'delivery' ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-900/10' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 hover:border-slate-300 dark:hover:border-slate-700'}`}>
                  <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center ${adData.pickupMethod === 'delivery' ? 'border-blue-600 dark:border-blue-500 bg-blue-600 dark:bg-blue-500' : 'border-slate-300 dark:border-slate-600'}`}>
                    {adData.pickupMethod === 'delivery' && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900 dark:text-slate-100">Доставка</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Вы готовы передать вещь доставкой.</span>
                  </div>
                  <input
                    type="radio"
                    name="pickupMethod"
                    className="hidden"
                    checked={adData.pickupMethod === 'delivery'}
                    onChange={() => setAdData({ ...adData, pickupMethod: 'delivery' })}
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1.5">Фотографии</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Качественные фото привлекают больше внимания. Можно загрузить до 10 штук.</p>
            </div>
            
            <div className="space-y-4">
              {/* Large drop zone */}
              <button className="w-full rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-8 sm:p-12 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:border-blue-500 dark:hover:bg-blue-900/10 transition-all bg-slate-50 dark:bg-slate-950/50 group">
                <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-800 mb-4 group-hover:scale-105 transition-transform">
                  <Camera className="w-8 h-8 text-blue-600 dark:text-blue-500" />
                </div>
                <span className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">Нажмите или перетащите фото сюда</span>
                <span className="text-sm text-slate-500">JPEG, PNG до 5 МБ</span>
              </button>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="aspect-square rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    <Camera className="w-6 h-6 text-slate-300 dark:text-slate-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1.5">Описание и характеристики</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Качественные фото привлекают больше внимания. Можно загрузить до 10 штук.</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Описание</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-500/50 focus:border-blue-600 dark:focus:border-blue-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all resize-none"
                placeholder="Опишите состояние, особенности использования, что важно знать."
                value={adData.description}
                onChange={(e) => setAdData({ ...adData, description: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Характеристики</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/50 dark:focus:ring-blue-500/50 focus:border-blue-600 dark:focus:border-blue-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all resize-none"
                placeholder="Перечислите важное: модель, комплектация, размеры, состояние и т.д."
                value={adData.characteristics}
                onChange={(e) => setAdData({ ...adData, characteristics: e.target.value })}
              />
              <p className="text-xs text-slate-500 mt-1.5">
                Эти поля одинаково подходят для аренды и для совладения — без лишней детализации.
              </p>
            </div>

            <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-4 flex items-start gap-3 mt-6">
              <div className="shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-500" />
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Нажимая «Опубликовать», вы соглашаетесь с <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">правилами сервиса</a> и подтверждаете, что вещь принадлежит вам на законных основаниях.
              </div>
            </div>

          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 transition-colors">
          <button 
            onClick={handleBack}
            className={`px-6 py-2.5 font-medium rounded-xl transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            Назад
          </button>
          
          {step < 4 ? (
            <button 
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2"
            >
              Дальше <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <Link 
              to={publishHref}
              onClick={handlePublish}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 text-white font-medium px-8 py-2.5 rounded-xl transition-colors flex items-center gap-2"
            >
              Опубликовать
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
