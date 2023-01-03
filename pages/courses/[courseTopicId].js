import SearchBar from "../../components/Courses/SearchBar";
import FinalCourseItem from "../../components/Courses/MainCourseItems/FinalCourseItem";
import {getAiCourses} from "../../ai_courses_data";
import CourseDetails from "../../components/Courses/CourseDetails/CourseDetails";
import {getDsCourses} from "../../ds_courses_data";

const SingleTopicCourses = (props) => {
    const courses = props.courses;

    return <div>
        <CourseDetails courses={courses}/>
    </div>
};

export async function getServerSideProps(context) {
    const courseTopicId = context.params.courseTopicId;
    // const course = getCourseId(coursesId)
    let courses = null;
    if (courseTopicId === "ai") {
        courses = getAiCourses();
    } else if (courseTopicId === "ds") {
        courses = getDsCourses();
    }
    if (!courses || courses.length === 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            courses: courses,
        }
    }
}

export default SingleTopicCourses;