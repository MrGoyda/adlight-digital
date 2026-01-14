"use client";

import React from "react";
import Image from "next/image";
import { type MetricItem } from "@/types";
import { MetricCard } from "./metric-card";
import { motion } from "framer-motion";

interface VisualsWrapperProps {
  metrics: MetricItem[];
}

export const VisualsWrapper = ({ metrics }: VisualsWrapperProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      
      {/* Background Glow (Adaptive) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/10 blur-[60px] lg:blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <motion.div
        className="relative w-full max-w-[540px] mx-auto aspect-[16/10] z-20"
        // На мобилке (начальное состояние) - меньше поворота
        initial={{ opacity: 0, rotateX: 5, y: 30 }} 
        // На десктопе (через медиа-запросы Framer Motion сложнее, поэтому усредняем или управляем через variants, 
        // но здесь проще задать мягкую анимацию, которая хорошо смотрится везде)
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* Frame - Добавляем более явную границу на мобилке для контраста */}
        <div className="relative w-full h-full rounded-xl border border-white/10 lg:border-white/10 bg-slate-900/60 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/50 group">
          
          {/* Header Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 lg:h-9 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
            <div className="flex gap-1.5 opacity-50">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* Screenshot Image */}
          <div className="relative w-full h-full pt-8 lg:pt-9">
            <Image
              src="/images/ecosystem/adlight-preview.webp"
              alt="ADLight Outdoor Website Interface"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Scanner Effect - На мобилке делаем ярче и быстрее */}
            <motion.div 
                className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
                animate={{ top: ["-100%", "200%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute bottom-0 w-full h-[1px] bg-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50" />
          </div>
        </div>

        {/* HUD Metrics - ONLY DESKTOP */}
        {metrics.map((metric, index) => (
          <MetricCard key={metric.id} metric={metric} index={index} />
        ))}

      </motion.div>
    </div>
  );
};