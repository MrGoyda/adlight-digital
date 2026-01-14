import { Search, PenTool, Code2, Rocket, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  result: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export const PROCESS_DATA: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Аудит и Разведка", // Было Intelligence & Audit
    description: "Мы не гадаем. Мы проводим глубокий анализ вашей ниши, конкурентов и текущих метрик. Строим математическую модель окупаемости еще до написания первой строчки кода.",
    result: "Стратегия + ТЗ",
    icon: Search,
    color: "text-blue-400",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Прототипирование", // Было UX Architecture
    description: "Проектируем логику взаимодействия. Вы увидите интерактивный прототип будущего продукта и сможете «покликать» его. Это исключает дорогие переделки на этапе разработки.",
    result: "Макет Figma",
    icon: PenTool,
    color: "text-indigo-400",
    gradient: "from-indigo-500 to-violet-400"
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Разработка Ядра", // Было High-Perf Development
    description: "Чистый код на Next.js. Никаких конструкторов. Мы создаем масштабируемую систему с SSR (Server Side Rendering) для мгновенной загрузки и идеального SEO.",
    result: "Готовый Продукт",
    icon: Code2,
    color: "text-emerald-400",
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Запуск и Трафик", // Было Launch & Scale
    description: "Сайт — это только начало. Настраиваем сквозную аналитику, подключаем рекламные каналы и выводим проект на плановые показатели прибыли. Поддержка 24/7.",
    result: "Поток Клиентов",
    icon: Rocket,
    color: "text-amber-400",
    gradient: "from-amber-500 to-orange-400"
  }
];