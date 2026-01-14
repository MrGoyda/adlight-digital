"use client";

import React from "react";
import { ecosystemData } from "@/data/ecosystem.data";
import { VisualsWrapper } from "./visuals-wrapper";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const EcosystemSection = () => {
  const { heading, subheading, description, cta, metrics } = ecosystemData;

  // Анимация для контейнера метрик (появление по очереди)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative w-full py-16 lg:py-32 overflow-hidden bg-slate-950">
      
      {/* --- PHANTOM ANCHOR (Rule #7) --- */}
      {/* Изменен ID на expertise для навигации */}
      <span id="expertise" className="block h-0 -mt-[10vh] invisible absolute top-0" />

      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 lg:opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="flex flex-col gap-8 lg:gap-10 lg:col-span-6 items-center lg:items-start text-center lg:text-left order-1">
            
            {/* Header Group */}
            <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 w-fit backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
                  {subheading}
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-[1.1]">
                Практики, <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  а не теоретики.
                </span>
              </h2>
            </div>

            {/* VISUALS (MOBILE ONLY POSITION) */}
            <div className="w-full lg:hidden my-2">
               <VisualsWrapper metrics={metrics} />
            </div>

            {/* Description */}
            <div className="space-y-4 text-slate-400 text-base lg:text-lg leading-relaxed max-w-lg lg:border-l-2 lg:border-white/5 lg:pl-6">
              {description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            {/* Mobile Metrics Grid (Tech Widgets) */}
            <motion.div 
              className="grid grid-cols-2 gap-3 lg:hidden w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <motion.div 
                    key={metric.id} 
                    variants={itemVariants}
                    className="relative bg-slate-900/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex flex-col items-center text-center gap-3 overflow-hidden group"
                  >
                    {/* Inner Gradient Shine */}
                    <div className={cn("absolute inset-0 opacity-0 group-active:opacity-20 transition-opacity bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none")} />
                    
                    <div className={`p-2.5 rounded-xl bg-white/5 ${metric.accentColor} ring-1 ring-white/5`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white font-heading tracking-tight">{metric.value}</div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">{metric.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Button */}
            <div className="pt-4 w-full lg:w-auto">
              <Link 
                href={cta.url}
                target="_blank"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] w-full lg:w-auto overflow-hidden shadow-lg shadow-blue-900/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                    {cta.text}
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-blue-100" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Visuals (DESKTOP ONLY POSITION) */}
          <div className="hidden lg:block w-full lg:col-span-6 order-2 mt-10 lg:mt-0">
            <VisualsWrapper metrics={metrics} />
          </div>
          
        </div>
      </div>
    </section>
  );
};