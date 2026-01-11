"use client";
import React, { useState, MouseEvent } from "react";
import { Zap } from "lucide-react";
import { SERVICES_DATA } from "@/data/services.data";
import { ServiceCardDesktop } from "./service-card-desktop";
import { ServiceCardMobile } from "./service-card-mobile";

export function Services() {
  const [activeId, setActiveId] = useState<string | null>("landing");
  const [globalPhone, setGlobalPhone] = useState("");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target, clientX, clientY } = e;
    const { left, top } = target.getBoundingClientRect();
    target.style.setProperty("--mouse-x", `${clientX - left}px`);
    target.style.setProperty("--mouse-y", `${clientY - top}px`);
  };

  return (
    <section className="relative w-full bg-background pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-visible" id="services">
      {/* Horizons */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />
      
      <div className="container-width px-4 relative z-10">
        
        {/* HEADER */}
        <div className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>Digital Arsenal v2.1</span>
          </div>
           <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
             Инвестируйте в технологии, <br className="hidden sm:block" />
             которые <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 animate-gradient">генерируют прибыль</span>
           </h2>
           <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
             Хватит терять клиентов на медленных сайтах и конструкторах. Мы создаем цифровые активы с высокой конверсией.
           </p>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex w-full h-[650px] gap-4">
          {SERVICES_DATA.map((service) => (
            <ServiceCardDesktop
                key={service.id}
                data={service}
                isActive={activeId === service.id}
                onActivate={() => setActiveId(service.id)}
                onMouseMove={handleMouseMove}
                globalPhone={globalPhone}
                setGlobalPhone={setGlobalPhone}
            />
          ))}
        </div>

        {/* MOBILE */}
        <div className="lg:hidden relative">
          {SERVICES_DATA.map((service) => (
            <ServiceCardMobile 
                key={service.id} 
                data={service}
                globalPhone={globalPhone}
                setGlobalPhone={setGlobalPhone}
            />
          ))}
        </div>

      </div>
    </section>
  );
}