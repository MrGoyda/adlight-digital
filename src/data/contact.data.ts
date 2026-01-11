import { Phone, Instagram, Send, MessageCircle } from "lucide-react"; // Send = Telegram icon approx

export const CONTACT_DATA = {
  phone: {
    display: "+7 (700) 123-45-67", // Замени на реальный
    value: "+77001234567",
    icon: Phone
  },
  socials: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/77001234567", // Замени
      icon: MessageCircle,
      color: "hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/20"
    },
    {
      id: "telegram",
      label: "Telegram",
      href: "https://t.me/your_username", // Замени
      icon: Send,
      color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/20"
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/adlight_digital", // Замени
      icon: Instagram,
      color: "hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/20"
    }
  ]
};

// ДОБАВЛЯЕМ НОВУЮ КОНСТАНТУ ДЛЯ ФОРМЫ
export const CONTACT_FORM = {
  title: "Начать проект",
  subtitle: {
    mobile: "Начать проект",
    desktop_pre: "Давайте обсудим",
    desktop_highlight: "ваш рост",
    desc: "Оставьте заявку сейчас. Мы проведем экспресс-аудит вашей ниши и предложим стратегию в течение 24 часов."
  },
  features: [
    { text: "Бесплатный аудит сайта", color: "text-emerald-400" },
    { text: "Смета в 3-х вариантах", color: "text-blue-400" },
    { text: "Техническое задание", color: "text-purple-400" },
  ],
  fields: {
    name: { label: "Как к вам обращаться?", placeholder: "Иван Петров" },
    phone: { label: "Телефон / WhatsApp", placeholder: "+7 (777) 000-00-00" },
    service: { 
      label: "Какая задача?", 
      options: [
        { value: "landing", label: "Продающий Лендинг" },
        { value: "corporate", label: "Корпоративный Сайт" },
        { value: "shop", label: "Интернет-магазин" },
        { value: "ads", label: "Настройка Рекламы" },
        { value: "complex", label: "Комплекс (Сайт + Реклама)" },
      ]
    }
  },
  submit: {
    default: "Получить консультацию",
    loading: "Отправка...",
    agreement: "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности."
  },
  success: {
    title: "Заявка принята!",
    message: "Спасибо. Менеджер свяжется с вами в ближайшее время через WhatsApp или Telegram."
  }
};