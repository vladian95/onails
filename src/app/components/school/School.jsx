// import Image from 'next/image';
// import lala from '../../assets/schoolimg1.jpg';
import '@/app/components/school/school.scss';

const School = () => {
  return (
    <section className="school" id="school">
      <div className="school__inner">
        <div className="school__left">
          <div className="school__img">
            {/* <Image src={lala} className="school__image" /> */}
          </div>
        </div>
        <div className="school__right">
          <h2 className="school__title">О нашей школе</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            dignissimos rem accusantium ipsum. Architecto omnis ratione ut
            ducimus sit quaerat possimus, quod quia praesentium repudiandae
            aperiam saepe vitae impedit? Suscipit?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            dignissimos rem accusantium ipsum. Architecto omnis ratione ut
            ducimus sit quaerat possimus, quod quia praesentium repudiandae
            aperiam saepe vitae impedit? Suscipit?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            dignissimos rem accusantium ipsum. Architecto omnis ratione ut
            ducimus sit quaerat possimus, quod quia praesentium repudiandae
            aperiam saepe vitae impedit? Suscipit?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            dignissimos rem accusantium ipsum. Architecto omnis ratione ut
            ducimus sit quaerat possimus, quod quia praesentium repudiandae
            aperiam saepe vitae impedit? Suscipit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default School;
