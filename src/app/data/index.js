import nogti from '../assets/manik.webp';
import comboUp from '../assets/comboup.jpg';

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
    img: comboUp,
    title: 'Повышение квалификации «Комби + френч»',
    subtitle: 'Только практика без воды.',
    price: '30.000',
    href: '/combyFrench',
  },
];

export default courses;
