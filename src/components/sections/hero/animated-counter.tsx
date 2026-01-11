"use client";
import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: duration,
      onUpdate(val) {
        const formatted = Number.isInteger(val) ? val.toFixed(0) : val.toFixed(1);
        node.textContent = formatted + suffix;
      },
      ease: "easeOut"
    });

    return () => controls.stop();
  }, [value, suffix, duration]);

  return <span ref={nodeRef} />;
}