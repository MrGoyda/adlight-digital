import { Zap, TrendingUp, MousePointerClick, Code2 } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Технологии",
    href: "#technologies",
    type: "dropdown",
    items: [
      { label: "Скорость загрузки", href: "#speed", icon: Zap, desc: "0.5s First Paint" },
      { label: "ROI Эффективность", href: "#roi", icon: TrendingUp, desc: "Окупаемость" },
      { label: "UX/UI Архитектура", href: "#ux", icon: MousePointerClick, desc: "Конверсия" },
      { label: "Tech Stack", href: "#tech", icon: Code2, desc: "Next.js 15" },
    ]
  },
  {
    label: "Услуги",
    href: "#services",
    type: "link"
  },
  {
    label: "Экспертиза",
    href: "#expertise",
    type: "link" // Блок про ADLight Business
  },
  {
    label: "Процесс",
    href: "#process",
    type: "link"
  }
];