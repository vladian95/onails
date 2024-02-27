import CourseTopbar from '../components/courseTopbar/CourseTopbar';
import BackBtn from '../components/backBtn/BackBtn';
import Image from 'next/image';
import instructorImg from '../assets/instructorimg.jpg';
import '../instructor/instructor.scss';

const page = () => {
  return (
    <div className="instructor">
      <CourseTopbar />
      <BackBtn />
      <h2 className="instructor__title">Инструкторский курс</h2>
      <div className="instructor__img">
        <Image
          src={instructorImg}
          width={500}
          height={300}
          className="instructor__image"
        />
      </div>
      <div className="instructor__inner">
        <h3 className="instructor__subtitle">Этот курс для тебя, если ты:</h3>
        <ul className="instructor__list">
          <li className="instructor__list-item">
            Ты не хочешь пилить всю жизнь
          </li>
          <li className="instructor__list-item">
            Для тебя нет новой информации на курсах повышения
          </li>
          <li className="instructor__list-item">
            Хочешь передавать свой опыт другим, но не знаешь, как упаковать весь
            свой опыт в структуру обучения
          </li>
          <li className="instructor__list-item">
            Хочешь делиться своими знаниями и быть наставником
          </li>
          <li className="instructor__list-item">
            Не готова откладывать жизнь на потом
          </li>
          <li className="instructor__list-item">Устала жить по днем сурка</li>
          <li className="instructor__list-item">
            Хочешь больше свободного времени и развития
          </li>
          <li className="instructor__list-item">
            Хочешь увеличить свой доход и сделать квантовый скачок
          </li>
        </ul>
        <h3 className="instructor__subtitle">Длительность курса 6 недель.</h3>
        <ul className="instructor__list">
          <li className="instructor__list-item">
            Увеличишь свой доход от 120 до 200 тысяч в месяц, работая в
            мини-группах
          </li>
          <li className="instructor__list-item">
            Разберешься во всех нюансах проведения курсов
          </li>
          <li className="instructor__list-item">
            Будешь готова к работе с абсолютно любым запросом в нашей нише
          </li>
          <li className="instructor__list-item">
            Получишь поддержку и помощь наставника (Ольга Абрамович на
            протяжении всего курса дает обратную связь и остается рядом после
            окончания обучения)
          </li>
          <li className="instructor__list-item">
            Получишь все необходимые знания под ключ: методические материалы,
            схемы, оборудование и тд
          </li>
          <li className="instructor__list-item">
            Заявишь о себе и победишь самозванца
          </li>
          <li className="instructor__list-item">
            Обретешь уверенность в себе, в своих знаниях и начнёшь проявляться в
            блоге без страха
          </li>
          <li className="instructor__list-item">
            Изменишь мышление. Перейдешь с мышления мастера на мышление
            инструктора- предпринимателя
          </li>
          <li className="instructor__list-item">Станешь автором своей жизни</li>
          <li className="instructor__list-item">
            Научишься стратегиям продаж своих курсов
          </li>
          <li className="instructor__list-item">
            Научишься привлекать учеников и собирать полные группы на свои курсы
          </li>
          <li className="instructor__list-item">
            На практике применишь свой новый статус -ИНСТРУКТОРА
          </li>
          <li className="instructor__list-item">
            Получишь полную готовность преподавать без страхов и сомнений
          </li>
          <li className="instructor__list-item">Заберешь 5 программ курсов</li>
          <li className="instructor__list-item">
            Используя готовые программы обучения по базовому курсу и курсу
            повышения квалификации ты сможешь сразу же начать преподавать
          </li>
        </ul>
        <h3 className="instructor__subtitle">Подробная программа курса:</h3>
        <h3 className="instructor__subtitle" style={{ border: 'none' }}>
          Модуль 1 ТЕОРЕТИЧЕСКИЙ
        </h3>
        <ul className="instructor__list">
          <li className="instructor__list-item">Знакомство</li>
          <li className="instructor__list-item">Работа с постановкой целей</li>
          <li className="instructor__list-item">
            Техники борьбы с паникой и тревогой
          </li>
          <li className="instructor__list-item">
            Кто такой успешный инструктор?
          </li>
          <li className="instructor__list-item">Мотивация ваша и учеников</li>
          <li className="instructor__list-item">
            Как довести их до результата
          </li>
          <li className="instructor__list-item">Типология учеников</li>
          <li className="instructor__list-item">
            Методология создания своего курса
          </li>
          <li className="instructor__list-item">
            Создание своего курса с учетом вашей сильной стороны
          </li>
          <li className="instructor__list-item">Легализация деятельности</li>
          <li className="instructor__list-item">Ораторское инстусство</li>
          <li className="instructor__list-item">
            Оборудование учебного класса
          </li>
          <li className="instructor__list-item">
            График работы. Делегирование
          </li>
          <li className="instructor__list-item">Поиск моделей</li>
          <li className="instructor__list-item">
            Как научиться простыми словами объяснять сложные вещи
          </li>
          <li className="instructor__list-item">
            Как определить цену на курс, себестоимость 1 ученика
          </li>
          <li className="instructor__list-item">Типовой договор на обучение</li>
        </ul>
        <h3 className="instructor__subtitle" style={{ border: 'none' }}>
          Модуль 2
        </h3>
        <ul className="instructor__list">
          <li className="instructor__list-item">Работа в социальных сетях</li>
          <li className="instructor__list-item">Разбор вашего профиля</li>
          <li className="instructor__list-item">
            Отличия аккаунтов мастера маникюра и преподавателя
          </li>
          <li className="instructor__list-item">Оформление профиля</li>
          <li className="instructor__list-item">Работа с визуалом</li>
          <li className="instructor__list-item">
            Контент- план по сторис и постам на 30 дней
          </li>
          <li className="instructor__list-item">Триггерные точки</li>
          <li className="instructor__list-item">
            Как сделать так, чтобы у тебя покупали? Техника мягких продаж
          </li>
          <li className="instructor__list-item">Станешь автором своей жизни</li>
          <li className="instructor__list-item">
            Переписка с потенциальным учеником
          </li>
          <li className="instructor__list-item">Продвижение</li>
          <li className="instructor__list-item">Ошибки сториз</li>
          <li className="instructor__list-item">
            Как полюбить вести соцсети и делать это легко
          </li>
        </ul>
        <h3 className="instructor__subtitle" style={{ border: 'none' }}>
          Модуль 3
        </h3>
        <ul className="instructor__list">
          <li className="instructor__list-item">Упаковка вашего курса.</li>
          <li className="instructor__list-item">Личный бренд</li>
          <li className="instructor__list-item">
            Отличия вашей ЦА от не вашей ЦА и почему так важно это знать
          </li>
          <li className="instructor__list-item">Ваше УТП</li>
          <li className="instructor__list-item">Миссия деятельности</li>
          <li className="instructor__list-item">
            Инвестиции: куда, зачем и когда?
          </li>
        </ul>
        <h3 className="instructor__subtitle" style={{ border: 'none' }}>
          Модуль 4
        </h3>
        <ul className="instructor__list">
          <li className="instructor__list-item">Практика в Маникюре.</li>
          <li className="instructor__list-item">
            Модель для отработки комбинированного маникюра
          </li>
          <li className="instructor__list-item">
            Модель для отработки аппаратного маникюра
          </li>
          <li className="instructor__list-item">
            Модель для отработки моделирования ногтей на верхние формы
          </li>
          <li className="instructor__list-item">
            Вы проведете однодневный курс повышения квалификации с выдачей
            сертификата
          </li>
          <li className="instructor__list-item">
            Найдете свои точки роста в маникюре, разберетесь в нюансах донесения
            информации до учениц.
          </li>
          <li className="instructor__list-item">Цель - результат в обучении</li>
        </ul>
        <h3 className="instructor__subtitle" style={{ border: 'none' }}>
          Модуль 5
        </h3>
        <ul className="instructor__list">
          <li className="instructor__list-item">
            Визаж + фотосессия для контента
          </li>
          <li className="instructor__list-item">
            Вручение диплома инструктора и свидетельства о присвоении профессии
            «специалист по маникюру» (гособразец)
          </li>
          <li className="instructor__list-item">
            Проработка страхов, неуверенности в себе, поиск ресурса через работу
            с МАК (метафорические ассоциативные карты - не гадание. Инструмент
            психологов)
          </li>
        </ul>
        <h3 className="instructor__subtitle">
          Поддержка после курса в течение 30 дней. Индивидуальная работа
        </h3>
      </div>
    </div>
  );
};

export default page;
