"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TechTooltip({ children, text }: { children: React.ReactNode; text: string }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-3 px-3 py-2 bg-slate-900 text-[10px] text-slate-200 rounded-lg border border-white/10 whitespace-nowrap z-50 shadow-xl pointer-events-none"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}