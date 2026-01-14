// src/components/sections/google-ads/promo-banner.tsx
"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useUIStore } from "@/store/ui-store"; 
import { googleAdsData } from "@/data/google-ads.data";

export function PromoBanner() {
  const { openContactModal } = useUIStore(); 
  const { promo } = googleAdsData;

  const handleOrder = () => {
    openContactModal(promo.subject);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-900/60 p-8 backdrop-blur-xl lg:p-10">
      {/* Background Effects */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
      <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50" />

      <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left: Text Info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400">
            <CheckCircle2 size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">{promo.badge}</span>
          </div>
          
          {/* ДОБАВЛЕН КЛАСС whitespace-nowrap */}
          <h3 className="text-3xl font-bold text-white font-heading whitespace-nowrap">
            {promo.priceTitle}: <span className="text-emerald-400">{promo.priceAmount}</span>
          </h3>
          
          <p className="text-slate-400 max-w-md">
            {promo.priceDescription}
          </p>
        </div>

        {/* Right: CTA Button */}
        <button
          onClick={handleOrder}
          className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-500 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
          
          <span className="relative z-10">{promo.ctaText}</span>
          <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" size={20} />
        </button>
      </div>
    </div>
  );
}