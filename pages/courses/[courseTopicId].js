import SearchBar from "../../components/Courses/SearchBar";
import FinalCourseItem from "../../components/Courses/MainCourseItems/FinalCourseItem";
import {getAiCourses} from "../../ai_courses_data";

const SingleTopicCourses = (props) => {
    const courses = props.courses;

    return <div style={{display: 'flex', margin: "0", flexDirection: "column", minWidth: "100%"}}>
        <SearchBar/>
        <div style={{
            display: "flex", flexDirection: "row", flexWrap: "wrap",
            justifyContent: "center"
        }}>
            {courses.map(course => <FinalCourseItem key={course.id} course={course}/>)}
        </div>
    </div>
};

export async function getStaticPaths() {
    const courses = await getAiCourses();
    const paths = courses.map(course => ({params: {topic: "ai", courseTopicId: course.title}}));
    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const courses = await getAiCourses();
    return {
        props: {
            courses: courses,
        }, // will be passed to the page component as props
    }
}

export default SingleTopicCourses;