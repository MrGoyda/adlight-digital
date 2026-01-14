"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { useUIStore } from "@/store/ui-store"; 
import { CONTACT_FORM } from "@/data/contact.data";
import { cn } from "@/lib/utils";
import { CustomSelect } from "@/components/ui/custom-select";
import { ContactFormData } from "@/types";

const GENERIC_SUBJECTS = [
  "Бесплатный расчет + Стратегия",
  "Обсудить проект",
  "Заявка с сайта",
  null,
  ""
];

export function ContactModal() {
  const { isContactModalOpen, closeContactModal, bookingSubject: rawSubject } = useUIStore();
  const bookingSubject = typeof rawSubject === 'string' ? rawSubject : null;
  const showServiceSelect = GENERIC_SUBJECTS.includes(bookingSubject);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ phone?: string }>({});

  const formContent = CONTACT_FORM;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    service: formContent.fields.service.options[0].value
  });

  useEffect(() => {
    if (bookingSubject) {
      const matchOption = formContent.fields.service.options.find(
        opt => opt.value === bookingSubject || opt.label === bookingSubject
      );
      if (matchOption) {
        setFormData(prev => ({ ...prev, service: matchOption.value }));
      }
    }
  }, [bookingSubject, formContent.fields.service.options]);

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "";
    const limitedDigits = digits.substring(0, 11);
    const firstDigit = limitedDigits[0] === "8" ? "7" : limitedDigits[0];
    const restDigits = limitedDigits.substring(1);
    let formattedValue = `+${firstDigit}`;
    if (restDigits.length > 0) formattedValue += ` (${restDigits.substring(0, 3)}`;
    if (restDigits.length >= 4) formattedValue += `) ${restDigits.substring(3, 6)}`;
    if (restDigits.length >= 7) formattedValue += `-${restDigits.substring(6, 8)}`;
    if (restDigits.length >= 9) formattedValue += `-${restDigits.substring(8, 10)}`;
    return formattedValue;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
    if (errors.phone) setErrors({});
  };

  useEffect(() => {
    if (isContactModalOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      const header = document.getElementById("main-header");
      if (header) header.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        const header = document.getElementById("main-header");
        if (header) header.style.paddingRight = "";
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isContactModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length < 18) {
      setErrors({ phone: "Введите корректный номер" });
      return;
    }
    setIsSubmitting(true);
    console.log("Lead Info:", {
        ...formData,
        subject: bookingSubject,
        isSpecificRequest: !showServiceSelect
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      closeContactModal();
      setTimeout(() => setIsSuccess(false), 300);
      setFormData({ name: "", phone: "", service: formContent.fields.service.options[0].value });
      setErrors({});
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className={cn(
              "relative w-full max-w-4xl shadow-2xl flex flex-col md:flex-row bg-slate-900",
              "rounded-3xl overflow-hidden", 
              "md:overflow-visible" 
            )}
          >
            <button 
              onClick={closeContactModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-[60]"
            >
              <X size={20} />
            </button>

            {/* --- LEFT COLUMN (DESKTOP) --- */}
            <div className="hidden md:flex w-2/5 bg-slate-950/50 p-8 flex-col justify-between relative border-r border-white/5 md:rounded-l-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
                
                {/* FIX: Добавил mb-10 этому блоку, чтобы список снизу не прилипал к тексту */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-8">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">A</div>
                      <span className="font-heading font-bold text-white">ADLight Digital</span>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-6">
                    {bookingSubject ? (
                      <span className="text-white drop-shadow-md">
                        {bookingSubject}
                      </span>
                    ) : (
                      <>
                        {formContent.subtitle.desktop_pre} <br />
                        <span className="text-primary">{formContent.subtitle.desktop_highlight}</span>
                      </>
                    )}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">{formContent.subtitle.desc}</p>
                </div>

                <div className="space-y-4">
                  {formContent.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className={cn("w-8 h-8 rounded-full bg-white/5 flex items-center justify-center", feature.color)}>
                          <CheckCircle2 size={16} />
                        </div>
                        <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
            </div>

            {/* --- RIGHT COLUMN (FORM) --- */}
            <div className="w-full md:w-3/5 bg-slate-900 relative md:rounded-r-3xl max-h-[85vh] overflow-y-auto md:max-h-none md:overflow-visible">
               <div className={cn(
                  "p-6 md:p-8 min-h-full flex flex-col",
                  showServiceSelect ? "pt-12 md:pt-12" : "pt-8 md:pt-8" 
               )}>
                 <AnimatePresence mode="wait">
                   {isSuccess ? (
                     <motion.div 
                       key="success"
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0 }}
                       className="flex flex-col items-center justify-center text-center py-12 px-4 h-full min-h-[300px] flex-grow"
                     >
                        <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} 
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/20"
                        >
                            <CheckCircle2 size={40} />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-2">{formContent.success.title}</h3>
                        <p className="text-slate-400 max-w-xs">{formContent.success.message}</p>
                     </motion.div>
                   ) : (
                     <motion.form 
                       key="form"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       onSubmit={handleSubmit} 
                       className="flex flex-col justify-center flex-grow"
                     >
                       <h3 className="md:hidden text-2xl font-heading font-bold text-white mb-8">
                           {bookingSubject || formContent.subtitle.mobile}
                       </h3>
                       
                       <div className="md:hidden mb-8 p-4 rounded-xl bg-slate-950/50 border border-white/5">
                           {/* FIX: Увеличил отступ mb-3 -> mb-6, чтобы текст не лип к галочкам */}
                           <p className="text-xs text-slate-400 mb-6 leading-relaxed">{formContent.subtitle.desc}</p>
                           <div className="space-y-2">
                             {formContent.features.map((feature, i) => (
                                 <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                                     <CheckCircle2 size={12} className={cn(feature.color.replace("text-", "text-"))} />
                                     <span>{feature.text}</span>
                                 </div>
                             ))}
                           </div>
                       </div>
                       
                       <div className={cn(
                          "relative z-10 transition-all",
                          showServiceSelect ? "space-y-4 mb-6" : "space-y-6 mb-10"
                       )}>
                           {/* Name Input */}
                           <div className="group">
                              <div className="flex justify-between items-center mb-1.5 ml-1">
                                <label className="block text-[10px] font-bold text-slate-500 uppercase">
                                  {formContent.fields.name.label}
                                </label>
                                <span className="text-[10px] text-slate-600 lowercase italic mr-1">не обязательно</span>
                              </div>
                              <input 
                                type="text" 
                                placeholder={formContent.fields.name.placeholder}
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                              />
                           </div>

                           {/* Phone Input */}
                           <div className="group relative">
                              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5 ml-1">
                                {formContent.fields.phone.label}
                              </label>
                              <div className="relative">
                                <input 
                                  type="tel" 
                                  value={formData.phone}
                                  onChange={handlePhoneChange}
                                  placeholder="+7 (___) ___-__-__"
                                  className={cn(
                                    "w-full bg-slate-950/50 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all",
                                    errors.phone 
                                      ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" 
                                      : "border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                                  )}
                                />
                                {errors.phone && (
                                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 animate-pulse">
                                    <AlertCircle size={18} />
                                  </div>
                                )}
                              </div>
                              <AnimatePresence>
                                {errors.phone && (
                                  <motion.p 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="text-[10px] text-red-400 mt-1 ml-1 font-medium overflow-hidden"
                                  >
                                    {errors.phone}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                           </div>

                           {/* Select */}
                           {showServiceSelect && (
                             <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                             >
                               <CustomSelect 
                                 label={formContent.fields.service.label}
                                 options={formContent.fields.service.options}
                                 value={formData.service}
                                 onChange={(val) => setFormData({...formData, service: val})}
                               />
                             </motion.div>
                           )}
                       </div>

                       <button 
                         type="submit"
                         disabled={isSubmitting}
                         className="w-full py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 relative z-0"
                       >
                           {isSubmitting ? (
                            <>
                              <Loader2 className="animate-spin" size={20} />
                              {formContent.submit.loading}
                            </>
                           ) : (
                            <>
                              {formContent.submit.default} <ArrowRight size={20} />
                            </>
                           )}
                       </button>
                       
                       <p className="text-[10px] text-slate-500 text-center mt-4 leading-tight">
                         {formContent.submit.agreement}
                       </p>
                     </motion.form>
                   )}
                 </AnimatePresence>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}