export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-gray-200 dark:border-slate-800 mt-20 pt-8 pb-24 md:pt-12 md:pb-12 transition-colors">
      {/* Desktop footer */}
      <div className="hidden md:grid max-w-7xl mx-auto px-4 grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Платформа</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">О компании</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Вакансии</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Реквизиты</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Помощь</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Поддержка</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Безопасность</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Правила</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Сервисы</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li><a href="/co-own" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Совместное владение</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Доставка</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Безопасная сделка</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Приложение</h4>
          <div className="space-y-2 flex flex-col items-start">
            <button className="w-32 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">App Store</button>
            <button className="w-32 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">Google Play</button>
          </div>
        </div>
      </div>
      
      {/* Mobile footer */}
      <div className="md:hidden max-w-7xl mx-auto px-4 flex flex-col gap-6">
        <div className="flex justify-center gap-3">
          <button className="flex-1 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-xs text-slate-700 dark:text-slate-300 font-medium shadow-sm transition-colors">App Store</button>
          <button className="flex-1 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center text-xs text-slate-700 dark:text-slate-300 font-medium shadow-sm transition-colors">Google Play</button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#" className="hover:text-blue-600 transition-colors">О компании</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Поддержка</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Правила</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Безопасность</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
        <span>© 2026 ВещьВокруг</span>
        <a href="#" className="hover:text-slate-500 dark:hover:text-slate-400 transition-colors">Пользовательское соглашение</a>
      </div>
    </footer>
  );
}
