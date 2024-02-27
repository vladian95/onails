import CourseTopbar from '../components/courseTopbar/CourseTopbar';
import BackBtn from '../components/backBtn/BackBtn';
import Image from 'next/image';
import compoUpImg from '../assets/comboup.jpg';
import '../combyFrench/combyFrench.scss';

const page = () => {
  return (
    <div className="combyFrench">
      <CourseTopbar />
      <BackBtn />
      <h2 className="combyFrench__title">comby french</h2>
      <div className="combyFrench__img">
        <Image
          src={compoUpImg}
          width={500}
          height={300}
          className="combyFrench__image"
        />
      </div>
      <div className="combyFrench__inner">
        <h3 className="combyFrench__subtitle">
          Длительность 1 день с 10:00 до 20:00
        </h3>

        <h3 className="combyFrench__subtitle">Отработка на одной модели.</h3>

        <h3 className="combyFrench__subtitle">Кому подойдет?</h3>
        <ul className="combyFrench__list">
          <li className="combyFrench__list-item">
            Идеален для тех, кто не так давно окончил базу и жаждет устранить
            ошибки.
          </li>
          <li className="combyFrench__list-item">
            Мастера, работающие в технике комби, но не довольны результатом.
          </li>
          <li className="combyFrench__list-item">
            Тем, у кого есть проблемы в синусах, бывают пропилы.
          </li>
          <li className="combyFrench__list-item">
            Тем, кто хочет уметь рисовать красивый френч легко.
          </li>
          <li className="combyFrench__list-item">
            Перфекционастам, у которых не получаются макро- фото.
          </li>
        </ul>
        <h3 className="combyFrench__subtitle">За один день вы разберётесь:</h3>
        <ul className="combyFrench__list">
          <li className="combyFrench__list-item">
            Как делать маникюр быстро и очень чисто
          </li>
          <li className="combyFrench__list-item">
            Как работать в зоне лунулы без причинения вреда ногтевой пластине
          </li>
          <li className="combyFrench__list-item">
            Узнаёте все о шлифовке и блестящих боковых валиках
          </li>
          <li className="combyFrench__list-item">
            Научитесь создавать идеальный квадрат и на нем отрисуете френч по
            универсальной схеме
          </li>
          <li className="combyFrench__list-item">
            Перестанете бояться макрофото
          </li>
        </ul>
        <h3 className="combyFrench__subtitle">Преимущества</h3>
        <ul className="combyFrench__list">
          <li className="combyFrench__list-item">
            По окончании курса вы получите сертификат.
          </li>
        </ul>
        <ul className="combyFrench__list">
          <li className="combyFrench__list-item">
            Так же у вас есть возможность получить свидетельство гособразца.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
