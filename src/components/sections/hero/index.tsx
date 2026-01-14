"use client";

import React from "react";
import Link from "next/link";
// 1. Импортируем FileText вместо Calculator
import { FileText, CheckCircle2, MessageCircle, Zap, TrendingUp, Users, Server } from "lucide-react";
import { motion, useMotionValue, type Variants } from "framer-motion";
import { HERO_DATA } from "@/data/hero.data";
import { HeroBackground } from "./hero-background";
import { AnimatedCounter } from "./animated-counter";
import { useUIStore } from "@/store/ui-store"; 

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { openContactModal } = useUIStore();

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  // ... (анимационные варианты createFloatAnimation, containerVariants, itemVariants оставляем без изменений)
  const createFloatAnimation = (delay: number, duration: number): Variants => ({
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -20, 0],
      rotate: [0, 1.5, -1.5, 0],
      transition: { delay, duration, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative flex h-auto w-full items-center justify-center overflow-hidden pt-36 pb-6 lg:pt-40 lg:pb-20 group bg-background"
    >
      <HeroBackground mouseX={mouseX} mouseY={mouseY} />

      <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center relative z-10 pointer-events-none w-full">
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="flex flex-col items-start text-left pointer-events-auto px-4 sm:px-0">
          
          {/* ... (Бейдж, Заголовок, Описание - оставляем без изменений) ... */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 lg:mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs sm:text-sm font-medium text-accent backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-accent"></span>
            </span>
            {HERO_DATA.badge}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight"
          >
            {HERO_DATA.title.line1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-300 to-accent animate-gradient">
              {HERO_DATA.title.highlight}
            </span>
            {HERO_DATA.title.line2}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 lg:mt-8 text-base sm:text-lg text-slate-300/80 max-w-xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: HERO_DATA.description }}
          />

          {/* КНОПКИ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/77071356701"
              target="_blank"
              className="relative overflow-hidden group/btn flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 sm:py-4 font-bold transition-all shadow-lg shadow-green-500/20 active:scale-95"
            >
               <div className="absolute inset-0 flex translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out z-0">
                  <div className="w-12 h-full bg-white/30 skew-x-[-20deg] blur-md"></div>
              </div>
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{HERO_DATA.buttons.whatsapp}</span>
            </Link>

            {/* 🔥 КНОПКА "ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ" */}
            <button
              // 2. Продающий текст для заголовка модалки
              onClick={() => openContactModal("Бесплатный расчет + Стратегия")}
              className="group/btn flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 sm:py-4 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
            >
              {/* 3. Иконка FileText (Документ/Предложение) */}
              <FileText className="w-5 h-5 text-primary group-hover/btn:text-white transition-colors" />
              {HERO_DATA.buttons.primary}
            </button>
          </motion.div>

          {/* ... (Нижний блок с галочками - без изменений) ... */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-10 lg:mt-16 pt-6 lg:pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400/80"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Работаем по договору</span>
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Поэтапная оплата</span>
            </motion.div>
             <motion.div variants={itemVariants} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Гарантия сроков</span>
            </motion.div>
          </motion.div>
        </div>

        {/* ... (ПРАВАЯ КОЛОНКА - без изменений) ... */}
        <div className="hidden lg:flex relative h-[600px] w-full items-center justify-center perspective-1000 pointer-events-auto">
             {/* ... тут код карточек без изменений ... */}
            <motion.div variants={createFloatAnimation(0, 8)} animate="animate" className="absolute top-[15%] left-[5%] z-20 w-60 p-5 rounded-2xl border border-accent/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.05)]">
               <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-accent/10 rounded-lg text-accent"><TrendingUp className="w-5 h-5" /></div>
                <h3 className="text-sm font-bold text-white">{HERO_DATA.stats.traffic.label}</h3>
              </div>
              <div className="space-y-2">
                 <div className="flex justify-between text-xs"><span className="text-slate-400">Google Ads:</span><span className="text-accent font-medium">{HERO_DATA.stats.traffic.google}</span></div>
                 <div className="flex justify-between text-xs"><span className="text-slate-400">SEO:</span><span className="text-accent font-medium">{HERO_DATA.stats.traffic.seo}</span></div>
              </div>
            </motion.div>

            <motion.div variants={createFloatAnimation(2, 10)} animate="animate" className="absolute top-[35%] left-[30%] z-30 w-80 p-6 rounded-2xl border border-primary/30 bg-slate-900/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(59,130,246,0.15)]">
               <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary text-xs font-bold text-white rounded-full shadow-lg shadow-blue-500/30">CORE SYSTEM</div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary"><Server className="w-8 h-8" /></div>
                <div><h3 className="text-lg font-bold text-white leading-none">{HERO_DATA.stats.tech.title}</h3><span className="text-xs text-primary">{HERO_DATA.stats.tech.sub}</span></div>
              </div>
              <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-lg flex items-center justify-between border border-white/5"><span className="text-xs text-slate-300 flex items-center gap-2"><Zap className="w-3 h-3 text-yellow-400" /> Скорость (LCP)</span><span className="text-sm font-bold text-white"><AnimatedCounter value={HERO_DATA.stats.tech.speed} suffix="s" /></span></div>
                  <div className="bg-white/5 p-3 rounded-lg flex items-center justify-between border border-white/5"><span className="text-xs text-slate-300">Google Speed Score</span><span className="text-sm font-bold text-accent"><AnimatedCounter value={HERO_DATA.stats.tech.score} suffix="/100" /></span></div>
              </div>
            </motion.div>

            <motion.div variants={createFloatAnimation(4, 9)} animate="animate" className="absolute bottom-[10%] right-[-5%] z-20 w-60 p-5 rounded-2xl border border-blue-400/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.05)]">
               <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Users className="w-5 h-5" /></div>
                <h3 className="text-sm font-bold text-white">Конверсия в Продажи</h3>
              </div>
              <div className="space-y-1">
                 <div className="text-2xl font-bold text-white"><AnimatedCounter value={HERO_DATA.stats.conversion.value} suffix="%" duration={3} /><span className="text-sm text-accent font-normal ml-1">↑</span></div>
                 <div className="text-xs text-slate-400">{HERO_DATA.stats.conversion.avg}</div>
              </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}