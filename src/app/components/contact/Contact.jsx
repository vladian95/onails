// 'use client';

// import { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const TOKEN = process.env.REACT_APP_TOKEN;
//     const CHAT_ID = process.env.REACT_APP_CHAT_ID;
//     const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
//     let message = `<b>Запись клиента</b>\n`;
//     message += `Имя: ${name}\n`;
//     message += `Телефон: ${phone}\n`;

//     try {
//       const response = await axios.post(URL_API, {
//         chat_id: CHAT_ID,
//         text: message,
//         parse_mode: 'HTML',
//       });

//       if (response.status === 200) {
//         setSuccess(true);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };

//   return (
//     <>
//       <div className="formInner">
//         <form onSubmit={handleSubmit}>
//           <div className="inputPrizeInner"></div>
//           <div className="inputBox">
//             <input
//               type="text"
//               required="required"
//               id="name"
//               className="inputFrom"
//               value={name || ''}
//               onChange={handleNameChange}
//             />
//             <span className="inputLabel">Ваше имя:</span>
//           </div>
//           <div className="inputBox">
//             <input
//               type="tel"
//               required="required"
//               id="phone"
//               className="inputFrom"
//               value={phone || ''}
//               onChange={handlePhoneChange}
//             />
//             <span className="inputLabel">Ваш телефон:</span>
//           </div>

//           <button className="formBtn" type="submit">
//             <span>О</span>тправить
//           </button>
//           {success && (
//             <h2 className="successText">Информация успешна отправлена!</h2>
//           )}
//         </form>
//       </div>
//     </>
//   );
// };

// export default Contact;

import '../contact/contact.scss';
const Contact = () => {
  return (
    <div className="contact" id="contactSec">
      Contact
    </div>
  );
};

export default Contact;
