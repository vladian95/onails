import nogti from '../assets/manik.webp';
import comboUp from '../assets/comboup.jpg';
import makroImg from '../assets/makroimage.jpg';
import instructorImg from '../assets/instructorimg.jpg';
import myBasicImg from '../assets/mybasicImg.jpg';
import combyFrenchImg from '../assets/combyFrenchImg.jpg';

export const courses = [
  {
    id: 1,
    img: nogti,
    title: 'Курс акварель',
    subtitle:
      'Акварель - это уникальная техника, с помощью которой вы сможете сделать любой дизайн! То ли это обычный мрамор, то ли это целый пейзаж',
    price: '15.000',
    href: '/courseAcvarel',
  },
  {
    id: 2,
    img: comboUp,
    title: 'Повышение Combo Up',
    subtitle: 'Курс - легенда по версии всех, кто его проходил!',
    price: '20.000',
    href: '/comboUp',
  },
  {
    id: 3,
    img: combyFrenchImg,
    title: 'Повышение квалификации «Комби + френч»',
    subtitle: 'Только практика без воды.',
    price: '30.000',
    href: '/combyFrench',
  },
  {
    id: 4,
    img: makroImg,
    title: 'Повышение квалификации «Макро - маникюр»',
    subtitle: 'Только практика без воды.',
    price: '40.000',
    href: '/makro',
  },
  {
    id: 5,
    img: instructorImg,
    title: 'Инструкторский курс',
    subtitle:
      'Хочешь передавать свой опыт другим, но не знаешь, как упаковать весь свой опыт в структуру обучения.',
    price: '50.000',
    href: '/instructor',
  },
  {
    id: 6,
    img: myBasicImg,
    title: 'Базовый курс «Твоя Основа»',
    subtitle: 'Самый эффективный курс для быстрого старта в профессии.',
    price: '60.000',
    href: '/myBasic',
  },
];

export const inquiryItems = [
  {
    id: 1,
    title: 'Март',
    description1: '09.03 - наращивание на Верхние формы',
    description2: '10-13.03 - инструкторский курс',
    description3: '16.03 - Макро маникюр 1 день',
    description4: '17.03 - МК по стемпингу',
    description5: '30-31.03 - Combo Up',
    description6: '28.03-1.04 - Твоя основа',
  },
  {
    id: 2,
    title: 'Апрель',
    description1: '14.04 - макро маникюр',
    description2: '21.04 - наращивание на верхние формы',
    description3: '28.04 - комби + френч',
    description4: '29-30.04 - Combo up',
  },
  {
    id: 3,
    title: 'Май',
    description1: '3-7.05 - Твоя основа',
    description2: '9-13.05 - Инструкторский курс живой',
    description3: '26.05 - наращивание на верхние формы',
    description4: '18.05 - комби + френч',
  },
];

// export default { courses, inquiry };
