"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceData } from "@/types";
import { TechTooltip } from "@/components/ui/tech-tooltip";
import { ActionModule } from "@/components/modules/action-module";

interface Props {
  data: ServiceData;
  isActive: boolean;
  onActivate: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  globalPhone: string;
  setGlobalPhone: (v: string) => void;
}

export function ServiceCardDesktop({ data, isActive, onActivate, onMouseMove, globalPhone, setGlobalPhone }: Props) {
  
  // Преобразование hex в rgb для использования в градиенте с прозрачностью
  // Или просто используем hex, если прозрачность не нужна, но для radial-gradient лучше rgb
  // Простой хак: используем HEX напрямую в gradient string, так как браузеры это поддерживают
  
  return (
    <motion.div
      layout
      animate={{ flex: isActive ? 3 : 1, opacity: 1 }}
      transition={{ 
        layout: { duration: 0.4, type: "spring", stiffness: 100, damping: 20 },
        flex: { duration: 0.4, type: "spring", stiffness: 100, damping: 20 }
      }}
      onClick={onActivate}
      onHoverStart={onActivate}
      onMouseMove={onMouseMove}
      className={cn(
        "relative h-full rounded-3xl border bg-slate-900/60 backdrop-blur-xl overflow-hidden cursor-pointer group",
        isActive ? "border-white/20 shadow-2xl" : "border-white/5 hover:bg-white/10 hover:border-white/10",
        isActive && data.shadow, // Тень теперь подтянется, так как класс полный в data
        data.border // Бордер тоже
      )}
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
    >
      {/* Spotlight & Gradient (FIXED) */}
      <div 
        className={cn("pointer-events-none absolute inset-0 z-0 transition-opacity duration-500", isActive ? "opacity-100" : "opacity-0 group-hover:opacity-30")}
        style={{ 
          // ИСПОЛЬЗУЕМ HEX ВМЕСТО НЕВАЛИДНОГО 'rgba(bg-blue-500...)'
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${data.hex}26, transparent 40%)` 
          // ${data.hex}26 - это добавление 15% прозрачности к HEX коду
        }}
      />
      <div className={cn("absolute inset-0 bg-gradient-to-b opacity-0 transition-opacity duration-500", data.gradient, isActive ? "opacity-100" : "opacity-0")} />

      {/* 1. TOP ANCHOR */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
        <motion.div 
          layout="position"
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={cn("p-3 rounded-2xl transition-colors duration-300", isActive ? `${data.color} text-white shadow-lg` : "bg-white/5 text-slate-400 group-hover:text-white")}
        >
          <data.mainIcon className="w-7 h-7" />
        </motion.div>
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/50 border border-white/10 backdrop-blur-md"
            >
              <data.statsBadge.icon className={cn("w-4 h-4", data.color.replace("bg-", "text-"))} />
              <div className="flex flex-col leading-none">
                 <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">{data.statsBadge.label}</span>
                 <span className="text-sm font-bold text-white">{data.statsBadge.value}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. CENTER TITLE */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 z-10",
        isActive ? "opacity-0" : "opacity-100 delay-100"
      )}>
        <span className="text-xl font-heading font-bold text-slate-500 uppercase tracking-widest -rotate-90 whitespace-nowrap group-hover:text-slate-300 transition-colors">
           {data.title}
        </span>
      </div>

      {/* 3. BOTTOM ANCHOR */}
      <div className="absolute bottom-8 left-8 right-8 z-20">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 10, filter: "blur(4px)", transition: { duration: 0.2 } }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
               <div className="w-[460px]"> 
                  <div className="mb-6">
                    <h3 className="text-4xl font-heading font-bold text-white mb-2 whitespace-nowrap">{data.title}</h3>
                    <p className={cn("text-sm font-bold uppercase tracking-widest mb-4 bg-clip-text text-transparent bg-gradient-to-r whitespace-nowrap", data.color === "bg-blue-500" ? "from-blue-400 to-cyan-200" : (data.color === "bg-emerald-500" ? "from-emerald-400 to-teal-200" : (data.color === "bg-violet-500" ? "from-violet-400 to-purple-200" : "from-amber-400 to-orange-200")))}>
                      // {data.tagline}
                    </p>
                    <p className="text-slate-300 text-base leading-relaxed w-[420px]">{data.desc}</p>
                  </div>

                  <div className="grid grid-cols-5 gap-4 mb-8 p-5 rounded-2xl bg-slate-950/40 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                    <div className="col-span-2 flex flex-col gap-3 border-r border-white/10 pr-4">
                      <span className="text-[10px] uppercase text-slate-500 font-bold flex items-center gap-1"><Info className="w-3 h-3" /> Идеально для:</span>
                      {data.idealFor.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                          <item.icon className="w-3.5 h-3.5 text-slate-500" /> {item.label}
                        </div>
                      ))}
                    </div>
                    <div className="col-span-3 flex flex-col gap-3 pl-2">
                      <span className="text-[10px] uppercase text-slate-500 font-bold flex items-center gap-1"><Cpu className="w-3 h-3" /> Тех. Ядро:</span>
                      <div className="flex items-center gap-3">
                        {data.techSpecs.map((spec, i) => (
                          <TechTooltip key={i} text={spec.tooltip}>
                            {/* FIX: ИСПОЛЬЗУЕМ data.hoverColor вместо интерполяции */}
                            <div className={cn(
                                "relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-2 transition-all duration-300 group/icon cursor-help overflow-hidden",
                                `${data.hoverColor} hover:border-transparent`
                            )}>
                              <Image src={spec.iconSrc} alt={spec.name} width={24} height={24} className="w-full h-full object-contain grayscale group-hover/icon:grayscale-0 transition-all duration-300 opacity-80 group-hover/icon:opacity-100" />
                            </div>
                          </TechTooltip>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/10 mb-6" />
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Инвестиции</span>
                      <span className="text-2xl font-bold text-white tracking-tight">{data.price}</span>
                    </div>
                    <ActionModule colorClass={data.color} globalPhone={globalPhone} setGlobalPhone={setGlobalPhone} />
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}