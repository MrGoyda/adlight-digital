"use client";

import React from "react";
import { valueStoryData } from "@/data/value-proposition.data";
import { StoryBlock } from "./story-block";

export function ValueProposition() {
  return (
    <section className="relative w-full bg-slate-950" id="value-proposition">
      
      {/* Intro Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Почему выбирают <span className="text-blue-500">ADLight</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Листайте вниз, чтобы увидеть разницу.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full"> 
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