import classes from '../../styles/SingleCoursePreview.module.css';
import {getAiCourses} from "../../ai_courses_data";
import PreviewChapterList from "../../components/Courses/CoursePreview/PreviewChapterList";
import {useState} from "react";
import {getDsCourses} from "../../ds_courses_data";


const SingleCourse = (props) => {
    const courses = props.courses['sections'];
    let videosList = [];
    for (let i = 0; i < courses.length; i++) {
        videosList = videosList.concat(courses[i]);
    }

    const [selectedVideo, setSelectedVideo] = useState(videosList[0].lessons[0])


    function handleVideoItemClick(video) {
        console.log(video)
        setSelectedVideo(video);
    }

    return <div className={classes.coursePreviewContainer}>
        <div className={classes.courseVideoPlayerContainer}>
            <div className={classes.info}>
                <iframe className={classes.videoPlayer}
                        src={"https://drive.google.com/file/d/" + selectedVideo['video_id'] + "/preview"}

                        allowFullScreen={true}
                        allow="autoplay"></iframe>
                <h1>{selectedVideo.title}</h1>
            </div>
        </div>

        <div className={classes.videosListContainer}>
            <div className={classes.contentTable}>
                <PreviewChapterList onChapterItemClicked={handleVideoItemClick} courses={courses}/>
            </div>
        </div>

    </div>
};


export async function getServerSideProps(context) {
    const coursesId = context.params.slug[0];

    // const course = getCourseId(coursesId)
    let courses = null;
    if (coursesId === "ai") {
        courses = await getAiCourses();
    } else if (coursesId === "ds") {
        courses = await getDsCourses();
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

export default SingleCourse;