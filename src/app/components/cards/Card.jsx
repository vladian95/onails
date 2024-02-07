import Link from 'next/link';
import Image from 'next/image';
import { MdCurrencyRuble } from 'react-icons/md';
import '../cards/cards.scss';

const Card = (props) => {
  const { title, subtitle, img, price } = props;

  return (
    <div className="card">
      <Image src={img} width={380} height={240} className="card__img" />
      <h2 className="card__title">{title}</h2>
      <p className="card__subtitle">{subtitle}</p>
      <div className="card__price">
        {price}
        <MdCurrencyRuble />
      </div>
      <Link href="/courseAcvarel" className="card__link">
        Узнать больше
      </Link>
    </div>
  );
};

export default Card;
