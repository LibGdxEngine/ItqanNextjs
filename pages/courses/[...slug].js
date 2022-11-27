import SingleCoursePreview from "../../components/Courses/SingleCoursePreview";

import {useRouter} from "next/router";
import {getCourseId} from "../../ai_courses_data";

const SingleCourse = (props) => {
    const course = props.course;
    return <SingleCoursePreview course={course}/>
};


export async function getServerSideProps(context) {
    const coursesId = context.params.slug[1];
    const course = getCourseId(coursesId)

    if (!course || course.length === 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            course: course,
        }
    }
}

export default SingleCourse;