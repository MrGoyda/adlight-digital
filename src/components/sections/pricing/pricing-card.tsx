'use client';

import { PricingPlan } from '@/types/pricing';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { useUIStore } from '@/store/ui-store';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  const { openContactModal } = useUIStore();
  const isHighlight = plan.visual.highlight;
  const theme = plan.visual.colorTheme;

  const handleBooking = () => {
    let subject = `Интересует тариф: ${plan.title}`;
    
    if (plan.id === 'kickstarter') subject = "Заявка на Грант (Partner Start)";
    if (plan.id === 'accelerator') subject = "Бронирование запуска (Business Launch)";
    if (plan.id === 'dominator') subject = "VIP Консультация (Ecosystem)";

    openContactModal(subject);
  };

  const themeStyles = {
    blue: {
      border: 'group-hover:border-blue-500/50',
      glow: 'group-hover:shadow-blue-500/20',
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      btn: 'hover:bg-blue-600 shadow-blue-500/20',
    },
    emerald: {
      border: 'border-emerald-500/50',
      glow: 'shadow-emerald-500/20',
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      btn: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/40 animate-pulse-slow',
    },
    slate: {
      border: 'group-hover:border-slate-400/50',
      glow: 'group-hover:shadow-slate-500/20',
      text: 'text-slate-300',
      bg: 'bg-slate-500/10',
      btn: 'hover:bg-slate-700 shadow-slate-500/20',
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative group flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-500 h-full !overflow-visible",
        "bg-slate-950/60 backdrop-blur-xl",
        // ✅ FIX: Изменили border-white/5 на border-white/10 для видимости на мобильных
        isHighlight ? "border-emerald-500/30 shadow-2xl scale-100 md:scale-105 z-10" : "border-white/10 hover:scale-[1.02] z-0",
        currentTheme.border,
        isHighlight && currentTheme.glow
      )}
    >
      {/* Badge (Бейдж) */}
      {plan.visual.badge && (
        <div className={cn(
          "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md z-20 whitespace-nowrap",
          "bg-slate-950 text-white",
          isHighlight ? "border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "border-white/10 text-slate-400"
        )}>
          {plan.visual.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-8 text-center relative z-10">
        <h3 className={cn("text-xl font-medium mb-2 mt-2", isHighlight ? "text-white" : "text-slate-400")}>
          {plan.title}
        </h3>
        <div className="flex items-end justify-center gap-1 mb-4">
          <span className={cn("text-4xl md:text-5xl font-bold tracking-tight text-white")}>
            {plan.price.amount}
          </span>
        </div>
        {plan.price.suffix && (
          <p className={cn("text-sm font-medium", currentTheme.text)}>
            {plan.price.suffix}
          </p>
        )}
        <p className="text-sm text-slate-400 mt-4 leading-relaxed min-h-[80px]">
          {plan.description}
        </p>

        {plan.logic.isRestricted && (
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-amber-400/80 bg-amber-500/10 py-2 px-3 rounded-lg border border-amber-500/20">
            <AlertTriangle className="w-4 h-4" />
            <span>Требуется собеседование</span>
          </div>
        )}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-1 relative z-10">
        {plan.features.map((feature, i) => (
          feature.included ? (
            <li key={i} className="flex items-start gap-3 text-sm">
              <div className={cn(
                "mt-0.5 min-w-[20px] h-5 rounded-full flex items-center justify-center",
                currentTheme.bg
              )}>
                <Check className={cn("w-3 h-3", currentTheme.text)} />
              </div>
              <span className="text-slate-300">
                {feature.text}
              </span>
            </li>
          ) : null
        ))}
      </ul>

      {/* Action Button */}
      <div className="w-full mt-auto relative z-10">
        <button 
          onClick={handleBooking}
          className={cn(
            "w-full py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 border border-white/5 relative overflow-hidden group/btn",
            "text-white bg-slate-900",
            currentTheme.btn
          )}
        >
           <span className="relative z-10 flex items-center justify-center gap-2">
             {plan.cta.text}
             <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
           </span>
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover/btn:animate-shimmer" />
        </button>
      </div>
    </motion.div>
  );
}