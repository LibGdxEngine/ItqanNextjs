import classes from './CourseItem.module.css';

const CourseItem = (props) => {
    return <div className="">
        <div className={classes.coursesContainer}>
            <div className={classes.course}>
                <div className={classes.coursePreview}>
                    <h6>الدورة</h6>
                    <h2>الذكاء الصناعي وتحليل البيانات </h2>
                    <a href="#">عرض جميع الفيديوهات<i ></i></a>
                </div>
                <div className={classes.courseInfo}>
                    <div className={classes.progressContainer}>
                        <div className={classes.progress}></div>
                        <span className={classes.progressText}>
					6/9 اختبارات
				</span>
                    </div>
                    <h6>القسم الرابع</h6>
                    <h2>التحليل المنطقي للبيانات</h2>
                    <button className={classes.btn}>متابعة</button>
                </div>
            </div>
        </div>
    </div>
};

export default CourseItem;