"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { googleAdsData } from "@/data/google-ads.data";
import { FeatureCard } from "./feature-card";
import { PromoBanner } from "./promo-banner";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function GoogleAdsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for background elements
  const yBg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-24 lg:py-32 overflow-hidden" 
      id="google-ads"
    >
      {/* Phantom Anchor */}
      <span className="-mt-[10vh] absolute top-0" id="google-ads-anchor" />

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: yBg }}
          className="absolute top-1/4 left-0 w-[50vw] h-[50vh] bg-blue-600/5 blur-[120px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">
              Эксперты в <span className="text-blue-500">Google ADS</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {googleAdsData.header.subtitle}
            </p>
          </motion.div>

          {/* Metrics Grid (Expert status) */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 border-y border-white/5 py-8"
          >
            {googleAdsData.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white font-heading mb-1">
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12"
          >
            {googleAdsData.features.map((item, index) => (
              <FeatureCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>

          {/* Pricing CTA */}
          <motion.div variants={itemVariants}>
            <PromoBanner />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}