
import classes from "./FinalCourseItem.module.css";
import {useRouter} from "next/router";
import Image from "next/image";

const FinalCourseItem = (props) => {
    const router = useRouter();
    function handleClick() {
        router.push('/courses/ai/1/');
    }

    return <div>
      <div className={classes.card} >
          <div className={classes.imgBox}>
              <Image width={350} height={220} src="/ds_course.jpg" alt=""/>
          </div>
          <div className={classes.cardContent}>
              <span className={classes.tag}>مستوى متوسط</span>
              <h2 className={classes.cardTitle}>الخوارزميات وهيكلة البيانات</h2>
              <small className={classes.subTitle}>تعلم جميع الخوارزميات المهمة التي لا غنى لأي مهندس برمجيات عنها بساتخدام لغة الجافا</small>
              <div className={classes.rating}>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
              </div>
              <div className={classes.priceBox}>
                  <p className={classes.priceBox}>423</p>
                  <p className={classes.oldPrice}>533</p>
              </div>
              <button onClick={handleClick} className={classes.btn}>أتقن هذه الدورة</button>
          </div>
      </div>
  </div>
};

export default FinalCourseItem;