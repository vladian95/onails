import CourseTopbar from '../components/courseTopbar/CourseTopbar';
import BackBtn from '../components/backBtn/BackBtn';
import Image from 'next/image';
import myBasicImg from '../assets/mybasicImg.jpg';
import '../myBasic/myBasic.scss';

const page = () => {
  return (
    <div className="myBasic">
      <CourseTopbar />
      <BackBtn />
      <h2 className="myBasic__title">Базовый курс «Твоя Основа»</h2>
      <div className="myBasic__img">
        <Image
          src={myBasicImg}
          width={500}
          height={300}
          className="myBasic__image"
        />
      </div>
      <div className="myBasic__inner">
        <h3 className="myBasic__subtitle">
          Самый эффективный курс для быстрого старта в профессии.
        </h3>
        <ul className="myBasic__list">
          <li className="myBasic__list-item">
            7 лет мы выпускаем самых успешных мастеров ногтевого сервиса.
            Главным критерием успеха мы считаем профессионализм. Поэтому и
            процесс обучения выстроен так, чтобы все получилось легко.
          </li>
          <li className="myBasic__list-item">
            После внесения предоплаты вам открывается доступ к предобучению.
            Короткие видео с понятными объяснениями и много практических уроков
            останутся с вами и после курса, чтобы в любой момент вы смогли
            вернуться к информации и пересмотреть.
          </li>
        </ul>
        <h3 className="myBasic__subtitle">После него вы будете уметь:</h3>
        <ul className="myBasic__list">
          <li className="myBasic__list-item">
            Выполнять маникюр в двух техниках (аппаратная без режущих
            инструментов) и комбинированная (аппарат и ножнички)
          </li>
          <li className="myBasic__list-item">
            Разбираться в разных типах ногтей и знать, какой материал применить
            для безопасной работы (без ожогов)
          </li>
          <li className="myBasic__list-item">
            Пилить правильно основные формы ногтей
          </li>
          <li className="myBasic__list-item">
            Уметь донарастить ноготь, починить трещину
          </li>
          <li className="myBasic__list-item">Укреплять ногти 4мя способами</li>
          <li className="myBasic__list-item">Считать себестоимость</li>
          <li className="myBasic__list-item">Искать клиентов</li>
          <li className="myBasic__list-item">
            Красиво фотографировать и вести Инстаграм
          </li>
          <li className="myBasic__list-item">
            Обрабатывать инструменты по СанПиН
          </li>
          <li className="myBasic__list-item">
            Вы сможете уже после курса начать зарабатывать, поскольку я учу
            делать ДОРОГИЕ ногти их хотят все
          </li>
          <li className="myBasic__list-item" style={{ marginTop: '15px' }}>
            С собой на курс ничего не нужно, я абсолютно все предоставляю.
          </li>
          <li className="myBasic__list-item">
            Есть возможность стажировки в студии
          </li>
          <li className="myBasic__list-item">
            Можно дополнительно получить свидетельство гособразца
          </li>
        </ul>
        <h3 className="myBasic__subtitle">Тариф «Я сама»</h3>
        <ul className="myBasic__list">
          <li className="myBasic__list-item">
            После обучения вы приступаете к отработке навыков самостоятельно.
            Обратная связь инструктора по запросу. Стажировка в студии при
            необходимости. Мы предоставляем оборудованное место и модель. Вы
            покупаете один раз базу и топ.
          </li>
        </ul>
        <h3 className="myBasic__subtitle">Тариф «с наставником»</h3>
        <ul className="myBasic__list">
          <li className="myBasic__list-item">
            После обучения вы приступаете к отработке навыков самостоятельно.
            Обратная связь инструктора по запросу. Стажировка в студии при
            необходимости. Мы предоставляем оборудованное место и модель. Вы
            покупаете один раз базу и топ.
          </li>
          <li className="myBasic__list-item">
            Живой курс + онлайн-курс + работа с инструктором в течение месяца
            после обучения. Как это происходит?
          </li>
          <li className="myBasic__list-item">
            Вы записываетесь на практику 2 раза в неделю. Выполняете работу под
            присмотром преподавателя. Работаете над скоростью, портфолио и
            начинаете вести соцсети по нашим инструкциям. С вами дополнительно
            прирабатываются страхи, неуверенность в себе. С этим тарифом вы
            гарантированное быстро привлечете клиентов на достойный прайс и
            станете уверенно двигаться вперед.
          </li>
        </ul>
        <h3 className="myBasic__subtitle">Онлайн поддержка</h3>
        <ul className="myBasic__list">
          <li className="myBasic__list-item">
            Этот тариф нужен тем, кто часто берется за новое и бросает на
            полпути. Заботливая рука наставника вернет вас целям и поддержит в
            непростые моменты.
          </li>
          <li className="myBasic__list-item">
            Вам поначалу не нужно покупать материалы и оборудование, мы все
            предоставим. Т дальше либо поможем с приобретением по более выгодным
            ценам либо поможем с трудоустройством.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
