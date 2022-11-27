import {Fragment, useEffect} from "react";
import Head from "next/head";
import CourseSummary from "../course-detail/course-summary";
import CourseLogistics from "../course-detail/course-logistics";
import CourseContent from "../course-detail/course-content";
import VideosList from "../course-detail/VideosList";
import {getCourseId} from "../../ai_courses_data";


const SingleCoursePreview = (props) => {
    const course = props.course;
    return <Fragment>
        <Head>
            <title>Itqan - إتقان</title>
            <meta
                name="Itqan - إتقان"
                content="إتقان العلوم الحديثة مثل البرمجة والذكاء الصناعي وعلوم البيانات وتعلم الألة بصورة سهلة وبسيطة وباللغة العربية"
            />
        </Head>
        <CourseSummary title={course.title}/>
        <CourseLogistics instructor={course.instructor} time={course.time} img={course.image} z213alt={course.title}/>
        <CourseContent>
            <p>{course.description}</p>
        </CourseContent>
        <VideosList course={course}/>
    </Fragment>
};


export default SingleCoursePreview;