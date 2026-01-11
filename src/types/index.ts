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
  mainIcon: LucideIcon | React.ElementType; // Поддержка и Lucide, и SVG компонентов
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
  color: string; 
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