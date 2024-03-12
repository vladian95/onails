import '../inquiry/inquiry.scss';

const Item = (props) => {
  const {
    title,
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
  } = props;

  return (
    <div className="Item">
      <h4 className="item__title">{title}</h4>
      <ul className="item__inner">
        <li className="item__list">{description1}</li>
        <li className="item__list">{description2}</li>
        <li className="item__list">{description3}</li>
        <li className="item__list">{description4}</li>
        <li className="item__list">{description5}</li>
        <li className="item__list">{description6}</li>
      </ul>
    </div>
  );
};

export default Item;
