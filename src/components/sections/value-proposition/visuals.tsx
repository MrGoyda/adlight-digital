import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, MousePointerClick, Loader2, Server, ShieldCheck, Code2, Layers, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// --- ОБЕРТКА ДЛЯ КАРТОЧКИ ---
export function CardWrapper({ 
    children, 
    onClick, 
    className 
}: { 
    children: React.ReactNode; 
    onClick: () => void;
    className?: string; 
}) {
    return (
        <div 
            onClick={onClick}
            className={cn(
                "group/card relative cursor-pointer transition-transform duration-300 hover:scale-[1.01]", 
                className
            )}
        >
            {children}
            <div className="absolute top-4 right-4 z-30 flex items-center justify-end overflow-hidden pl-4 py-1">
                 <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1.5 text-white shadow-lg transition-all duration-300 group-hover/card:bg-white/10 group-hover/card:border-white/20">
                     <span className="text-[10px] font-medium opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300 hidden sm:block">
                         Подробнее
                     </span>
                     <Plus className="w-4 h-4 text-emerald-400 animate-pulse" />
                 </div>
            </div>
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover/card:border-white/10 transition-colors pointer-events-none" />
        </div>
    );
}

// --- ВИЗУАЛЫ ---
export function SpeedCardVisual() {
  return (
    <div className="h-72 md:h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950 flex">
      <div className="w-1/2 bg-slate-900/80 flex flex-col items-center justify-center border-r border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="relative z-10 flex flex-col items-center opacity-50 grayscale">
           <Loader2 className="w-10 h-10 mb-3 animate-spin text-slate-400" />
           <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500 mb-1">Конструкторы</span>
           <span className="text-xl font-bold text-slate-400">Загрузка...</span>
           <span className="text-xs text-slate-600 mt-2">2.4s - 5.0s</span>
        </div>
      </div>
      <div className="w-1/2 bg-emerald-950/20 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/10 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-500/20 blur-[40px] rounded-full" />
        <div className="relative z-10 flex flex-col items-center">
           <Zap className="w-10 h-10 mb-3 text-emerald-400 fill-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
           <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-500 font-bold mb-1">Next.js Ядро</span>
           <span className="text-xl font-bold text-white">Мгновенно</span>
           <span className="text-xs text-emerald-400/80 mt-2 font-mono border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-500/10">0.4s</span>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-500 z-20 shadow-xl">VS</div>
    </div>
  );
}

export function ROICardVisual() {
  return (
    <div className="h-72 md:h-80 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
      <div className="relative z-20 flex flex-col h-full justify-between pointer-events-none">
        <div>
           <div className="flex items-center gap-3 mb-2">
             <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20"><TrendingUp size={20} /></div>
             <h3 className="font-heading text-xl font-bold text-white">ROI Эффективность</h3>
           </div>
           <p className="text-slate-400 text-sm max-w-sm">
             Алгоритмы Google отдают предпочтение быстрым сайтам. Вы получаете больше клиентов за тот же бюджет.
           </p>
        </div>
        <div className="flex gap-6 mt-4">
             <div>
                <div className="text-xs text-slate-500 mb-1">Стоимость лида</div>
                <div className="text-xl font-bold text-white">-40% <span className="text-emerald-500 text-sm">↓</span></div>
             </div>
             <div>
                <div className="text-xs text-slate-500 mb-1">Конверсия</div>
                <div className="text-xl font-bold text-emerald-400">x3.2 <span className="text-emerald-500 text-sm">↑</span></div>
             </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-50 overflow-hidden">
        <svg className="absolute bottom-0 w-[200%] h-full" preserveAspectRatio="none">
             <defs>
                <linearGradient id="gradientChart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
             </defs>
             <motion.g
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
             >
                <path d="M0,200 C150,200 150,100 300,100 S450,180 600,150 S750,50 900,100 S1050,200 1200,200 V350 H0 Z" fill="url(#gradientChart)" />
                <path d="M0,200 C150,200 150,100 300,100 S450,180 600,150 S750,50 900,100 S1050,200 1200,200" fill="none" stroke="#10b981" strokeWidth="3" />
                <g transform="translate(1200, 0)">
                      <path d="M0,200 C150,200 150,100 300,100 S450,180 600,150 S750,50 900,100 S1050,200 1200,200 V350 H0 Z" fill="url(#gradientChart)" />
                      <path d="M0,200 C150,200 150,100 300,100 S450,180 600,150 S750,50 900,100 S1050,200 1200,200" fill="none" stroke="#10b981" strokeWidth="3" />
                </g>
             </motion.g>
             <path d="M0,250 L2400,250" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 6" fill="none" />
        </svg>
      </div>
    </div>
  );
}

export function TechCardVisual() {
  return (
    <div className="h-72 md:h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950 flex flex-col items-center justify-center">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
       <div className="relative z-10 w-full px-8 flex flex-col items-center gap-6">
          <div className="flex gap-8 w-full justify-center">
             <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10"><Code2 className="w-5 h-5" /></div>
                <span className="text-[10px] text-slate-500 font-mono">TS / Strict</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10"><Layers className="w-5 h-5" /></div>
                <span className="text-[10px] text-slate-500 font-mono">Scalability</span>
             </div>
          </div>
          <div className="relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-px h-6 bg-gradient-to-b from-transparent via-blue-500/50 to-blue-500" />
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
             <div className="w-48 p-4 rounded-2xl bg-slate-900 border border-white/10 backdrop-blur-xl relative z-20 shadow-2xl">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded bg-white text-black flex items-center justify-center font-bold text-xl">N</div>
                   <div className="text-left">
                      <div className="text-sm font-bold text-white">Next.js 15</div>
                      <div className="text-[10px] text-slate-400">Server Components</div>
                   </div>
                </div>
                <div className="mt-3 flex gap-1.5">
                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/30" />
                </div>
             </div>
          </div>
          <div className="flex flex-col items-center gap-2 relative">
             <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />
             <div className="w-10 h-10 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10 relative z-10"><ShieldCheck className="w-5 h-5" /></div>
             <span className="text-[10px] text-slate-500 font-mono">Secure</span>
          </div>
       </div>
    </div>
  );
}

export function UXCardVisual() {
    return (
        <div className="h-72 md:h-80 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
             <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20"><MousePointerClick size={20} /></div>
                    <h3 className="font-heading text-xl font-bold text-white">UX/UI Архитектура</h3>
                </div>
                <p className="text-slate-400 text-sm max-w-md mb-8">
                    Мы проектируем "туннели продаж". Убираем лишние клики, чтобы пользователь беспрепятственно дошел до кнопки "Купить".
                </p>
                <div className="mt-auto relative w-full h-24 flex items-center justify-between px-4">
                    <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-slate-700 via-pink-500/50 to-emerald-500" />
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-500 ring-4 ring-slate-900" />
                        <span className="text-[10px] text-slate-500 font-mono uppercase">Визит</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-pink-500 ring-4 ring-slate-900 animate-pulse" />
                        <span className="text-[10px] text-pink-400 font-mono uppercase">Интерес</span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                             <div className="text-white font-bold text-xs">₽</div>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-mono uppercase font-bold">Покупка</span>
                    </div>
                    <motion.div 
                        className="absolute top-1/2 -translate-y-1/2 left-4 w-4 h-4 pointer-events-none"
                        animate={{ left: ["5%", "50%", "95%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-2 h-2 bg-white rounded-full blur-[2px]" />
                    </motion.div>
                </div>
             </div>
        </div>
    )
}