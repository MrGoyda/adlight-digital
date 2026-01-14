"use client";
import React, { useEffect, useRef } from "react";
import { PROCESS_DATA } from "@/data/process.data";
import { cn } from "@/lib/utils";
import { TextScramble } from "@/components/ui/text-scramble";

interface Props {
  activeStepId: string;
  setActiveStepId: (id: string) => void;
}

export const ProcessFeed = ({ activeStepId, setActiveStepId }: Props) => {
  const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;

      const viewportCenter = window.innerHeight / 2;
      let closestStepId = activeStepId;
      let minDistance = Number.POSITIVE_INFINITY;

      PROCESS_DATA.forEach((step) => {
        const element = stepRefs.current[step.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - elementCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestStepId = step.id;
          }
        }
      });

      if (closestStepId !== activeStepId) {
        setActiveStepId(closestStepId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeStepId, setActiveStepId]);

  return (
    // FIX: 
    // Mobile: pb-0 (убираем лишнее, отступы внутри секции и карточек достаточны)
    // Desktop: lg:pb-24 (аккуратный отступ вместо огромного 40vh)
    <div className="flex flex-col gap-12 lg:gap-40 py-10 lg:py-20 relative pb-0 lg:pb-24">
      {/* GLOBAL LINE (DESKTOP) */}
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-slate-800/50" />

      {PROCESS_DATA.map((step, index) => (
        <ProcessStepItem 
            key={step.id} 
            step={step} 
            isActive={activeStepId === step.id}
            setRef={(el: HTMLDivElement) => (stepRefs.current[step.id] = el)}
            isLast={index === PROCESS_DATA.length - 1}
        />
      ))}
    </div>
  );
};

// --- КОМПОНЕНТ ШАГА ---
const ProcessStepItem = ({ step, isActive, setRef, isLast }: any) => {
  return (
    <div ref={setRef} className="relative group min-h-min lg:min-h-[30vh]">
       
       {/* =======================
           DESKTOP LAYOUT 
           ======================= */}
       <div className="hidden lg:block pl-32 relative">
         
         {/* 1. NODE (ТОЧКА) */}
         <div 
           className={cn(
              "absolute left-[23px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-500 z-20 bg-slate-950",
              isActive 
                ? `border-white scale-110 shadow-[0_0_20px_2px_currentColor]`
                : "border-slate-700 scale-100 bg-slate-900",
              step.color
           )}
         >
            {isActive && <div className={cn("absolute inset-0 rounded-full animate-ping opacity-75", step.color.replace('text-', 'bg-'))} />}
         </div>
         
         {/* 2. ACTIVE BEAM (ЛУЧ) */}
         <div 
           className={cn(
              "absolute left-8 top-6 w-[2px] transition-all duration-700 z-10 origin-top pointer-events-none",
              isActive ? "opacity-100" : "opacity-0",
              isLast ? "h-0" : "h-[calc(100%+12rem)]", 
           )} 
           style={{
             maskImage: isLast ? "none" : "linear-gradient(to bottom, black 80%, transparent 100%)",
             WebkitMaskImage: isLast ? "none" : "linear-gradient(to bottom, black 80%, transparent 100%)"
           }}
         >
             <div className={cn(
                "w-full h-full bg-gradient-to-b from-transparent via-current to-transparent bg-[length:100%_200%] animate-beam-flow", 
                 step.color
             )} />
         </div>

         {/* 3. CONNECTOR */}
         <div className={cn(
            "absolute left-[34px] top-[18px] h-px bg-slate-800 transition-all duration-500 origin-left",
            isActive ? "w-20 opacity-100" : "w-10 opacity-30"
         )}>
            <div className={cn(
               "absolute inset-0 bg-gradient-to-r from-transparent to-current opacity-50", 
                step.color
            )} />
         </div>

         {/* 4. CONTENT */}
         <div className={cn("transition-all duration-500", isActive ? "opacity-100 translate-x-0" : "opacity-40 -translate-x-4")}>
           <span className={cn("text-xs font-bold font-mono mb-2 block tracking-widest uppercase", step.color)}>
             // ЭТАП {step.stepNumber}
           </span>
           
           <h3 className="text-3xl font-heading font-bold text-white mb-4 h-[40px] flex items-center">
             {isActive ? <TextScramble trigger={isActive}>{step.title}</TextScramble> : step.title}
           </h3>
           
           <p className="text-slate-400 text-lg leading-relaxed max-w-lg border-l-2 border-white/5 pl-4">
             {step.description}
           </p>
         </div>
       </div>

       {/* =======================
           MOBILE LAYOUT 
           ======================= */}
       {/* FIX: pb-12 здесь создает отступ между элементами. Для последнего элемента он может быть лишним визуально, но для ритма лучше оставить. 
           Основную "дыру" мы убрали в родителе (pb-0). */}
       <div className="lg:hidden flex flex-col gap-4 pl-6 border-l border-slate-800 relative pb-12">
         
          <div 
             className={cn(
                "absolute left-[-1px] top-0 h-full w-[2px] transition-opacity duration-300 overflow-hidden",
                isActive ? "opacity-100" : "opacity-0"
             )}
          >
             <div className={cn("w-full h-full bg-gradient-to-b from-transparent via-current to-transparent animate-beam-flow", step.color)} />
          </div>

          <div className={cn(
             "absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full border border-slate-900 transition-colors duration-300",
             isActive ? step.color.replace('text-', 'bg-') : "bg-slate-800"
          )} />

          <div>
            <span className={cn("text-[10px] font-bold font-mono mb-1 block uppercase tracking-wider", step.color)}>
               ЭТАП {step.stepNumber}
            </span>
            <h3 className={cn("text-2xl font-heading font-bold transition-colors duration-300", isActive ? "text-white" : "text-slate-500")}>
               {step.title}
            </h3>
          </div>

          <div className={cn(
             "rounded-xl border p-4 transition-all duration-500 overflow-hidden relative",
             isActive 
               ? "bg-slate-900/80 border-white/20 shadow-lg translate-x-0" 
               : "bg-slate-950/50 border-white/5 opacity-80 grayscale translate-x-2"
          )}>
              <div className={cn("absolute inset-0 opacity-10 bg-gradient-to-r", step.gradient)} />
              <div className="flex items-center gap-3 relative z-10">
                 <div className={cn("p-2 rounded-lg bg-white/5 text-white border border-white/10", step.color.replace('text-', 'bg-').replace('400', '500/20'))}>
                    <step.icon size={18} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Результат</span>
                    <span className="text-sm font-bold text-white">{step.result}</span>
                 </div>
              </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
             {step.description}
          </p>
       </div>

    </div>
  );
};