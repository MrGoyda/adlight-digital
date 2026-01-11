"use client";
import React from "react";
import { motion, useMotionTemplate, MotionValue } from "framer-motion";

interface Props {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function HeroBackground({ mouseX, mouseY }: Props) {
  // Конфигурация сеток
  const gridStyle = {
    backgroundSize: "40px 40px",
    backgroundImage: "linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px)",
  };

  const spotlightStyle = {
    backgroundSize: "40px 40px",
    backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)",
  };

  // Маска прожектора
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div className="absolute inset-0 z-0">
      {/* 1. Базовая сетка */}
      <div 
        className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        style={gridStyle} 
      />
      
      {/* 2. Spotlight Сетка */}
      <motion.div 
        className="absolute inset-0 w-full h-full opacity-0 lg:opacity-100 transition-opacity"
        style={{
          ...spotlightStyle,
          maskImage: maskImage,
          WebkitMaskImage: maskImage
        }}
      />

      {/* 3. Ambient Light (Пятна) */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] mix-blend-screen opacity-30 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[900px] h-[900px] bg-accent/10 rounded-full blur-[180px] mix-blend-screen opacity-20 animate-pulse-slow delay-1000 pointer-events-none" />
    </div>
  );
}