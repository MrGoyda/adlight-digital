import { PricingPlan } from '@/types/pricing';

export const PRICING_TITLE = {
  label: "Модели сотрудничества",
  heading: "Инвестиции в ваш рост",
  description: "Выберите стратегию: партнерский старт с минимальными вложениями, готовое решение под ключ или масштабирование экосистемы."
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'kickstarter',
    title: 'Партнерский Старт',
    price: {
      amount: '50.000 ₸',
      suffix: '+ 150.000 ₸ с прибыли',
    },
    description: 'Мы инвестируем технологии в ваш бизнес. Вы оплачиваете себестоимость запуска, а полную цену закрываете только с первых продаж.',
    features: [
      { text: 'Индивидуальная разработка (No Templates)', included: true },
      { text: 'Премиум дизайн Deep Ocean', included: true },
      { text: 'Настройка Google Ads (Поиск)', included: true },
      { text: 'Быстрый запуск (7-10 дней)', included: true },
      { text: 'Доплата 150к только при результате', included: true },
      { text: 'Возможен % с продаж (обсуждается)', included: true },
    ],
    cta: {
      text: 'Подать заявку',
      href: '#contact-modal',
    },
    visual: {
      highlight: false,
      colorTheme: 'blue',
      badge: 'Грант на развитие',
    },
    logic: {
      isRestricted: true,
    },
  },
  {
    id: 'accelerator',
    title: 'Бизнес Под Ключ',
    price: {
      amount: '300.000 ₸',
      suffix: '/ единоразово',
    },
    description: 'Золотой стандарт. Вы получаете весь стек технологий ADLight и исходный код в полную собственность. Без скрытых платежей.',
    features: [
      { text: 'Landing Page на Next.js 15', included: true },
      { text: 'Продвинутая SEO-структура', included: true },
      { text: 'Google Ads (Поиск + КМС + Ретаргет)', included: true },
      { text: 'Интеграция CRM / Telegram бота', included: true },
      { text: 'Передача всех исходных кодов', included: true },
      { text: 'Адаптация под все устройства', included: true },
    ],
    cta: {
      text: 'Выбрать тариф',
      href: '#contact-modal',
    },
    visual: {
      highlight: true,
      colorTheme: 'emerald',
      badge: 'Хит продаж',
    },
    logic: {
      isRestricted: false,
    },
  },
  {
    id: 'dominator',
    title: 'Экосистема',
    price: {
      amount: '500.000 ₸',
      suffix: '+ (Индивидуально)',
    },
    description: 'Для лидеров рынка. Разработка сложных веб-сервисов, интернет-магазинов и полное техническое сопровождение маркетинга.',
    features: [
      { text: 'E-commerce / Корпоративный сайт', included: true },
      { text: 'Сложные интеграции (1C, МойСклад)', included: true },
      { text: 'Выделенная команда поддержки', included: true },
      { text: 'Ежемесячная аналитика и доработки', included: true },
      { text: 'Масштабирование рекламных кампаний', included: true },
      { text: 'Личный Project Manager', included: true },
    ],
    cta: {
      text: 'Обсудить проект',
      href: '#contact-modal',
    },
    visual: {
      highlight: false,
      colorTheme: 'slate',
      badge: 'VIP Сопровождение',
    },
    logic: {
      isRestricted: false,
    },
  },
];