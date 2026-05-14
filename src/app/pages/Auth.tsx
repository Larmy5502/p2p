import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, Shield, Camera, ChevronRight, Check } from "lucide-react";

export function Auth() {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") === "register" ? "register" : "login";
  const [mode, setMode] = useState<"login" | "register">(initialMode);

  // Login states
  const [loginIdent, setLoginIdent] = useState("");
  const [loginPass, setLoginPass] = useState("");

  // Register states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit:", mode);
  };

  // Validation
  const hasPasswordMismatch = confirmPassword.length > 0 && password !== confirmPassword;
  
  const isLoginDisabled = !loginIdent || !loginPass;
  const isRegisterDisabled = !firstName || !lastName || !username || !email || !phone || !password || !confirmPassword || hasPasswordMismatch || !agreed;

  // Shared UI classes
  const inputBase = "block w-full h-11 px-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 hover:border-slate-300 dark:hover:border-slate-700 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 dark:focus:border-blue-500";
  const inputError = "border-red-500 dark:border-red-500/80 hover:border-red-500 focus:border-red-500 focus:ring-red-500/20 bg-red-50/50 dark:bg-red-500/10";
  const labelBase = "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5";

  return (
    <div className="min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] flex items-center justify-center p-4 sm:p-8 lg:py-12 bg-slate-50/50 dark:bg-slate-950 transition-colors">
      
      <div className="w-full max-w-[1080px] min-h-[640px] lg:min-h-[760px] bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-200/60 dark:border-slate-800/80 flex flex-col lg:flex-row overflow-hidden transition-all relative">
        
        {/* Left Content Area - Branding / Context */}
        <div className="hidden lg:flex flex-1 flex-col justify-center px-12 xl:px-16 py-16 bg-slate-50/80 dark:bg-slate-900/50">
          <div className="max-w-[420px] mx-auto w-full flex flex-col h-full justify-between">
            <div>
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                <div className="w-6 h-6 border-[3px] border-white rounded-md"></div>
              </div>
              
              <h1 className="text-3xl xl:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-5 leading-tight">
                Делитесь вещами <br/>
                <span className="text-blue-600 dark:text-blue-500">с пользой</span> для всех
              </h1>
              <p className="text-base text-slate-500 dark:text-slate-400 mb-14 leading-relaxed">
                Платформа для безопасной аренды и совместного владения техникой, инструментами и спортивным инвентарем.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-700/50">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">Безопасные сделки</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Мы тщательно проверяем пользователей и предоставляем надежные инструменты для защиты от любых рисков.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-slate-700/50">
                    <Camera className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">Экономия на покупках</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Зачем покупать дорогое оборудование на один раз? Арендуйте у соседей и экономьте свои деньги.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-slate-400 dark:text-slate-500 pt-12">
              © 2026 ВещьВокруг
            </div>
          </div>
        </div>

        {/* Right Area - Form */}
        <div className="w-full lg:w-[480px] xl:w-[520px] flex-1 lg:flex-none shrink-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-white dark:bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800/80 shadow-[-20px_0_40px_-15px_rgba(0,0,0,0.02)] dark:shadow-none">
          
          <div className="max-w-[380px] w-full mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2.5 transition-colors">
                {mode === "login" ? "С возвращением" : "Создать аккаунт"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">
                {mode === "login" 
                  ? "Войдите в свой аккаунт, чтобы продолжить работу с сервисом." 
                  : "Присоединяйтесь к платформе для аренды и совместного владения."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {mode === "register" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className={labelBase}>Имя</label>
                      <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={inputBase}
                        placeholder="Иван"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelBase}>Фамилия</label>
                      <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={inputBase}
                        placeholder="Иванов"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelBase}>Email</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputBase}
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelBase}>Телефон</label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputBase}
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>

                  <div>
                    <label htmlFor="username" className={labelBase}>Имя пользователя</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 select-none pointer-events-none">@</span>
                      <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={`${inputBase} pl-8`}
                        placeholder="ivanov"
                      />
                    </div>
                  </div>
                </>
              )}

              {mode === "login" && (
                <div>
                  <label htmlFor="loginIdent" className={labelBase}>Email, телефон или имя пользователя</label>
                  <input
                    id="loginIdent"
                    type="text"
                    value={loginIdent}
                    onChange={(e) => setLoginIdent(e.target.value)}
                    className={inputBase}
                    placeholder="ivan@example.com"
                  />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor={mode === "login" ? "loginPass" : "password"} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Пароль
                  </label>
                  {mode === "login" && (
                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      Забыли пароль?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <input
                    id={mode === "login" ? "loginPass" : "password"}
                    type={showPassword ? "text" : "password"}
                    value={mode === "login" ? loginPass : password}
                    onChange={(e) => mode === "login" ? setLoginPass(e.target.value) : setPassword(e.target.value)}
                    className={inputBase}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none rounded-r-xl"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {mode === "register" && (
                <div>
                  <label htmlFor="confirmPassword" className={labelBase}>Повторите пароль</label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`${inputBase} ${hasPasswordMismatch ? inputError : ''}`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none rounded-r-xl"
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {hasPasswordMismatch && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 font-medium">Пароли не совпадают</p>
                  )}
                </div>
              )}

              {mode === "register" && (
                <div className="pt-2 pb-1">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="peer appearance-none w-5 h-5 border border-slate-300 dark:border-slate-600 rounded-[6px] bg-white dark:bg-slate-900 checked:bg-blue-600 checked:border-blue-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all cursor-pointer"
                      />
                      <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed select-none group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                      Я принимаю условия{" "}
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300" onClick={(e) => e.stopPropagation()}>Пользовательского соглашения</a>
                      {" "}и{" "}
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300" onClick={(e) => e.stopPropagation()}>Политики конфиденциальности</a>
                    </span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                disabled={mode === "login" ? isLoginDisabled : isRegisterDisabled}
                className="w-full h-12 mt-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm disabled:shadow-none shadow-blue-600/20 hover:shadow-blue-600/40"
              >
                {mode === "login" ? "Войти" : "Зарегистрироваться"}
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 text-center text-sm text-slate-500 dark:text-slate-400">
              {mode === "login" ? (
                <>
                  Еще нет аккаунта?{" "}
                  <button
                    onClick={toggleMode}
                    className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Создать аккаунт
                  </button>
                </>
              ) : (
                <>
                  Уже зарегистрированы?{" "}
                  <button
                    onClick={toggleMode}
                    className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Войти в систему
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
