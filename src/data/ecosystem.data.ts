import { 
  TrendingUp, // Для SEO роста
  MousePointerClick, // Для заявок/кликов
  Layout, // Для посадочных страниц
  Calculator // Для калькулятора
} from "lucide-react";
import { type EcosystemData } from "@/types";

export const ecosystemData: EcosystemData = {
  heading: "Практики, а не теоретики",
  subheading: "Наш полигон — ADLight.kz",
  description: [
    "Мы не тестируем гипотезы на клиентах. Все технологии, от SEO-стратегий до сложных калькуляторов, мы обкатываем на собственном производстве наружной рекламы уже более 5 лет.",
    "Результат — стабильный поток заявок и топовые позиции, которые мы можем повторить для вас."
  ],
  cta: {
    text: "Смотреть боевой проект",
    url: "https://adlight.kz"
  },
  metrics: [
    {
      id: "seo-res",
      label: "SEO Результат",
      value: "Топ 1-4",
      subtext: "выход за 3 недели",
      icon: TrendingUp,
      accentColor: "text-emerald-400", // Цвет денег/роста
      position: "top-left"
    },
    {
      id: "ads-vol",
      label: "Google Ads + SEO",
      value: "15+",
      subtext: "заявок ежедневно",
      icon: MousePointerClick,
      accentColor: "text-blue-400", // Цвет технологий/кликов
      position: "top-right"
    },
    {
      id: "scale",
      label: "Масштаб",
      value: "35",
      subtext: "посадочных страниц",
      icon: Layout,
      accentColor: "text-purple-400", // Цвет структуры
      position: "bottom-left"
    },
    {
      id: "tech",
      label: "Сложность",
      value: "15+",
      subtext: "видов услуг в калькуляторе",
      icon: Calculator,
      accentColor: "text-orange-400", // Цвет инструмента
      position: "bottom-right"
    }
  ]
};