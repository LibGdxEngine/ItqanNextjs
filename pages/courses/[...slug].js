import classes from '../../styles/SingleCoursePreview.module.css';
import {getAiCourses} from "../../ai_courses_data";
import PreviewChapterList from "../../components/Courses/CoursePreview/PreviewChapterList";
import {useCallback, useEffect, useState} from "react";
import {getDsCourses} from "../../ds_courses_data";
import {getSession, useSession} from "next-auth/react";
import {getUserByEmail} from "../../helpers/db";
import {useRouter} from "next/router";
import Modal from "../../components/tools/Modal";


const SingleCourse = (props) => {
    const router = useRouter();
    const courseId = props.coursesId;

    const {data: session, status} = useSession();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [courseIsAvailable, setCourseIsAvailable] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("للأسف ليس لديك الصلاحية للوصول لهذه الدورة");


    const checkIfCourseIsAvailable = useCallback(async () => {
        const loggedInUser = await getUserByEmail(session.user.email);

        const firstKey = Object.keys(loggedInUser)[0];
        if (loggedInUser[firstKey].myCourses.some(courseId => courseId === router.query.slug[0])) {
            setCourseIsAvailable(true);
        }

    });

    useEffect(() => {
        getSession().then(session => {
            if (session) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }).then(async () => {
            if (isLoggedIn) {
                await checkIfCourseIsAvailable().catch(console.error);
            }
        }).then(()=>{
            setIsLoading(false);
        })
    }, [router, checkIfCourseIsAvailable, isLoggedIn, isLoading]);


    const courses = props.courses['sections'];
    let videoNumber = props.videoNumber;

    let videosList = [];
    for (let i = 0; i < courses.length; i++) {
        videosList = videosList.concat(courses[i]['lessons']);
    }

    if (!videoNumber || videoNumber >= videosList.length || videoNumber < 0) {
        videoNumber = 0
    }

    const [selectedVideo, setSelectedVideo] = useState(videosList[videoNumber])


    function handleVideoItemClick(video) {
        setSelectedVideo(video);
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isLoggedIn || !courseIsAvailable) {
        return <div>
            <Modal
                onClose={() => {
                    setShowModal(false);
                    setModalTitle("");
                    router.replace(`/courses/${courseId}`);
                }}
                title={modalTitle}
                show={showModal}>

                <div style={{direction: "rtl"}}>
                    يمكنك الالتحاق بهذه الدورة بعد دفع المصاريف
                    أو بعد تفعيل حسابك خلال 24 ساعة إذا كنت قد دفعت بالفعل
                </div>

            </Modal>
        </div>
    }

    return <div>
        <div className={classes.coursePreviewContainer}>
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

    </div>
};


export async function getServerSideProps(context) {
    const coursesId = context.params.slug[0];
    const videoNumber = context.params.slug[1];

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
            coursesId: coursesId,
            courses: courses,
            videoNumber: videoNumber
        }
    }
}

export default SingleCourse;