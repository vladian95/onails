import Image from 'next/image';
import Olga from '../../assets/olga.png';
import '../about/about.scss';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__inner">
        <h3 className="about__title">Инстуктор школы маникюра</h3>
        <div className="about__box">
          <div className="about__info">
            <Image src={Olga} className="about__photo" width={450}></Image>
          </div>
        </div>
        <div className="about__text">
          <h4 className="about__name">Ольга Абрамович</h4>
          <br />
          <p className="about__description">
            Мастер маникюра с шестилетним стажем. Учредитель собственной студии
            маникюра. В роли серцифицированного инструктора с апреля 2017 года.
            Провела более 100 групповых курсов по аппаратному и комбинированному
            маникюру для начинающих и мастеров профессионалов. Два из которых в
            Москве. Обучила за все воемя более 700 человек.
            <br />
            <br />
            На своих курсах делюсь всем накопленным опытом:
            <br />
            <br />
            <ul>
              <li>В работе с ногтями.</li>
              <li>В психологии общения с клиентом.</li>
              <li>
                В создании и маштабировании собственного маникюрного бизнеса.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
