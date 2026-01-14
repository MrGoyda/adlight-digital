"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanLine, Loader2, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPhone, triggerHaptic } from "@/lib/formatters";
import { useUIStore } from "@/store/ui-store"; // Импортируем стор

interface ActionModuleProps {
  colorClass: string;
  mobileFullWidth?: boolean;
  globalPhone?: string;
  setGlobalPhone?: (v: string) => void;
  subject?: string; // <-- ДОБАВЛЕНО: Теперь компонент знает про тему услуги
}

export function ActionModule({ 
  colorClass, 
  mobileFullWidth = false, 
  globalPhone: externalPhone, 
  setGlobalPhone: externalSetPhone,
  subject // <-- Деструктурируем
}: ActionModuleProps) {
  
  // Локальное состояние, если не передано внешнее
  const [localPhone, setLocalPhone] = useState("");
  const phone = externalPhone !== undefined ? externalPhone : localPhone;
  const setPhone = externalSetPhone || setLocalPhone;

  const [status, setStatus] = useState<"idle" | "input" | "sending" | "success" | "error">("idle");
  
  // Подключаем стор (на случай, если захотим открывать модалку после успеха)
  const { openContactModal } = useUIStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < phone.length) { setPhone(e.target.value); return; }
    const f = formatPhone(e.target.value);
    if (f.length <= 18) { setPhone(f); if (status === "error") setStatus("input"); }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHaptic();
    
    if (phone.length < 18) {
      setStatus("error");
      setTimeout(() => setStatus("input"), 500);
      return;
    }

    setStatus("sending");
    
    // Имитация отправки данных
    console.log("🚀 Fast Lead Sent:", { phone, subject }); 
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setStatus("success");
    
    // ОПЦИОНАЛЬНО: Если нужно открыть модалку для уточнения деталей после ввода номера
    // setTimeout(() => {
    //    openContactModal(subject);
    // }, 1000);

    setTimeout(() => { setStatus("idle"); setPhone(""); }, 4000);
  };

  return (
    <motion.div 
      layout
      animate={status === "error" ? "error" : "idle"}
      className={cn(
        "relative overflow-hidden rounded-xl border backdrop-blur-sm transition-colors duration-300 h-[50px]", 
        status === "idle" 
          ? (mobileFullWidth ? "w-full border-white/10 bg-slate-950/50" : "w-[200px] border-white/10 bg-slate-950/50")
          : (mobileFullWidth ? "w-full border-white/20 bg-slate-900" : "w-[260px] border-white/20 bg-slate-900"),
        status === "error" && "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]",
        status === "success" && "border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
      )}
    >
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.button
              key="idle"
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); triggerHaptic(); setStatus("input"); }}
              className="w-full h-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/5 transition-colors group/btn"
            >
              <ScanLine className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
              <span>Обсудить Проект</span>
            </motion.button>
          )}
          {(status === "input" || status === "error") && (
            <motion.div
              key="input"
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full h-full flex items-center p-1"
            >
              <input 
                autoFocus type="tel" placeholder="+7 (7__) ___-__-__"
                value={phone} onChange={handleInputChange} onClick={(e) => e.stopPropagation()}
                className={cn("flex-1 bg-transparent border-none text-white text-sm px-3 focus:ring-0 outline-none h-full font-mono placeholder:text-slate-600", status === "error" ? "text-red-200" : "text-white")}
              />
              <button onClick={handleSubmit} className={cn("h-[38px] w-[38px] rounded-lg flex items-center justify-center transition-all shrink-0", status === "error" ? "bg-red-500/20 text-red-400" : cn(colorClass, "text-white hover:brightness-110"))}>
                {status === "error" ? <XCircle className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </button>
            </motion.div>
          )}
          {status === "sending" && (
            <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="w-full h-full flex items-center justify-center gap-3 bg-slate-900">
              <Loader2 className={cn("w-5 h-5 animate-spin", colorClass.replace("bg-", "text-"))} />
              <span className="text-xs font-mono text-slate-300">Отправка...</span>
            </motion.div>
          )}
          {status === "success" && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full flex items-center justify-center gap-2 bg-emerald-500/10">
              <div className="rounded-full bg-emerald-500 p-1"><CheckCircle2 className="w-4 h-4 text-white" /></div>
              <span className="text-sm font-bold text-white">Принято!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}