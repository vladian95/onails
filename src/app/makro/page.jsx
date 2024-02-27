import CourseTopbar from '../components/courseTopbar/CourseTopbar';
import BackBtn from '../components/backBtn/BackBtn';
import Image from 'next/image';
import makroImg from '../assets/makroimage.jpg';
import '../makro/makro.scss';

const page = () => {
  return (
    <div className="makro">
      <CourseTopbar />
      <BackBtn />
      <h2 className="makro__title">Макро - маникюр</h2>
      <div className="makro__img">
        <Image
          src={makroImg}
          width={500}
          height={300}
          className="makro__image"
        />
      </div>
      <div className="makro__inner">
        <h3 className="makro__subtitle">
          Длительность 1 день с 10:00 до 20:00
        </h3>

        <h3 className="makro__subtitle">Отработка на двух моделях.</h3>

        <h3 className="makro__subtitle">Кому подойдет?</h3>
        <ul className="makro__list">
          <li className="makro__list-item">
            Мастерам, владеющим техникой комби, стремящихся на новый уровень.
          </li>
          <li className="makro__list-item">
            Тем, кто пробовал делать аппаратный маникюр, но не уверен в своем
            мастерстве
          </li>
          <li className="makro__list-item">
            Тем, кто перетирает кожу и не может поставить юбку
          </li>
          <li className="makro__list-item">
            Идеален для тех, кто не так давно окончил базу и жаждет устранить
            ошибки
          </li>
          <li className="makro__list-item">
            Тем, у кого есть проблемы в синусах, бывают пропилы
          </li>
          <li className="makro__list-item">
            Тем, кто хочет уметь рисовать красивый френч легко
          </li>
          <li className="makro__list-item">
            Перфекционастам, у которых не получаются макро- фото
          </li>
        </ul>
        <h3 className="makro__subtitle">За один день вы разберётесь:</h3>
        <ul className="makro__list">
          <li className="makro__list-item">
            Как подобрать фрезы для аппаратного маникюра в зависимости от типа
            кожи
          </li>
          <li className="makro__list-item">
            Как работать в зоне лунулы без причинения вреда ногтевой пластине
          </li>
          <li className="makro__list-item">Как не перетирать кожу</li>
          <li className="makro__list-item">Как работать с юбкой</li>
          <li className="makro__list-item">
            Узнаёте все о шлифовке и блестящих боковых валиках
          </li>
          <li className="makro__list-item">
            Научитесь создавать идеальный квадрат
          </li>
          <li className="makro__list-item">
            Отработаете мою логичную и простую технику на двух моделях
          </li>
          <li className="makro__list-item">Перестанете бояться макрофото</li>
          <li className="makro__list-item">Найдёте свою идеальную линзу</li>
        </ul>
        <h3 className="makro__subtitle">Преимущества</h3>
        <ul className="makro__list">
          <li className="makro__list-item">
            По окончании курса вы получите сертификат.
          </li>
        </ul>
        <ul className="makro__list">
          <li className="makro__list-item">
            Так же у вас есть возможность получить свидетельство гособразца.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
