import { FaInstagram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { CiPhone } from 'react-icons/ci';
import { PiTelegramLogo } from 'react-icons/pi';
import './topbar.scss';

const Topbar = () => {
  return (
    <nav className="topbar">
      <div className="topbar__inner">
        <div className="topbar__logo">LOGO</div>
        <div className="topbar__info">
          <ul className="topbar__links">
            <li>
              <a href="#">О школе</a>
            </li>
            <li>
              <a href="#">Курсы</a>
            </li>
            <li>
              <a href="#">Результат</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
            <li>
              <a href="#">Лицензия</a>
            </li>
            <li>
              <a href="#contactSec">Контакты</a>
            </li>
          </ul>
          <div className="topbar__contacts">
            <a
              href="https://instagram.com/abramovich_school?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              className="topbar__socials"
            >
              <FaInstagram className="instagram" />
            </a>
            <a
              href="https://vk.com/abramovich_manicure"
              target="_blank"
              className="topbar__socials"
            >
              <SlSocialVkontakte className="vkontakte" />
            </a>
            <a className="topbar__socials" href="tel:+79184135141">
              <CiPhone className="mobile" />
            </a>
            <a
              className="topbar__socials"
              href="https://t.me/ta_samaya_abramovich"
              target="_blank"
            >
              <PiTelegramLogo className="telegram" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
