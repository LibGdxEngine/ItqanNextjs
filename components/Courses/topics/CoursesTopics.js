import classes from "./CoursesTopics.module.css";
import Link from "next/link";
import Image from "next/image";

const CoursesTopics = (props) => {
  return <div>
      <section className={classes.heroSection}>
          <div className={classes.heroInfo}>
              <h1> دورات قوية - مبسطة - عملية</h1>
              <p> كل ما تحتاجه في مكان واحد</p>
          </div>
          <Image src="https://svgshare.com/i/Kbj.svg" width={250} height={250}/>
      </section>
      <section className={classes.courseCardContainer}>
          <Link href="/courses/ai" className={classes.aicourseCard}>
              <h2 className={classes.courseCardHeading}>الذكاء الصناعي</h2>
              <p className={classes.courseCardDesc}>يمكنك أن تصبح مهندس ذكاء صناعي أو عالم بيانات من خلال دوراتنا </p>
          </Link>

          <div href="#" className={classes.courseCard}>
              <h2 className={classes.courseCardHeading}>تطوير المواقع الالكترونية</h2>
              <p className={classes.courseCardDesc}>تعلم لغات البرمجة المختلفة وطريقة استخدامها لبناء موقعك </p>
          </div>

          <div href="#" className={classes.courseCard + " " + classes.courseCardWeb}>
              <h2 className={classes.courseCardHeading}>تطوير تطبيقات الهواتف</h2>
              <p  className={classes.courseCardDesc}>يمكنك أن تجد هنا كل ما تريده من معلومات لتبدأ تطوير التطبيقات للهواتف الذكية Android/IOS</p>
          </div>
          <div href="#" className={classes.courseCard + " "  + classes.courseCardWeb}>
              <h2 className={classes.courseCardHeading}>تصميم الواجهات الأمامية للمواقع</h2>
              <p className={classes.courseCardDesc}>يمكنك أن تبدأ رحلتلك لتصميم وتطوير الواجهات الرسومية للمواقع</p>
          </div>

          <div href="#" className={classes.courseCard + " " + classes.courseCardDigi}>
              <h2 className={classes.courseCardHeading}>الخوارزميات وهيكلة البيانات</h2>
              <p className={classes.courseCardDesc}>تعلم جميع الخوارزميات المهمة لكل مهندسي البرمجيات</p>

          </div>

          <div href="#" className={classes.courseCard + " " + classes.courseCardDaona}>
              <h2 className={classes.courseCardHeading}>تصميم وتطوير الألعاب</h2>
              <p className={classes.courseCardDesc}>احترف مجال صناعة الألعاب ثنائية/ثلاثية الأبعاد مع تطبيق عملي لكل ما تتعلمه</p>
          </div>
      </section>
  </div>
};

export default CoursesTopics;