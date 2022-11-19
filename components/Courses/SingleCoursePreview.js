import {Fragment} from "react";
import Head from "next/head";
import CourseSummary from "../course-detail/course-summary";
import CourseLogistics from "../course-detail/course-logistics";
import CourseContent from "../course-detail/course-content";
import VideosList from "../course-detail/VideosList";


const SingleCoursePreview = (props) => {
    let course = {
        title: "دورة الذكاء الصناعي وعلوم البيانات",
        instructor:'أحمد فتحي',
        time:"1h 20m",
        image:"./ds_course.jpg",
        imageAlt:"",
        description:"هذه الدورة الأولى في سلسلة دورات الذكاء الصناعي وعلوم البيانات وهي دورة قوية ومهمة لكل طالب ذكاء صناعي"
    }
    return <Fragment>
        <Head>
            <title>Itqan - إتقان</title>
            <meta
                name="Itqan - إتقان"
                content="إتقان العلوم الحديثة مثل البرمجة والذكاء الصناعي وعلوم البيانات وتعلم الألة بصورة سهلة وبسيطة وباللغة العربية"
            />
        </Head>
        <CourseSummary title={course.title}/>
        <CourseLogistics instructor={course.instructor} time={course.time} img={course.image} alt={course.title}/>
        <CourseContent>
            <p>{course.description}</p>
        </CourseContent>
        <VideosList />
    </Fragment>
};

export default SingleCoursePreview;