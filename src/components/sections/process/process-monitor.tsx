"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS_DATA } from "@/data/process.data";
import { cn } from "@/lib/utils";

interface Props {
  activeStepId: string;
}

export const ProcessMonitor = ({ activeStepId }: Props) => {
  const activeStep = PROCESS_DATA.find((s) => s.id === activeStepId) || PROCESS_DATA[0];
  const Icon = activeStep.icon;

  return (
    <div className="hidden lg:flex w-full h-[500px] sticky top-32 rounded-3xl overflow-hidden border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl">
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      
      {/* Dynamic Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="flex flex-col items-center gap-8"
          >
            {/* Holographic Icon Container */}
            <div className="relative group">
              <div className={cn("absolute inset-0 bg-gradient-to-r opacity-40 blur-[40px] rounded-full transition-colors duration-500", activeStep.gradient)} />
              <div className="relative w-32 h-32 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 rounded-2xl border border-white/5 mask-gradient" />
                <Icon className={cn("w-16 h-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]", activeStep.color)} />
              </div>
              
              {/* Decorative Scanning Lines */}
              <div className="absolute -left-12 -right-12 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -top-12 -bottom-12 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>

            {/* Status Text */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
                 <div className={cn("w-2 h-2 rounded-full animate-pulse bg-current", activeStep.color)} />
                 <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Система: Активна</span>
              </div>
              
              <h3 className="text-3xl font-heading font-bold text-white">
                 {activeStep.title}
              </h3>
              
              {/* FIX: Убрал bg-clip-text, сделал просто цветным для лучшей читаемости */}
              <p className={cn("text-lg font-bold uppercase tracking-wider", activeStep.color)}>
                // {activeStep.result}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer System Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5 bg-slate-900/50 flex justify-between text-[10px] text-slate-500 font-mono uppercase">
        <span>ID: {activeStep.id.toUpperCase()}</span>
        <span>Соединение защищено</span>
        <span>ADLight Protocol v2.1</span>
      </div>
    </div>
  );
};