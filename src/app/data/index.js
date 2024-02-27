import nogti from '../assets/manik.webp';
import comboUp from '../assets/comboup.jpg';
import makroImg from '../assets/makroimage.jpg';
import instructorImg from '../assets/instructorimg.jpg';
import myBasicImg from '../assets/mybasicImg.jpg';
import combyFrenchImg from '../assets/combyFrenchImg.jpg';

const courses = [
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

export default courses;
