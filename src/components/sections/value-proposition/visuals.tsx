import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  TrendingUp, 
  MousePointer2, 
  Loader2, 
  Layers, 
  Database, 
  Server, 
  CheckCircle2,
  XCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- ОБЩИЕ КОМПОНЕНТЫ ---

const GridPattern = () => (
  <div className="absolute inset-0 z-0 opacity-[0.05]" 
       style={{ 
         backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
         backgroundSize: '20px 20px' 
       }} 
  />
);

// --- 1. SPEED VISUAL (Сравнение) ---
export function SpeedCardVisual() {
  return (
    <div className="h-full w-full relative overflow-hidden bg-slate-950 flex rounded-2xl border border-white/5">
      {/* ЛЕВАЯ ЧАСТЬ: Конструкторы (Медленно) */}
      <div className="w-1/2 relative border-r border-white/10 bg-slate-900/80 flex flex-col items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        
        {/* Имитация медленной загрузки */}
        <div className="w-full max-w-[120px] space-y-3 opacity-50 grayscale">
           <div className="flex items-center gap-2 mb-6">
              <Loader2 className="w-5 h-5 animate-spin text-slate-500" />
              <span className="text-[10px] text-slate-500 font-mono">Загрузка...</span>
           </div>
           {/* Скелетоны */}
           <div className="h-2 w-full bg-slate-700/50 rounded animate-pulse" />
           <div className="h-2 w-2/3 bg-slate-700/50 rounded animate-pulse" />
           <div className="h-8 w-full bg-slate-700/30 rounded mt-4" />
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center">
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-red-500/10 border border-red-500/20">
                <XCircle size={12} className="text-red-400" />
                <span className="text-[10px] font-bold text-red-300">Конструкторы</span>
            </div>
        </div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ: ADLight (Мгновенно) */}
      <div className="w-1/2 relative bg-gradient-to-br from-emerald-950/30 to-slate-950 flex flex-col items-center justify-center p-4 overflow-hidden">
        <GridPattern />
        
        {/* Эффект сканера */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_15px_#34d399] z-20"
          animate={{ top: ["0%", "150%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-emerald-500 blur-[30px] opacity-30" />
            <Zap className="w-12 h-12 text-emerald-400 fill-emerald-400/20" />
          </div>
          
          <h4 className="text-lg md:text-xl font-bold text-white leading-none">ADLight</h4>
          <p className="text-[10px] text-emerald-400/80 mt-1 font-mono">React Core</p>
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center z-10">
            <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-300">Next.js</span>
            </div>
        </div>
      </div>
    </div>
  );
}

// --- 2. ROI VISUAL (Бесконечный график) ---
export function ROICardVisual() {
  // Данные для графика (повторяем их дважды для бесшовности)
  const bars = [20, 35, 30, 50, 45, 60, 55, 75, 70, 90, 85, 100];
  const allBars = [...bars, ...bars]; 

  return (
    <div className="h-full w-full relative overflow-hidden bg-slate-950 rounded-2xl border border-white/5 flex flex-col">
      <div className="absolute inset-0 bg-blue-900/5" />
      <GridPattern />

      {/* Header */}
      <div className="relative z-20 p-5 flex justify-between items-start">
        <div>
           <div className="flex items-center gap-2 mb-1">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
             </span>
             <span className="text-[10px] font-mono text-blue-300 tracking-wider">Ежедневный рост</span>
           </div>
           <h3 className="text-lg font-bold text-white">Рост прибыли</h3>
        </div>
        <div className="text-right">
           <div className="text-xl font-bold text-emerald-400">+324%</div>
           <div className="text-[10px] text-slate-500">В год</div>
        </div>
      </div>

      {/* INFINITE SCROLLING GRAPH */}
      <div className="flex-1 relative overflow-hidden flex items-end pb-0">
        <motion.div 
          className="flex items-end gap-3 px-3 w-max"
          animate={{ x: "-50%" }} // Двигаем на 50% влево (ровно на длину одного набора данных)
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
           {allBars.map((height, i) => (
             <div key={i} className="relative group w-8 md:w-10">
                {/* Bar */}
                <div 
                  className="w-full bg-slate-800/80 border-t border-x border-white/10 rounded-t-sm relative overflow-hidden group-hover:bg-blue-900/50 transition-colors duration-300"
                  style={{ height: `${height * 1.5}px` }} 
                >
                  {/* Заливка цветом снизу вверх (градиент) */}
                  <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-50" />
                  {/* Верхушка бара (акцент) */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500/50" />
                </div>
                
                {/* Тултип (появляется иногда) */}
                {height > 80 && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                     className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded shadow-lg"
                   >
                     $$$
                   </motion.div>
                )}
             </div>
           ))}
        </motion.div>
      </div>
      
      {/* Overlay gradient at bottom to blend */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </div>
  );
}

// --- 3. UX VISUAL (Путь пользователя) ---
export function UXCardVisual() {
  return (
    <div className="h-full w-full relative bg-slate-950 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/10 via-slate-950 to-slate-950" />
      
      {/* UI Макет сайта */}
      <div className="relative w-64 h-40 bg-slate-900 rounded-lg border border-slate-800 shadow-2xl p-3 flex flex-col gap-2 z-10">
         {/* Navbar */}
         <div className="flex justify-between items-center mb-1">
            <div className="w-8 h-2 bg-slate-700 rounded-full" />
            <div className="flex gap-1">
               <div className="w-10 h-2 bg-slate-800 rounded-full" />
               <div className="w-10 h-2 bg-slate-800 rounded-full" />
            </div>
         </div>
         
         {/* Hero Text */}
         <div className="space-y-1.5 mt-2">
            <div className="w-3/4 h-3 bg-slate-700 rounded animate-pulse" />
            <div className="w-1/2 h-3 bg-slate-700 rounded animate-pulse delay-75" />
         </div>

         {/* CTA Button (Цель) */}
         <motion.div 
           className="mt-auto self-start bg-pink-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-md shadow-lg shadow-pink-900/20"
           animate={{ scale: [1, 1.1, 1] }}
           transition={{ delay: 2.5, duration: 0.3 }} // Удар сердца при клике
         >
           Купить
         </motion.div>
      </div>

      {/* КУРСОР И ПУТЬ */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
         {/* Путь пунктиром */}
         <motion.path 
            d="M 100 250 Q 150 150 160 170 T 200 180" // Примерные координаты (подстраиваются под макет)
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-30"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
         />
      </svg>

      {/* Сам курсор */}
      <motion.div
        className="absolute z-30"
        initial={{ top: "120%", left: "20%" }}
        animate={{ 
           top: ["120%", "40%", "58%"], // Координаты пути
           left: ["20%", "50%", "35%"], // Координаты пути
           scale: [1, 1, 0.8, 1] // Эффект клика в конце
        }}
        transition={{ 
           duration: 3, 
           times: [0, 0.6, 1],
           repeat: Infinity, 
           repeatDelay: 1 
        }}
      >
        <MousePointer2 className="w-6 h-6 text-white fill-pink-500 drop-shadow-lg" />
        
        {/* Эффект клика (Круги) */}
        <motion.div 
           className="absolute -top-2 -left-2 w-10 h-10 rounded-full border-2 border-pink-500 opacity-0"
           animate={{ scale: [0.5, 1.5], opacity: [1, 0] }}
           transition={{ delay: 2.5, duration: 0.5, repeat: Infinity, repeatDelay: 3.5 }}
        />
      </motion.div>

      {/* Уведомление об успехе */}
      <motion.div 
        className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1 z-40"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.4, repeat: Infinity, repeatDelay: 3.6, repeatType: "reverse" }}
      >
        <CheckCircle2 size={10} />
        <span>Заявка +1</span>
      </motion.div>
    </div>
  );
}

// --- 4. TECH VISUAL (Монолит Времени) ---
export function TechCardVisual() {
  return (
    <div className="h-full w-full relative overflow-hidden bg-slate-950 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
      
      {/* 1. ФОН: Глубокий космос с сеткой */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />
        {/* Сетка на полу для перспективы */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20" 
             style={{ 
               background: 'linear-gradient(to bottom, transparent 0%, #6366f1 100%)',
               transform: 'perspective(500px) rotateX(60deg) translateY(0px)',
               transformOrigin: 'bottom'
             }} 
        >
             <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, .3) 25%, rgba(99, 102, 241, .3) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, .3) 75%, rgba(99, 102, 241, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, .3) 25%, rgba(99, 102, 241, .3) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, .3) 75%, rgba(99, 102, 241, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} />
        </div>
      </div>

      {/* 2. ПОТОК ВРЕМЕНИ (Летящие годы по бокам) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Левая сторона */}
         <TimelineSide side="left" />
         {/* Правая сторона */}
         <TimelineSide side="right" />
      </div>

      {/* 3. МОНОЛИТ (Фундамент) - Статичный и мощный */}
      <div className="relative z-20 flex flex-col items-center">
         {/* Светящийся ореол за монолитом */}
         <div className="absolute -inset-10 bg-indigo-500/20 blur-[60px] rounded-full animate-pulse" />

         {/* Сам Блок */}
         <div className="relative w-48 h-32 bg-slate-900/90 backdrop-blur-md border border-indigo-500/30 rounded-xl shadow-[0_0_50px_rgba(99,102,241,0.2)] flex flex-col items-center justify-center gap-3 overflow-hidden group">
            
            {/* Декор внутри блока (микросхема) */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

            {/* Иконки технологий */}
            <div className="flex gap-4 mb-1 relative z-10">
               <div className="flex flex-col items-center">
                  <Database className="w-6 h-6 text-indigo-400 mb-1" />
                  <span className="text-[8px] font-mono text-indigo-300/50">ORM</span>
               </div>
               <div className="w-[1px] h-8 bg-white/10" />
               <div className="flex flex-col items-center">
                  <Server className="w-6 h-6 text-white mb-1" />
                  <span className="text-[8px] font-mono text-slate-400">SSR</span>
               </div>
               <div className="w-[1px] h-8 bg-white/10" />
               <div className="flex flex-col items-center">
                  <Layers className="w-6 h-6 text-indigo-400 mb-1" />
                  <span className="text-[8px] font-mono text-indigo-300/50">UI</span>
               </div>
            </div>

            {/* Текст */}
            <div className="bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-500/20">
               <span className="text-xs font-bold text-white tracking-widest">NEXT.JS CORE</span>
            </div>
         </div>

         {/* Подпись снизу */}
         <div className="mt-6 flex flex-col items-center gap-1">
            <span className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase">Продвинутая архитектура</span>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-sm font-bold text-white">На 5+ Лет</span>
            </div>
         </div>
      </div>
    </div>
  );
}

// Вспомогательный компонент для анимации "летящих годов"
const TimelineSide = ({ side }: { side: "left" | "right" }) => {
   const years = ["2025", "2026", "2027", "2028", "2029", "2030"];
   
   return (
      <div className={cn(
         "absolute top-0 bottom-0 w-20 flex flex-col justify-center gap-16 perspective-500",
         side === "left" ? "left-4 md:left-12 items-end" : "right-4 md:right-12 items-start"
      )}>
         {years.map((year, i) => (
            <motion.div
               key={i}
               className={cn(
                  "text-lg font-bold text-indigo-500/10 font-mono",
                  side === "left" ? "-rotate-12" : "rotate-12"
               )}
               initial={{ opacity: 0, y: 100, scale: 0.5 }}
               animate={{ 
                  opacity: [0, 0.4, 0], 
                  y: [-50, -200], // Движение вверх (как будто мы летим вперед)
                  scale: [0.8, 1.2]
               }}
               transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.7, // Ступенчатая задержка
                  ease: "linear"
               }}
            >
               {year}
            </motion.div>
         ))}
      </div>
   );
};