"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { FeatureId } from "@/types";
import { FEATURES_DATA } from "@/data/features.data";
import { ConsultationForm } from "@/components/modules/consultation-form";

interface Props {
    featureId: FeatureId;
    onClose: () => void;
}

export function FeatureDetailsModal({ featureId, onClose }: Props) {
    const content = FEATURES_DATA[featureId];
    const Icon = content.icon;

    useEffect(() => {
        // 1. Вычисляем ширину скроллбара
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        const header = document.getElementById("main-header");
        
        // Сохраняем исходные стили
        const originalBodyPadding = document.body.style.paddingRight;
        const originalHeaderPadding = header ? header.style.paddingRight : "";
        const originalHeaderTransition = header ? header.style.transition : ""; 

        // 2. Блокируем скролл body
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        
        // 3. Фиксим Хедер (МГНОВЕННО)
        if (header) {
            header.style.transition = "none"; 
            header.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => { 
            // 4. Возвращаем всё как было
            document.body.style.overflow = "auto"; 
            document.body.style.paddingRight = originalBodyPadding;
            
            if (header) {
                header.style.transition = "none";
                header.style.paddingRight = originalHeaderPadding;
                setTimeout(() => {
                    header.style.transition = originalHeaderTransition;
                }, 0);
            }
        };
    }, []);

    const listVariants = {
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        hidden: {}
    };
    const itemVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
        hidden: { opacity: 0, x: -20 }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="relative z-10 w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-500/10 overflow-hidden"
            >
                <div className="absolute -top-12 -right-12 opacity-[0.03] pointer-events-none select-none">
                    <Icon size={240} className="text-white" />
                </div>
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>
                <div className="relative z-10">
                    <div className={cn("inline-flex mb-4 p-3 rounded-2xl bg-white/5 border border-white/5", content.color)}>
                        <Icon size={24} />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 pr-8 leading-tight">
                        {content.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                        {content.description}
                    </p>
                    <div className="mb-8 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border-l-2 border-blue-400">
                        <div className="flex gap-3">
                            <Lightbulb className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm text-slate-200 italic">"{content.fact.text}"</p>
                                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-bold">
                                    — {content.fact.source}
                                </p>
                            </div>
                        </div>
                    </div>
                    <motion.ul 
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-3"
                    >
                        {content.points.map((point, i) => (
                            <motion.li 
                                key={i} 
                                variants={itemVariants}
                                className="flex items-start gap-3 text-slate-300 text-sm"
                            >
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span>{point}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <ConsultationForm btnText={content.ctaText} />
                </div>
            </motion.div>
        </div>
    );
}