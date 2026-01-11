import { LucideIcon, Zap, TrendingUp, MousePointerClick, Code2 } from "lucide-react";

export interface ValueStoryBlock {
  id: "speed" | "roi" | "ux" | "tech";
  stepLabel: string;
  title: string;
  description: string;
  highlight: string;
  icon: LucideIcon;
  stats: { value: string; label: string }[];
  gradient: string;
}

export const valueStoryData: ValueStoryBlock[] = [
  {
    id: "speed",
    stepLabel: "01 / Speed",
    title: "Скорость — это ваша репутация",
    highlight: "Мгновенная загрузка",
    description: "В эпоху TikTok никто не ждет. Мы используем Next.js SSR, чтобы страница прилетала клиенту уже готовой. Без белых экранов и долгих загрузок.",
    icon: Zap,
    stats: [
      { value: "< 0.5s", label: "LCP (Отрисовка)" },
      { value: "99/100", label: "Google PSI" },
    ],
    gradient: "from-emerald-400 to-cyan-300",
  },
  {
    id: "roi",
    stepLabel: "02 / Efficiency",
    title: "Математика вашей прибыли",
    highlight: "Инвестиция, а не расход",
    description: "Рекламный аукцион Google поощряет качественные сайты дешевыми кликами. Высокий Quality Score снижает стоимость рекламы до 50%.",
    icon: TrendingUp,
    stats: [
      { value: "-40%", label: "Стоимость лида" },
      { value: "x3", label: "Рост конверсии" },
    ],
    gradient: "from-blue-400 to-indigo-300",
  },
  {
    id: "ux",
    stepLabel: "03 / Experience",
    title: "Дизайн, который продает",
    highlight: "Туннели продаж",
    description: "Мы строим инженерные системы (CJM), которые ведут пользователя за руку к кнопке «Оплатить». Mobile-First подход убирает любое трение при покупке.",
    icon: MousePointerClick,
    stats: [
      { value: "70%", label: "Продаж с Mobile" },
      { value: "0.05s", label: "Первое впечатление" },
    ],
    gradient: "from-pink-400 to-rose-300",
  },
  {
    id: "tech",
    stepLabel: "04 / Architecture",
    title: "Фундамент на 5 лет вперед",
    highlight: "Modern Stack",
    description: "Технологии меняются ежедневно. Мы используем стек (Next.js 15, TS), на котором работают Netflix и Twitch. Это гарантия масштабируемости.",
    icon: Code2,
    stats: [
      { value: "100%", label: "Type Safety" },
      { value: "24/7", label: "Uptime" },
    ],
    gradient: "from-violet-400 to-purple-300",
  },
];