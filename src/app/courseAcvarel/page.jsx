import CourseTopbar from '../components/courseTopbar/CourseTopbar';
import BackBtn from '../components/backBtn/BackBtn';
import Image from 'next/image';
import acvarelImg from '../assets/manik.webp';
import '../courseAcvarel/acvarel.scss';

const page = () => {
  return (
    <div className="acvarel">
      <CourseTopbar />
      <BackBtn />
      <h2 className="acvarel__title">курс акварель</h2>
      <div className="acvarel__img">
        <Image
          src={acvarelImg}
          width={500}
          height={300}
          className="acvarel__image"
        />
      </div>
      <div className="acvarel__inner">
        <h3 className="acvarel__subtitle">Для кого этот курс?</h3>
        <ul className="acvarel__list">
          <li className="acvarel__list-item">
            Для всех мастеров кто хочет развития и дополнительного заработка
          </li>
        </ul>
        <h3 className="acvarel__subtitle">Почему вам нужен этот курс?</h3>
        <ul className="acvarel__list">
          <li className="acvarel__list-item">
            Акварель - это уникальная техника, с помощью которой вы сможете
            сделать любой дизайн! То ли это обычный мрамор, то ли это целый
            пейзаж
          </li>
        </ul>
        <h3 className="acvarel__subtitle">Сколько рисуется дизайн ?</h3>
        <ul className="acvarel__list">
          <li className="acvarel__list-item">
            Все зависит от сложности и практики ! В целом один ноготок рисуется
            2 мин
          </li>
        </ul>
        <h3 className="acvarel__subtitle">
          Какая стоимость акварельного рисунка ?
        </h3>
        <ul className="acvarel__list">
          <li className="acvarel__list-item"> От 100 до 500 руб</li>
        </ul>
        <h3 className="acvarel__subtitle">Теория:</h3>
        <ul className="acvarel__list">
          <li className="acvarel__list-item"> все о красках</li>
          <li className="acvarel__list-item"> какие нужны кисти</li>
          <li className="acvarel__list-item">
            какой матовый топ идеален для акварели
          </li>
          <li className="acvarel__list-item">
            рисование технике «акварельная вода» и «растушевка»
          </li>
        </ul>
        <h3 className="acvarel__subtitle">Практика:</h3>
        <ul className="acvarel__list">
          <li className="acvarel__list-item"> До 10 типсов с отработкой</li>
        </ul>
        <h3 className="acvarel__subtitle">Длительность:</h3>
        <ul className="acvarel__list">
          <li className="acvarel__list-item"> 1 день с 10:00 до 17:00</li>
          <li className="acvarel__list-item">
            По окончании вы получаете сертификат.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
