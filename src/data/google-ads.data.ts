import { BarChart3, Target, Zap, Search } from "lucide-react";

export const googleAdsData = {
  header: {
    title: "Google Ads: Трафик Высокой Точности",
    subtitle: "Мы не просто «настраиваем рекламу». Мы создаем систему лидогенерации, основанную на семантическом анализе и поведенческих факторах.",
  },
  metrics: [
    { value: "300+", label: "Ниш проанализировано" },
    { value: "4.5x", label: "Средний ROAS клиентов" },
    { value: "24/7", label: "Мониторинг ставок" },
  ],
  features: [
    {
      id: "semantic",
      icon: Search,
      title: "Глубокая семантика",
      description: "Собираем не только ВЧ-запросы, но и «длинный хвост» (long-tail), где клик дешевле, а конверсия выше."
    },
    {
      id: "cleaning",
      icon: Target,
      title: "Чистка трафика",
      description: "Жесткая минусация нецелевых запросов. Вы платите только за тех, кто реально ищет ваш продукт."
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Сквозная аналитика",
      description: "Настраиваем цели и отслеживание конверсий. Вы видите стоимость каждой заявки, а не просто клики."
    },
    {
      id: "retargeting",
      icon: Zap,
      title: "Ремаркетинг 360°",
      description: "Возвращаем тех, кто ушел, с помощью догоняющих баннеров в КМС (Google Display Network)."
    }
  ],
  promo: {
    badge: "Спецпредложение", // <-- Перенесли текст в данные
    priceTitle: "Легкий старт",
    priceAmount: "100 000 ₸",
    priceDescription: "Полная настройка поисковой кампании + месяц ведения и аналитики.",
    ctaText: "Запустить трафик",
    subject: "Настройка Google Ads (Promo 100k)"
  }
};