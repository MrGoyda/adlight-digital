"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeatureId } from "@/types";
import { FeatureDetailsModal } from "./feature-modal";
import { 
  CardWrapper, 
  SpeedCardVisual, 
  ROICardVisual, 
  UXCardVisual, 
  TechCardVisual 
} from "./visuals";

export function ValueProposition() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureId | null>(null);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-slate-950 border-t border-white/5">
      
      {/* 1. Light Horizons & Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-500/5 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-500/5 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.8)_100%)] pointer-events-none" />

      <div className="container-width relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            В 2026 году ваш сайт — это <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-300 to-accent">
              боевое оружие
            </span>, а не визитка.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Пока конкуренты теряют клиентов на устаревших конструкторах, мы создаем высокоскоростные цифровые активы, которые обожают алгоритмы Google и ваши пользователи.
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <CardWrapper onClick={() => setSelectedFeature('speed')} className="col-span-1">
               <SpeedCardVisual />
           </CardWrapper>

           <CardWrapper onClick={() => setSelectedFeature('roi')} className="col-span-1 lg:col-span-2">
               <ROICardVisual />
           </CardWrapper>

           <CardWrapper onClick={() => setSelectedFeature('ux')} className="col-span-1 lg:col-span-2">
               <UXCardVisual />
           </CardWrapper>

           <CardWrapper onClick={() => setSelectedFeature('tech')} className="col-span-1">
               <TechCardVisual />
           </CardWrapper>
        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
          {selectedFeature && (
              <FeatureDetailsModal 
                featureId={selectedFeature} 
                onClose={() => setSelectedFeature(null)} 
              />
          )}
      </AnimatePresence>
    </section>
  );
}