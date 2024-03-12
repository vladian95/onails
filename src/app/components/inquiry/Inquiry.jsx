import Item from './Item';
import { inquiryItems } from '@/app/data';
import '../inquiry/inquiry.scss';

const Inquiry = () => {
  return (
    <div className="inquiry" id="inquiry">
      <h2 className="inquiry__title">Расписание курсов весна 2024</h2>
      <div className="inquiry__inner">
        {inquiryItems.map((inquiryItem) => {
          return <Item {...inquiryItem} key={inquiryItem.id} />;
        })}
      </div>
    </div>
  );
};

export default Inquiry;
