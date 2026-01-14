import { 
  Zap, TrendingUp, MousePointerClick, Code2, 
  Phone, MessageCircle, Send, Instagram, 
  MapPin, Mail, ArrowUpRight 
} from "lucide-react";

export const footerData = {
  // --- Секция 1: CTA (Призыв к действию) ---
  cta: {
    title: "Готовы масштабировать бизнес?",
    subtitle: "У вас есть продукт, у нас — технологии для его продвижения. Давайте обсудим, как Google Ads и Next.js 15 изменят ваши продажи.",
    buttonText: "Обсудить проект",
    subject: "Заявка с футера (Mega Footer)",
    responseInfo: "Отвечаем в течение 15 минут"
  },
  
  // --- Секция 2: Информация о компании ---
  companyInfo: {
    description: "ADLight Digital — архитекторы высоконагруженных веб-решений и алгоритмического маркетинга.",
    copyright: "© 2026 ADLight Digital. Все права защищены.",
    location: "Астана, Казахстан",
    // Основной телефон для отображения текстом
    phone: {
      display: "+7 (707) 135-67-01",
      href: "tel:+77071356701"
    },
    email: {
      display: "hello@adlight.kz",
      href: "mailto:hello@adlight.kz"
    }
  },
  
  // --- Секция 3: Колонки навигации ---
  columns: [
    {
      title: "Услуги",
      links: [
        { label: "Google Реклама", href: "#google-ads", isHighlight: true }, // Ваш запрос
        { label: "Разработка сайтов", href: "#services" },
        { label: "SEO Продвижение", href: "#seo" },
        { label: "Аналитика", href: "#analytics" },
      ]
    },
    {
      title: "Технологии", // Из вашего массива NAV_LINKS
      links: [
        { label: "Скорость (0.5s)", href: "#speed", icon: Zap },
        { label: "ROI Эффективность", href: "#roi", icon: TrendingUp },
        { label: "UX/UI Архитектура", href: "#ux", icon: MousePointerClick },
        { label: "Next.js 15 Stack", href: "#tech", icon: Code2 },
      ]
    },
    {
      title: "Навигация", // Остальные ссылки из NAV_LINKS
      links: [
        { label: "Экспертиза", href: "#expertise" },
        { label: "Процесс работы", href: "#process" },
        { label: "Тарифы", href: "#pricing" },
        { label: "Контакты", href: "#contacts" }, // Добавим для логики
      ]
    }
  ],

  // --- Секция 4: Социальные сети (Ваши данные) ---
  socials: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/77071356701",
      icon: MessageCircle,
      // Ваши кастомные цвета
      className: "hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/20"
    },
    {
      id: "telegram",
      label: "Telegram",
      href: "https://t.me/EliseyGoidenko",
      icon: Send,
      className: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/20"
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/mr.goyda",
      icon: Instagram,
      className: "hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/20"
    }
  ]
};