"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/navigation.data";
import { MobileMenu } from "./mobile-menu";
import { useUIStore } from "@/store/ui-store";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { openContactModal } = useUIStore();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    if (latest <= 50 && isScrolled) setIsScrolled(false);
  });

  // --- 🔥 ФИНАЛЬНАЯ ВЕРСИЯ СКРОЛЛА ---
  // Работает в связке с "Фантомным якорем" в StoryBlock.
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault(); // Отменяем стандартный переход

      const targetId = href.replace("#", "");
      // Ищем элемент по ID. В StoryBlock ID теперь висит на невидимом span'е выше контента.
      const elem = document.getElementById(targetId);

      if (elem) {
        // Просто и надежно скроллим к этому span'у.
        // Так как span имеет absolute -top-24, он автоматически даст нужный отступ для хедера.
        elem.scrollIntoView({ 
          behavior: "smooth",
          block: "start" 
        });
        
        // Обновляем URL без перезагрузки и прыжков
        window.history.pushState(null, "", href);
      }
    }
    
    // Закрываем мобильное меню
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        id="main-header"
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3" 
            : "bg-transparent border-b border-transparent py-6"
        )}
      >
        <div className="container-width flex items-center justify-between">
          
          {/* 1. Логотип */}
          <Link 
            href="/" 
            // Клик по лого плавно возвращает наверх
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative z-50 font-heading text-2xl font-bold tracking-tight text-white group"
          >
            ADLight <span className="text-primary transition-colors group-hover:text-accent">Digital</span>
          </Link>

          {/* 2. Навигация (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              // --- DROPDOWN ---
              if (link.type === "dropdown") {
                return (
                  <div key={link.href} className="relative group/dropdown px-4 py-2 cursor-pointer">
                    <button className="text-sm font-medium text-slate-300 group-hover/dropdown:text-white transition-colors flex items-center gap-1">
                      {link.label}
                      <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300">
                      <div className="w-72 p-2 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl grid gap-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl -z-10" />
                        
                        {link.items?.map((item) => (
                           <Link
                             key={item.href}
                             href={item.href}
                             onClick={(e) => handleScroll(e, item.href)} // <-- Скролл обработчик
                             className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                           >
                             <div className="mt-0.5 p-1.5 rounded-lg bg-slate-800 text-slate-400 group-hover/item:text-primary group-hover/item:bg-primary/10 transition-colors">
                               {item.icon && <item.icon size={16} />}
                             </div>
                             <div>
                               <div className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors">
                                 {item.label}
                               </div>
                               <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                                 {item.desc}
                               </div>
                             </div>
                           </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // --- ОБЫЧНАЯ ССЫЛКА ---
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)} // <-- Скролл обработчик
                  className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Кнопки */}
          <div className="flex items-center gap-3">
             <button
               onClick={openContactModal}
               className="hidden md:flex items-center gap-2 h-10 px-6 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all"
             >
               Обсудить проект
             </button>

             <button 
               onClick={() => setIsMobileMenuOpen(true)}
               className="md:hidden p-2 text-slate-200 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
             >
               <Menu size={24} />
             </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}