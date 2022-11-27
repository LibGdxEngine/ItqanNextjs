import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './course-logistics.module.css';
import Image from "next/image";

function CourseLogistics(props) {
  const { instructor, time, img, alt } = props;

  // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });
  // const addressText = address.replace(', ', '\n');
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={"/ds_course.jpg"} alt={"image"} width={300} height={300}/>
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<Image src="/instructor_icon.png" alt="image" width={40} height={40} /> }>
          {instructor}
        </LogisticsItem>
        <LogisticsItem icon={<Image src="/time_icon.png" alt="image2" width={40} height={40}/>}>
          <address>{time}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default CourseLogistics;
