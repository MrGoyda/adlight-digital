import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: Request) {
  try {
    // 1. Получаем данные с фронтенда
    const body = await req.json();
    const { name, phone, subject, connectionType } = body;

    // Проверка обязательных полей
    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    // 2. Формируем красивое сообщение
    // Используем HTML разметку для Telegram (Bold, Code)
    const message = `
🔥 <b>НОВАЯ ЗАЯВКА ADLight!</b>

👤 <b>Имя:</b> ${name}
📱 <b>Телефон:</b> ${phone}
🔗 <b>Способ связи:</b> ${connectionType || 'Не указан'}

📌 <b>Источник (Блок):</b>
<code>${subject || 'Общая заявка'}</code>
    `;

    // 3. Отправляем в Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML', // Чтобы работали теги <b> и <code>
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API Error');
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Telegram Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}