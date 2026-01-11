import React from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, MousePointerClick, Loader2, Code2, Layers, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

// Общий паттерн сетки для фона
const GridPattern = () => (
  <div className="absolute inset-0 z-0 opacity-[0.03]" 
       style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
  />
);

// --- SPEED VISUAL ---
export function SpeedCardVisual() {
  return (
    <div className="h-full w-full relative overflow-hidden bg-slate-950 flex rounded-2xl border border-white/5">
      <GridPattern />
      
      {/* Левая часть: "Старый мир" */}
      <div className="w-1/2 relative border-r border-white/5 bg-slate-900/50 backdrop-blur-sm flex flex-col items-center justify-center grayscale opacity-60">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <Loader2 className="w-12 h-12 mb-4 animate-spin text-slate-500" />
        <div className="space-y-2 text-center relative z-10">
          <div className="h-2 w-24 bg-slate-800 rounded mx-auto" />
          <div className="h-2 w-16 bg-slate-800 rounded mx-auto" />
        </div>
        <span className="mt-4 text-xs font-mono text-slate-600 border border-slate-700/50 px-2 py-1 rounded">
          TTFB: 2.4s
        </span>
      </div>

      {/* Правая часть: "Next.js" */}
      <div className="w-1/2 relative bg-gradient-to-br from-emerald-950/20 to-slate-950 flex flex-col items-center justify-center overflow-hidden">
        {/* Сканирующая линия */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-1 bg-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.5)] z-20"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
        />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 blur-[40px] opacity-20" />
            <Zap className="w-16 h-16 text-emerald-400 fill-emerald-400/20 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          </div>
          <h4 className="mt-4 text-2xl font-bold text-white tracking-tight">Instant</h4>
          <span className="mt-2 text-xs font-mono text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full">
            TTFB: 0.05s
          </span>
        </div>
      </div>
    </div>
  );
}

// --- ROI VISUAL ---
export function ROICardVisual() {
  return (
    <div className="h-full w-full relative overflow-hidden bg-slate-950 rounded-2xl border border-white/5 p-8 flex flex-col justify-end">
      <GridPattern />
      
      {/* Header */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono text-blue-400">LIVE ANALYTICS</span>
        </div>
        <h3 className="text-xl font-bold text-white">ROI Growth</h3>
      </div>

      {/* Graph Area */}
      <div className="relative h-2/3 w-full flex items-end justify-between gap-2 px-2 pb-4">
         {/* Столбики графика */}
         {[30, 45, 35, 60, 50, 80, 95].map((h, i) => (
           <motion.div 
             key={i}
             initial={{ height: 0 }}
             whileInView={{ height: `${h}%` }}
             transition={{ duration: 0.5, delay: i * 0.1 }}
             className={cn(
               "w-full rounded-t-sm relative group",
               i === 6 ? "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" : "bg-slate-800/50 hover:bg-slate-700"
             )}
           >
             {i === 6 && (
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">
                 +320%
               </div>
             )}
           </motion.div>
         ))}
      </div>

      {/* Decorative Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <path d="M0,300 Q150,250 300,100 T600,50" fill="none" stroke="#3b82f6" strokeWidth="2" />
      </svg>
    </div>
  );
}

// --- UX VISUAL ---
export function UXCardVisual() {
  return (
    <div className="h-full w-full relative overflow-hidden bg-slate-950 rounded-2xl border border-white/5 flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-pink-500/10 via-slate-950 to-slate-950" />
      
      {/* Mobile Frame Simulation */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6">
        <div className="w-48 h-[280px] bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Screen Content */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-slate-800 z-20 flex justify-center">
             <div className="w-12 h-3 bg-slate-950 rounded-b-lg" />
          </div>
          
          <div className="p-4 pt-8 space-y-3">
             <div className="h-8 w-full bg-slate-800/50 rounded-lg animate-pulse" />
             <div className="flex gap-2">
                <div className="h-20 w-1/2 bg-slate-800/50 rounded-lg" />
                <div className="h-20 w-1/2 bg-slate-800/50 rounded-lg" />
             </div>
             {/* The "Buy" Button */}
             <motion.div 
               className="mt-4 h-10 w-full bg-pink-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] cursor-pointer"
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
             >
                <span className="text-xs font-bold text-white">Conversion Action</span>
                <MousePointerClick className="w-3 h-3 ml-2 text-white" />
             </motion.div>
          </div>

          {/* Finger Tap Effect */}
          <div className="absolute bottom-12 right-12 w-8 h-8 bg-white/20 rounded-full blur-md animate-ping" />
        </div>
      </div>
    </div>
  );
}

// --- TECH VISUAL ---
export function TechCardVisual() {
  return (
    <div className="h-full w-full relative overflow-hidden bg-slate-950 rounded-2xl border border-white/5 flex items-center justify-center">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="relative z-10 flex gap-8">
        {/* Node 1 */}
        <div className="flex flex-col items-center gap-3">
           <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)] relative group">
              <Code2 className="w-8 h-8 text-indigo-400" />
              <div className="absolute inset-0 border border-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
           </div>
           <span className="text-[10px] font-mono text-indigo-300">TypeScript</span>
        </div>

        {/* Connection Line */}
        <div className="relative self-center w-16 h-[1px] bg-slate-800 overflow-hidden">
           <motion.div 
             className="absolute inset-0 bg-indigo-500 w-1/2"
             animate={{ x: ["-100%", "200%"] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           />
        </div>

        {/* Node 2 */}
        <div className="flex flex-col items-center gap-3">
           <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-lg relative">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900" />
              <Layers className="w-8 h-8 text-white" />
           </div>
           <span className="text-[10px] font-mono text-slate-400">Next.js 15</span>
        </div>
      </div>
    </div>
  );
}