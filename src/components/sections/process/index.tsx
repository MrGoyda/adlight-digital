"use client";
import React, { useState } from "react";
import { ProcessFeed } from "./process-feed";
import { ProcessMonitor } from "./process-monitor";
import { PROCESS_DATA } from "@/data/process.data";

export const ProcessSection = () => {
  const [activeStepId, setActiveStepId] = useState(PROCESS_DATA[0].id);

  return (
    <section className="relative w-full bg-slate-950 py-20 lg:py-32" id="process-section">
      {/* Phantom Anchor */}
      <span id="process" className="block h-0 -mt-[10vh] invisible absolute top-0" />

      {/* Horizons */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-6">
            <span>АЛГОРИТМ РАБОТЫ</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
            От Хаоса к <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Системе</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Наш процесс — это отлаженный алгоритм. Никаких хаотичных действий, только последовательные этапы, ведущие к прогнозируемому результату.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start relative">
          
          {/* LEFT COLUMN (Scrollable Feed) */}
          <div className="order-2 lg:order-1">
             <ProcessFeed activeStepId={activeStepId} setActiveStepId={setActiveStepId} />
          </div>

          {/* RIGHT COLUMN (Sticky Monitor) */}
          {/* Высота контейнера совпадает с контентом слева, позволяя sticky работать внутри него */}
          <div className="hidden lg:block lg:order-2 h-full relative">
             <div className="sticky top-32">
                <ProcessMonitor activeStepId={activeStepId} />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};