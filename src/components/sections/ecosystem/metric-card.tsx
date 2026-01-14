// src/components/sections/ecosystem/metric-card.tsx
"use client";

import React from "react";
import { type MetricItem } from "@/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MetricCardProps {
  metric: MetricItem;
  index: number;
}

export const MetricCard = ({ metric, index }: MetricCardProps) => {
  const Icon = metric.icon;

  // Уплотняем позиции, чтобы они не пересекались с текстом
  const positionClasses: Record<string, string> = {
    "top-left": "-top-4 -left-8",
    "top-right": "-top-10 -right-4",
    "bottom-left": "-bottom-10 -left-4",
    "bottom-right": "-bottom-6 -right-10",
  };

  return (
    <motion.div
      // ... (анимации те же)
      className={cn(
        "absolute z-30 hidden lg:flex flex-col gap-1.5", // z-30 чтобы быть выше всех оверлеев
        "p-4 min-w-[160px] rounded-2xl",
        "bg-slate-900/90 backdrop-blur-2xl border border-white/10",
        "shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
        positionClasses[metric.position || "top-left"]
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn("p-2 rounded-lg bg-white/5", metric.accentColor)}>
          <Icon size={18} />
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
          {metric.label}
        </span>
      </div>

      <div className="mt-1">
        <div className="text-2xl font-bold text-white font-heading leading-none">
          {metric.value}
        </div>
        <div className="text-[10px] text-slate-500 mt-1 font-medium">
          {metric.subtext}
        </div>
      </div>
    </motion.div>
  );
};