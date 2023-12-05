import '../cards/cards.scss';

const Cards = () => {
  return (
    <section className="cards">
      <h2 className="cards__title" id="cards">
        Курсы
      </h2>
      <div className="cards__inner">
        <div className="cards__item">
          <h3 className="cards__item-title">Базовый курс 5 дней</h3>
        </div>
        <div className="cards__item">
          <h3 className="cards__item-title">
            Повышение 1 день «комби и френч»
          </h3>
        </div>
        <div className="cards__item">
          <h3 className="cards__item-title">
            Повышение интенсив «Combo Up» 2 дня
          </h3>
        </div>
        <div className="cards__item">
          <h3 className="cards__item-title">
            Повышение по аппаратному маникюру 1 день
          </h3>
        </div>
        <div className="cards__item">
          <h3 className="cards__item-title">
            Инструкторский курс онлайн и офлайн
          </h3>
        </div>
        <div className="cards__item">
          <h3 className="cards__item-title">
            Наращивание классическое повышение «выкладной френч»
          </h3>
        </div>
        <div className="cards__item">
          <h3 className="cards__item-title">
            Наращивание на верхние формы 1 день
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Cards;
