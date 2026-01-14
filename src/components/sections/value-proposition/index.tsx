"use client";

import React from "react";
// 👇 Импортируем новый объект valueIntro вместе с массивом
import { valueStoryData, valueIntro } from "@/data/value-proposition.data";
import { StoryBlock } from "./story-block";

export function ValueProposition() {
  return (
    <section className="relative w-full bg-slate-950" id="value-proposition">
      
      {/* Intro Header */}
      <div className="pt-24 pb-12 px-6 text-center relative z-40 mb-24 md:mb-40">
        {/* Фоновое свечение (Vignette) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
        
        {/* Заголовок H2 */}
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {valueIntro.title.start}{" "}
          {/* Акцентный цвет (Оружие = Blue Tech) */}
          <span className="text-blue-500 relative inline-block">
            {valueIntro.title.highlight}
            {/* Небольшой декоративный блик под текстом */}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30 blur-sm rounded-full" />
          </span>
          <br className="hidden md:block" /> {/* Перенос строки на десктопе для красоты */}
          {valueIntro.title.end}
        </h2>
        
        {/* Подзаголовок P */}
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {valueIntro.description}
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full flex flex-col"> 
        {valueStoryData.map((block, index) => (
          <StoryBlock 
            key={block.id} 
            data={block} 
            index={index}
            total={valueStoryData.length} 
          />
        ))}
      </div>
      
    </section>
  );
}