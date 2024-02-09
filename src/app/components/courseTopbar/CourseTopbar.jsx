import { FaInstagram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { CiPhone } from 'react-icons/ci';
import { PiTelegramLogo } from 'react-icons/pi';
import '../courseTopbar/courseTopbar.scss';

const CourseTopbar = () => {
  return (
    <div className="courseTopbar">
      <div className="courseTopbar__inner">
        <div className="courseTopbar__logo">logo</div>
        <div className="courseTopbar__link">
          <span>Связаться:</span>
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
  );
};

export default CourseTopbar;
