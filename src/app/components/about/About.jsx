import Olga1 from '../../assets/olga2.jpg';
import Olga2 from '@/app/assets/olga3.jpg';
import Image from 'next/image';

import '../about/about.scss';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__inner">
        <div className="about__left">
          <h2 className="about__title">Ольга Абрамович</h2>
          <p className="about__subtitle">
            Инструктор маникюра / бизнес-тренер / сервис-консультант
          </p>
          <div className="about__img">
            <Image src={Olga1} width={400} height={600} />
          </div>
        </div>
        <div className="about__right">
          <div className="about__img">
            <Image src={Olga2} width={400} height={600} />
          </div>
          <p className="about__text">
            Мастер маникюра с шестилетним стажем. Учредитель собственной студии
            маникюра. В роли серцифицированного инструктора с апреля 2017 года.
            Провела более 100 групповых курсов по аппаратному и комбинированному
            маникюру для начинающих и профессионалов. Два из которых в Москве.
            Обучила за все время более 700 человек.
          </p>
          <p className="about__text-title">
            На своих курсах делюсь всем накопительным опытом:
          </p>
          <ul className="about__list">
            <li className="about__list-text">В работе с ногтями;</li>
            <li className="about__list-text">
              В психологии общения с клиентом;
            </li>
            <li className="about__list-text">
              В создании и маштабировании собственного маникюрного бизнеса.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
