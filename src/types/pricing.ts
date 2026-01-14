export type PricingTierId = 'kickstarter' | 'accelerator' | 'dominator';
export type PricingTheme = 'blue' | 'emerald' | 'slate';

export interface PricingFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

export interface PricingPlan {
  id: PricingTierId;
  title: string;
  price: {
    amount: string;
    suffix?: string;
  };
  description: string;
  features: PricingFeature[];
  cta: {
    text: string;
    href: string;
  };
  visual: {
    highlight: boolean;
    colorTheme: PricingTheme;
    badge?: string;
  };
  logic: {
    isRestricted: boolean; // Включает UI собеседования
  };
}