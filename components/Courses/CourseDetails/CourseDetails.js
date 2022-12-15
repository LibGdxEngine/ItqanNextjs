import classes from './CourseDetails.module.css';
import Image from "next/image";
import CourseDetailsHeader from "./CourseDetailsHeader";
import ChaptersList from "./ChaptersList";

const CourseDetails = (props) => {
    const courses = props.courses;

    return <div className={classes.container}>
        <CourseDetailsHeader course={courses}/>
        <div className={classes.videosListContainer}>
            <div className={classes.contentTable}>
                <p className={classes.contentParagraph}>محتويات الدورة</p>
                <h1 className={classes.contentTitle}>ماذا سوف تتعلم؟</h1>
                <ChaptersList courses={courses}/>
            </div>
        </div>
        <div className={classes.bottomSpace}>

        </div>
    </div>
};

export default CourseDetails;