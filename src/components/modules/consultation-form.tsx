"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";

export function ConsultationForm({ btnText }: { btnText: string }) {
    const [status, setStatus] = useState<'idle' | 'input' | 'success'>('idle');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Отправка:", phone);
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex flex-col items-center text-center mt-6"
            >
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mb-2 shadow-lg shadow-emerald-500/20">
                    <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold">Спасибо!</h4>
                <p className="text-xs text-slate-400 mt-1">Мы свяжемся с вами в течение 15 минут.</p>
            </motion.div>
        )
    }

    if (status === 'input') {
        return (
            <motion.form 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onSubmit={handleSubmit}
                className="w-full relative mt-6"
            >
                <div className="relative flex items-center">
                    <div className="absolute left-4 text-slate-400">
                        <Phone className="w-4 h-4" />
                    </div>
                    <input 
                        type="tel" 
                        placeholder="+7 (999) 000-00-00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoFocus
                        className="w-full bg-slate-950 border border-blue-500/50 rounded-xl py-4 pl-10 pr-12 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                    <button 
                        type="submit"
                        className="absolute right-2 p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-lg shadow-blue-500/20 group"
                    >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 text-center">
                    Нажимая стрелку, вы соглашаетесь на обработку данных
                </p>
            </motion.form>
        )
    }

    return (
        <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                delay: 0.4,
                type: "spring", 
                stiffness: 50,
                damping: 20,
                mass: 1.2
            }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setStatus('input')}
            className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow-lg shadow-blue-500/20 border border-white/10 flex items-center justify-center gap-2 group"
        >
            <span>{btnText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
    );
}