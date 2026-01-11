"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  SpeedCardVisual, 
  ROICardVisual, 
  UXCardVisual, 
  TechCardVisual 
} from "./visuals"; 

export const VisualAdapter = ({ id }: { id: string }) => {
  
  const renderVisual = () => {
    switch (id) {
      case "speed": return <SpeedCardVisual />;
      case "roi": return <ROICardVisual />;
      case "ux": return <UXCardVisual />;
      case "tech": return <TechCardVisual />;
      default: return null;
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      
      {/* 1. Атмосферное свечение (Ambient Glow) */}
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-30 blur-[100px] rounded-full bg-gradient-to-tr pointer-events-none",
        id === "speed" && "from-emerald-500/30 to-cyan-500/10",
        id === "roi" && "from-blue-500/30 to-indigo-500/10",
        id === "ux" && "from-pink-500/30 to-rose-500/10",
        id === "tech" && "from-violet-500/30 to-purple-500/10"
      )} />

      {/* 2. Основной контейнер (Glass Slab) */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
        whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-[600px] aspect-video group"
      >
        {/* Dynamic Border Gradient */}
        <div className={cn(
          "absolute -inset-[1px] rounded-3xl bg-gradient-to-br opacity-50 blur-sm transition-opacity duration-500",
          id === "speed" ? "from-emerald-500 via-transparent to-cyan-500" :
          id === "roi" ? "from-blue-500 via-transparent to-indigo-500" :
          id === "ux" ? "from-pink-500 via-transparent to-rose-500" :
          "from-violet-500 via-transparent to-purple-500"
        )} />

        {/* The Card Itself */}
        <div className="relative h-full w-full rounded-3xl overflow-hidden bg-slate-950/90 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Top Reflection (Glare) */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-20" />
            
            {/* Content */}
            {renderVisual()}
        </div>

        {/* Bottom Reflection (Floor) */}
        <div className="absolute -bottom-12 left-4 right-4 h-12 bg-gradient-to-b from-white/5 to-transparent blur-xl opacity-30 rounded-full scale-x-90" />
      </motion.div>
    </div>
  );
};