'use client';

import { useState } from 'react';
import '../contact/contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID; // Получаем идентификатор чата из переменных окружения
    const message = `<b>Запись клиента</b>\nИмя: ${name}\nТелефон: ${phone}\n`;

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: CHAT_ID,
          text: message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <div className="formInner">
        <form onSubmit={handleSubmit}>
          <div className="inputPrizeInner"></div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              id="name"
              className="inputFrom"
              value={name || ''}
              onChange={handleNameChange}
            />
            <span className="inputLabel">Ваше имя:</span>
          </div>
          <div className="inputBox">
            <input
              type="tel"
              required="required"
              id="phone"
              className="inputFrom"
              value={phone || ''}
              onChange={handlePhoneChange}
            />
            <span className="inputLabel">Ваш телефон:</span>
          </div>

          <button className="formBtn" type="submit">
            <span>О</span>тправить
          </button>
          {success && (
            <h2 className="successText">Информация успешна отправлена!</h2>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
