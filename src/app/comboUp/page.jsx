import CourseTopbar from '../components/courseTopbar/CourseTopbar';
import BackBtn from '../components/backBtn/BackBtn';
import Image from 'next/image';
import compoUpImg from '../assets/comboup.jpg';
import '../comboUp/comboUp.scss';

const page = () => {
  return (
    <div className="comboUp">
      <CourseTopbar />
      <BackBtn />
      <h2 className="comboUp__title">combo up</h2>
      <div className="comboUp__img">
        <Image
          src={compoUpImg}
          width={500}
          height={300}
          className="comboUp__image"
        />
      </div>
      <div className="comboUp__inner">
        <h3 className="comboUp__subtitle">Для кого этот курс?</h3>
        <ul className="comboUp__list">
          <li className="comboUp__list-item">
            Мастера с опытом работы от 1 года постоянной практики.
          </li>
          <li className="comboUp__list-item">
            Мастера с пробелами в опиле форм и Теории.
          </li>
          <li className="comboUp__list-item">
            Мастера с проблемами в идеальном срезе.
          </li>
          <li className="comboUp__list-item">
            Кто хочет научиться работать гелем и исправлять деформации
            полигелем.
          </li>
        </ul>
        <h3 className="comboUp__subtitle">
          Программа интенсив. Длительность 2 дня с 10 до 21:00 с перерывом на
          обед.
        </h3>

        <h3 className="comboUp__subtitle">Теория:</h3>
        <ul className="comboUp__list">
          <li className="comboUp__list-item">
            Строение ногтя, химия материалов. Простыми словами о сложном, или
            почему важно уметь работать твердыми материалами.
          </li>
        </ul>
        <h3 className="comboUp__subtitle">Практика:</h3>
        <ul className="comboUp__list">
          <li className="comboUp__list-item"> Отработка на 3х моделях</li>
          <li className="comboUp__list-item">
            1. форма квадрат с достраиванием углов полигелем, гелем и гелем-
            желе + идеальный френч.
          </li>
          <li className="comboUp__list-item">
            2. миндаль. РАбота с натраньми ногтями, исправление деформаций,
            выстраивающие архитектуры. Тонко, прочно, эстетично.
          </li>
          <li className="comboUp__list-item">
            3. овал. Грамотный опил и укрепление гелем.
          </li>
          <li className="comboUp__list-item">
            Освоите технику идеального аппаратного маникюра, подтянете
            комбинированный маникюр в моей чистейшей технике.
          </li>
          <li className="comboUp__list-item">
            Отработаете покрытие по- настоящему под кутикулу.
          </li>
          <li className="comboUp__list-item">
            Разберетесь с выравниванием ногтей разных типов, устраните излишнюю
            толщину и объем по бокам
          </li>
          <li className="comboUp__list-item">
            Покажу макро- фото (цветокоррекция, обзор приложений).
          </li>
          <li className="comboUp__list-item">Отработаете актуальные дизайны</li>
        </ul>
        <h3 className="comboUp__subtitle">Преимущества</h3>
        <ul className="comboUp__list">
          <li className="comboUp__list-item">
            Для лучшего результата после предоплаты вы получаете подарки: гайд
            по скоростному снятию и по выравниванию ногтей (с моими рецептами
            для каждого типа нп), гайд по работе с твердыми материалами, по
            опилу форм и по базам.
          </li>
        </ul>
        <ul className="comboUp__list">
          <li className="comboUp__list-item">
            В курс входит так же тренинг по поднятию прайса.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
