"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function CustomSelect({ options, value, onChange, placeholder, label }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className="group relative w-full" ref={containerRef}>
      {label && (
        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5 ml-1">
          {label}
        </label>
      )}
      
      {/* TRIGGER BUTTON */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-full cursor-pointer rounded-xl border px-4 py-3 text-sm transition-all duration-200 select-none",
          isOpen 
            ? "bg-slate-900 border-primary/50 ring-1 ring-primary/50 text-white" 
            : "bg-slate-950/50 border-white/10 hover:border-white/20 text-slate-200"
        )}
      >
        <span className={cn("block truncate pr-8", !value && "text-slate-500")}>
          {selectedLabel || placeholder || "Выберите..."}
        </span>
        
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none transition-transform duration-300">
           <ChevronDown size={16} className={cn(isOpen && "rotate-180 text-primary")} />
        </span>
      </div>

      {/* DROPDOWN MENU */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            // --- ГЛАВНОЕ ИЗМЕНЕНИЕ ЗДЕСЬ ---
            // Mobile: relative (раздвигает контент)
            // Desktop (md): absolute (летит поверх)
            className="relative z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur-xl md:absolute md:shadow-2xl md:shadow-black/50"
            
            // Анимация для Mobile (сдвиг высоты)
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }} // Smooth Apple-like easing
          >
            <div className="max-h-[240px] overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "relative cursor-pointer select-none py-3 pl-4 pr-9 text-sm text-slate-300 transition-colors active:scale-[0.98]",
                    "hover:bg-white/5 hover:text-white", // Desktop hover
                    "active:bg-white/10", // Mobile tap feedback
                    value === option.value && "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                >
                  <span className={cn("block truncate", value === option.value && "font-medium")}>
                    {option.label}
                  </span>
                  
                  {value === option.value && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary">
                      <Check size={14} />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}