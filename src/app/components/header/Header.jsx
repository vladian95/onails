import './header.scss';

const Header = () => {
  return (
    <section className="header">
      <div className="header__inner">
        <div className="header__text">
          <h1 className="header__title">ШКОЛА МАНИКЮРА</h1>
          <h2 className="header__subtitle">Ольги Абрамович</h2>
        </div>
        <div className="header__school">
          <a href="#about" className="header__btn">
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
