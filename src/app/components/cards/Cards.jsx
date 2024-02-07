import '../cards/cards.scss';
import courses from '@/app/data';
import Card from './Card';

const Cards = () => {
  return (
    <section className="cards">
      <h2 className="cards__title" id="cards">
        Курсы
      </h2>
      <div className="cards__inner">
        {courses.map((course) => {
          return <Card {...course} key={course.id} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
