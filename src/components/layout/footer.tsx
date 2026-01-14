"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, MapPin, Phone } from "lucide-react";
import { useUIStore } from "@/store/ui-store";
import { footerData } from "@/data/footer.data";
import { cn } from "@/lib/utils";
import React from "react";

// Типизация
interface FooterLink {
  label: string;
  href: string;
  icon?: React.ElementType;
  isHighlight?: boolean;
}

export function Footer() {
  const { openContactModal } = useUIStore();
  const { cta, companyInfo, columns, socials } = footerData;

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-slate-950 pt-16 pb-8" id="contacts">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ==================== PART 1: MEGA CTA (Compact Version) ==================== */}
        {/* Сделали чуть компактнее, чтобы не занимало 2 экрана на мобайле */}
        <div className="flex flex-col items-center text-center mb-16 border-b border-white/5 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading tracking-tight">
              {cta.title}
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              {cta.subtitle}
            </p>

            <button
              onClick={() => openContactModal(cta.subject)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white transition-all duration-300 mt-4"
            >
              <div className="absolute inset-0 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20 group-hover:bg-blue-500 group-hover:scale-[1.02] transition-all" />
              <span className="relative z-10">{cta.buttonText}</span>
              <ArrowUpRight className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
            </button>
          </motion.div>
        </div>

        {/* ==================== PART 2: THE GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* --- BRAND COLUMN (Лого + Инфо) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="font-heading text-2xl font-bold text-white mb-4">
                ADLight<span className="text-blue-500">.</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                {companyInfo.description}
              </p>
            </div>

            {/* Контакты в колонке бренда */}
            <div className="space-y-3 pt-2">
               <a href={companyInfo.phone.href} className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <span className="font-semibold tracking-wide">{companyInfo.phone.display}</span>
              </a>
              
              <div className="flex gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1",
                        social.className
                      )}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* --- LINKS COLUMNS (Сетка 2 колонки на мобайле, 8 на десктопе) --- */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {columns.map((col, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-l-2 border-blue-500/20 pl-3">
                  {col.title}
                </h4>
                
                <ul className="space-y-3">
                  {col.links.map((rawLink, lIdx) => {
                    const link = rawLink as FooterLink; 
                    const LinkIcon = link.icon;

                    return (
                      <li key={lIdx}>
                        <a 
                          href={link.href}
                          className={cn(
                            "group flex items-center gap-2.5 text-sm transition-all duration-300 py-1",
                            link.isHighlight 
                              ? "text-emerald-400 hover:text-emerald-300 font-medium" 
                              : "text-slate-400 hover:text-white"
                          )}
                        >
                          {/* Если это колонка Технологии (есть иконки) - делаем красивый виджет */}
                          {LinkIcon ? (
                             <div className="flex items-center gap-3 w-full p-2 -ml-2 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="flex h-7 w-7 items-center justify-center rounded bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                                   <LinkIcon size={14} />
                                </div>
                                <span>{link.label}</span>
                             </div>
                          ) : (
                            /* Обычная ссылка */
                            <>
                              <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors" />
                              <span className="group-hover:translate-x-1 transition-transform inline-block">
                                {link.label}
                              </span>
                            </>
                          )}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* ==================== PART 3: BOTTOM BAR ==================== */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4 text-center md:text-left">
          <p className="text-xs text-slate-600">
            {companyInfo.copyright}
          </p>
          
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-blue-500" />
              <span>{companyInfo.location}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}