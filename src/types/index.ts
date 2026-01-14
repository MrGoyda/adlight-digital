import { type LucideIcon } from "lucide-react";
import React from "react";

// --- ТИПЫ ДЛЯ УСЛУГ (SERVICES) ---
export type TechSpec = { 
  name: string; 
  iconSrc: string; 
  tooltip: string; 
};

export type ServiceData = {
  id: string; 
  title: string; 
  tagline: string; 
  desc: string; 
  price: string;
  mainIcon: LucideIcon | React.ElementType; 
  statsBadge: { 
    label: string; 
    value: string; 
    icon: LucideIcon | React.ElementType 
  };
  idealFor: { 
    label: string; 
    icon: LucideIcon | React.ElementType 
  }[];
  techSpecs: TechSpec[];
  
  // Visuals
  color: string;       // "bg-blue-500"
  hoverColor: string;  // "hover:bg-blue-500" (Новое поле для Tailwind)
  hex: string;         // "#3b82f6" (Новое поле для JS-анимаций)
  gradient: string; 
  border: string; 
  shadow: string;
};

// --- ТИПЫ ДЛЯ ПРЕИМУЩЕСТВ (VALUE PROPOSITION) ---
export type FeatureId = 'speed' | 'roi' | 'ux' | 'tech';

export interface FeatureContent {
  id: FeatureId;
  title: string;
  description: string;
  points: string[];
  ctaText: string;
  fact: { text: string; source: string };
  icon: LucideIcon;
  color: string;
}

// --- ТИПЫ ДЛЯ КОНТАКТОВ ---
export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
}

// --- Ecosystem / Proof of Concept Section ---

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  icon: React.ElementType; // Lucide Icon Component
  accentColor: string; // Tailwind class (e.g., "text-emerald-500")
  position?: string; // Optional: для кастомного позиционирования в HUD (например, "top-left")
}

export interface EcosystemData {
  heading: string;
  subheading: string;
  description: string[];
  cta: {
    text: string;
    url: string;
  };
  metrics: MetricItem[];
}