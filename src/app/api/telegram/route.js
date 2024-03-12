// app/api/telegram/route.js

export async function POST(req, res) {
  const { chatId, text } = await req.json();
  const token = process.env.TELEGRAM_BOT_TOKEN; // Получаем токен из переменных окружения
  const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

  if (!chatId || !token || !text) {
    return new Response(
      JSON.stringify({ error: 'Missing required parameters' }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  try {
    const response = await fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to send message' }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending message' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
