"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, ChevronRight, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation.data";
import { CONTACT_DATA } from "@/data/contact.data";
import { useUIStore } from "@/store/ui-store";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openContactModal } = useUIStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Варианты анимации (без изменений)
  const menuVariants: Variants = {
    closed: { x: "100%", opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const listVariants: Variants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    onClose();
    if (href.startsWith("#")) {
       // Даем время меню закрыться, потом скроллим
       setTimeout(() => {
           const element = document.getElementById(href.replace("#", ""));
           if (element) {
               element.scrollIntoView({ behavior: "smooth", block: "start" });
           }
       }, 300);
    }
  };

  const handleOpenModal = () => {
    onClose();
    // Безопасный вызов с задержкой
    setTimeout(() => openContactModal(), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-slate-950/80 backdrop-blur-sm"
          />

          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 z-[100] w-full max-w-sm bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <span className="font-heading text-xl font-bold text-white">Меню</span>
              <button 
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <motion.div 
              variants={listVariants}
              className="flex-1 overflow-y-auto p-6 flex flex-col gap-6"
            >
              {NAV_LINKS.map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  
                   {item.type === "dropdown" ? (
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">{item.label}</div>
                      <div className="grid gap-2">
                        {item.items?.map((subItem) => (
                          <Link 
                              key={subItem.label} 
                              href={subItem.href} 
                              onClick={(e) => handleScroll(e, subItem.href)} 
                              className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all"
                          >
                             <div className="p-2 rounded-lg bg-slate-950 text-slate-400 group-hover:text-primary transition-colors">
                                {subItem.icon && <subItem.icon size={18} />}
                             </div>
                             <div><div className="text-sm font-medium text-slate-200 group-hover:text-white">{subItem.label}</div></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                        href={item.href} 
                        onClick={(e) => handleScroll(e, item.href)}
                        className="flex items-center justify-between text-2xl font-heading font-bold text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                    >
                      {item.label}<ChevronRight className="text-slate-600" />
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* CONTACTS BLOCK */}
              <motion.div variants={itemVariants} className="mt-4 pt-6 border-t border-white/5">
                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Контакты</div>
                 
                 {/* Phone */}
                 <a href={`tel:${CONTACT_DATA.phone.value}`} className="flex items-center gap-3 text-white mb-6 hover:text-primary transition-colors">
                    <div className="p-2 rounded-full bg-white/5 text-primary"><CONTACT_DATA.phone.icon size={20} /></div>
                    <span className="text-xl font-bold font-heading">{CONTACT_DATA.phone.display}</span>
                 </a>

                 {/* Socials Grid */}
                 <div className="grid grid-cols-3 gap-3">
                    {CONTACT_DATA.socials.map((social) => (
                       <a 
                         key={social.id}
                         href={social.href}
                         target="_blank"
                         rel="noopener noreferrer"
                         className={cn(
                           "flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 transition-all group",
                           social.color
                         )}
                       >
                         <social.icon size={20} className="text-slate-400 group-hover:text-inherit transition-colors" />
                         <span className="text-[10px] text-slate-400 group-hover:text-inherit">{social.label}</span>
                       </a>
                    ))}
                 </div>
              </motion.div>
            </motion.div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-white/5 bg-slate-950/50">
               <button
                 onClick={handleOpenModal}
                 className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-transform active:scale-95"
               >
                 Начать проект <ArrowRight size={18} />
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}