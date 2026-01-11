import { 
  Rocket, Globe, ShoppingCart, Target, 
  TrendingUp, Users, Building2, Store, Megaphone, Zap, Search, CheckCircle2 
} from "lucide-react";
import { ServiceData } from "@/types";

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "landing",
    title: "Продающий Лендинг",
    tagline: "Лид-Перехватчик",
    desc: "Инструмент захвата. Мы убираем всё лишнее, оставляя только оффер и кнопку. Скорость 0.4s заставляет клиента остаться.",
    price: "от 150 000 ₸",
    mainIcon: Rocket,
    statsBadge: { label: "Конверсия", value: "8-15%", icon: TrendingUp },
    idealFor: [{label: "Стартапы", icon: Rocket}, {label: "Услуги", icon: Users}],
    techSpecs: [
      { name: "Next.js", iconSrc: "/tech/next.webp", tooltip: "Мгновенная загрузка" },
      { name: "React", iconSrc: "/tech/react.webp", tooltip: "Реактивный интерфейс" },
      { name: "Framer", iconSrc: "/tech/framer.webp", tooltip: "Плавная физика" },
    ],
    color: "bg-blue-500",
    gradient: "from-blue-600/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    shadow: "shadow-blue-500/20"
  },
  {
    id: "corporate",
    title: "Корпоративный Сайт",
    tagline: "Цифровой Актив",
    desc: "Фундамент вашего бренда. Сложная структура, SEO-ядро и админ-панель. Выводит компанию в лидеры ниши.",
    price: "от 350 000 ₸",
    mainIcon: Globe,
    statsBadge: { label: "Google SEO", value: "TOP-3", icon: Search },
    idealFor: [{label: "Компании", icon: Building2}, {label: "Бренды", icon: Zap}],
    techSpecs: [
      { name: "Next.js SSR", iconSrc: "/tech/next.webp", tooltip: "Индексация роботами" },
      { name: "PostgreSQL", iconSrc: "/tech/postgres.webp", tooltip: "База данных" },
    ],
    color: "bg-emerald-500",
    gradient: "from-emerald-600/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    shadow: "shadow-emerald-500/20"
  },
  {
    id: "ecom",
    title: "Интернет-Магазин",
    tagline: "Машина Продаж",
    desc: "Не просто каталог, а система сбыта. Фильтры без перезагрузки, CRM, платежи. Выдерживает любые нагрузки.",
    price: "от 500 000 ₸",
    mainIcon: ShoppingCart,
    statsBadge: { label: "Отказоустойчивость", value: "99.9%", icon: CheckCircle2 },
    idealFor: [{label: "Ритейл", icon: Store}, {label: "DTC", icon: ShoppingCart}],
    techSpecs: [
      { name: "Next.js Com", iconSrc: "/tech/next.webp", tooltip: "E-com ядро" },
      { name: "PostgreSQL", iconSrc: "/tech/postgres.webp", tooltip: "High-load база" },
    ],
    color: "bg-violet-500",
    gradient: "from-violet-600/20 to-purple-500/20",
    border: "group-hover:border-violet-500/50",
    shadow: "shadow-violet-500/20"
  },
  {
    id: "ads",
    title: "Google Реклама",
    tagline: "Поток Клиентов",
    desc: "Мы не сливаем бюджет. Мы покупаем заявки. Глубокая аналитика и чистка трафика снижают стоимость клиента.",
    price: "от 100 000 ₸",
    mainIcon: Target,
    statsBadge: { label: "ROAS (Окупаемость)", value: "300%+", icon: Target },
    idealFor: [{label: "Быстрый старт", icon: Megaphone}, {label: "Рост", icon: TrendingUp}],
    techSpecs: [
      { name: "Google Ads", iconSrc: "/tech/google.webp", tooltip: "API интеграция" },
      { name: "Analytics", iconSrc: "/tech/analytics.webp", tooltip: "Сквозной трекинг" },
    ],
    color: "bg-amber-500",
    gradient: "from-amber-600/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50",
    shadow: "shadow-amber-500/20"
  },
];