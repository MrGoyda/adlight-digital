'use client';

import { PRICING_PLANS, PRICING_TITLE } from '@/data/pricing.data';
import { PricingCard } from './pricing-card';
import { ArrowRight } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen" />
         <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-900/50 border border-white/10 text-xs font-mono text-blue-400 mb-6 backdrop-blur-md">
            {PRICING_TITLE.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {PRICING_TITLE.heading}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {PRICING_TITLE.description}
          </p>
        </div>

        {/* Pricing Grid */}
        {/* ✅ ИСПРАВЛЕНО: Убрали items-start, чтобы карточки тянулись (stretch) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto relative">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
        
        {/* Navigation Footer: Services Link */}
        <div className="mt-16 md:mt-24 max-w-2xl mx-auto">
          <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
             <div className="bg-slate-950/90 backdrop-blur-xl rounded-xl p-8 text-center border border-white/5">
                <h4 className="text-white font-medium mb-2 text-lg">Нужна конкретная услуга отдельно?</h4>
                <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
                  Если вам не нужен комплексный тариф, вы можете заказать разработку сайта или настройку рекламы как отдельную услугу.
                </p>
                <a 
                  href="#services" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-bold uppercase tracking-wide border-b border-blue-400/20 hover:border-blue-300 pb-0.5"
                >
                  Смотреть цены на отдельные услуги
                  <ArrowRight className="w-4 h-4" />
                </a>
             </div>
          </div>
          
          <div className="mt-8 text-center">
             <p className="text-xs text-slate-600">
               * Условия тарифа "Партнерский Старт" обсуждаются индивидуально. Компания оставляет за собой право отказать в предоставлении гранта, если проект не пройдет внутренний отбор.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}