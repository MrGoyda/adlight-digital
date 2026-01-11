"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ValueStoryBlock } from "@/data/value-proposition.data";
import { VisualAdapter } from "./visuals-wrapper";
import { cn } from "@/lib/utils";

interface StoryBlockProps {
  data: ValueStoryBlock;
  index: number;
  total: number;
}

export const StoryBlock = ({ data, index, total }: StoryBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1; 

  // 1. БЕРЕМ ГЛОБАЛЬНЫЙ СКРОЛЛ ВСЕЙ СТРАНИЦЫ
  const { scrollY } = useScroll();
  
  // Храним координаты: где анимация должна начаться и где закончиться
  const [scrollRange, setScrollRange] = useState<{ start: number; end: number }>({ start: 0, end: 0 });

  // 2. РАСЧЕТ КООРДИНАТ (Железобетонный метод)
  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const calculatePosition = () => {
      let offsetTop = 0;
      let node: HTMLElement | null = element;

      // Складываем все отступы родителей, чтобы найти точную позицию от верха страницы (0px)
      // offsetTop возвращает "статичную" позицию, игнорируя sticky-эффект. Это то, что нам нужно.
      while (node) {
        offsetTop += node.offsetTop;
        node = node.offsetParent as HTMLElement;
      }

      const windowHeight = window.innerHeight;

      // start: Когда верх блока доезжает до верха экрана.
      // end: Когда мы проскроллили еще ровно одну высоту экрана (блок полностью перекрыт следующим).
      setScrollRange({
        start: offsetTop,
        end: offsetTop + windowHeight
      });
    };

    // Считаем сразу
    calculatePosition();

    // Пересчитываем, если что-то изменилось на странице
    const resizeObserver = new ResizeObserver(() => calculatePosition());
    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, []);

  // 3. ПРИВЯЗЫВАЕМ АНИМАЦИЮ К ГЛОБАЛЬНЫМ ЦИФРАМ
  // Теперь Framer Motion не смотрит на элемент, он смотрит тупо на пиксели скролла.
  // Если мы между start и end -> меняем значения.
  
  // Scale: 1 -> 0.90
  const scale = useTransform(scrollY, [scrollRange.start, scrollRange.end], [1, isLast ? 1 : 0.90]);
  
  // Overlay: 0 -> 0.8 (Черная шторка)
  const overlayOpacity = useTransform(scrollY, [scrollRange.start, scrollRange.end], [0, isLast ? 0 : 0.8]);

  const getHighlightColor = (id: string) => {
    switch (id) {
      case 'speed': return "text-emerald-400";
      case 'roi': return "text-blue-400";
      case 'ux': return "text-pink-400";
      case 'tech': return "text-violet-400";
      default: return "text-primary";
    }
  };

  return (
    <>
      {/* ФАНТОМНЫЙ ЯКОРЬ (Для навигации по ссылкам) */}
      <span 
        id={data.id} 
        className="block h-0 w-full -mt-[10vh] pointer-events-none invisible"
      />

      {/* ЛИПКАЯ КАРТОЧКА */}
      <div 
        ref={containerRef}
        className="sticky top-0 h-[100dvh] w-full flex flex-col justify-center"
        style={{ zIndex: index + 10 }} 
      >
        <motion.div 
          style={{ scale }} 
          className="relative w-full h-full bg-slate-950 flex flex-col lg:flex-row overflow-hidden border-t border-white/10 shadow-2xl origin-top will-change-transform"
        >
          
          {/* ⚫️ ЧЕРНАЯ ШТОРКА (Z-50) */}
          <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black z-50 pointer-events-none"
          />

          {/* Фоновый шум */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />

          {/* КОНТЕНТ (Z-10) */}
          <div className="relative w-full h-full flex flex-col lg:flex-row z-10">
              
              {/* VISUAL */}
              <div className="relative h-[40%] lg:h-full lg:flex-1 lg:order-2 w-full flex items-center justify-center bg-slate-900/50 lg:bg-transparent overflow-hidden border-b border-white/5 lg:border-b-0">
                 <div className="w-full h-full p-4 lg:p-12 flex items-center justify-center">
                   <div className="w-full h-full flex items-center justify-center scale-[0.85] lg:scale-100 origin-center">
                      <VisualAdapter id={data.id} />
                   </div>
                 </div>
              </div>

              {/* TEXT */}
              <div className="relative h-[60%] lg:h-full lg:flex-1 lg:order-1 flex flex-col bg-slate-950 lg:bg-transparent border-t border-white/5 lg:border-t-0">
                <div className="w-full h-full flex flex-col justify-center px-6 md:px-12 lg:pl-24 lg:pr-12 py-6 overflow-y-auto scrollbar-hide">
                  <div className="w-full max-w-xl mx-auto lg:mx-0">
                      
                      <div className="flex items-center gap-3 mb-3 lg:mb-8">
                        <span className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full border border-white/10 bg-white/5 text-xs lg:text-sm font-bold font-mono text-slate-300 shadow-lg backdrop-blur-md shrink-0">
                          0{index + 1}
                        </span>
                        <span className="text-[10px] lg:text-xs font-mono uppercase tracking-widest text-slate-500 bg-white/5 px-2 py-1 rounded">
                          {data.stepLabel.split("/")[1]}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 lg:mb-6 leading-[1.1]">
                        {data.title} <br />
                        <span className={cn(getHighlightColor(data.id), "brightness-125")}>
                          {data.highlight}
                        </span>
                      </h3>
                      
                      <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed mb-6 lg:mb-10 lg:border-l-2 lg:border-white/10 lg:pl-6">
                        {data.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-3 lg:pt-4 border-t border-white/10 mt-auto lg:mt-0">
                        {data.stats.map((stat, i) => (
                          <div key={i} className="flex flex-col justify-start">
                            <div className={cn("text-xl lg:text-4xl font-bold mb-1 tracking-tight", getHighlightColor(data.id))}>
                              {stat.value}
                            </div>
                            <div className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-widest">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};