import classes from '../../styles/SingleCoursePreview.module.css';
import {getAiCourses} from "../../ai_courses_data";
import PreviewChapterList from "../../components/Courses/CoursePreview/PreviewChapterList";
import {useCallback, useEffect, useMemo, useReducer, useState} from "react";
import {getDsCourses} from "../../ds_courses_data";
import {getSession, useSession} from "next-auth/react";
import {getUserByEmail} from "../../helpers/db";
import {useRouter} from "next/router";
import Modal from "../../components/tools/Modal";

function init(initialState) {
    return {pageState: initialState};
}

const initialState = {pageState: 'LoadingYourState'};

function reducer(state, action) {
    switch (action.type) {
        case 'showEveryThing':
            return {pageState: 'showEveryThing'};
        case 'youDontHaveAccess':
            return {pageState: 'youDontHaveAccess'};
        case 'LoadingYourState':
            return {pageState: 'LoadingYourState'};
        default:
            throw new Error();
    }
}

const SingleCourse = (props) => {
    const courses = props.courses['sections'];

    const coursePrice = useMemo(() => props.courses.coursePrice, [props.courses.coursePrice]);
    const router = useRouter();
    const courseId = props.coursesId;

    const {data: session, status} = useSession();

    const [state, dispatch] = useReducer(reducer, initialState, init);


    const [showModal, setShowModal] = useState(true);
    const [modalTitle, setModalTitle] = useState("للأسف ليس لديك الصلاحية للوصول لهذه الدورة");


    const checkIfCourseIsAvailable = useCallback(async () => {

        const loggedInUser = await getUserByEmail(session.user.email);

        const firstKey = Object.keys(loggedInUser)[0];
        if (loggedInUser[firstKey].myCourses.some(courseId => courseId === router.query.slug[0])) {
            dispatch({type: "showEveryThing"});
            return;
        }
        dispatch({type: "youDontHaveAccess"});
    }, [session, router.query.slug]);

    useEffect(() => {
        if (coursePrice === "0") {
            dispatch({type: "showEveryThing"});
        } else {
            getSession().then(async (session) => {
                if (session) {
                    await checkIfCourseIsAvailable().catch(console.error);
                } else {
                    dispatch({type: "youDontHaveAccess"});
                }
            })
        }

    }, [checkIfCourseIsAvailable, coursePrice]);


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

    if (state.pageState === 'LoadingYourState') {
        return <div>Loading...</div>
    }

    if (state.pageState === 'youDontHaveAccess') {
        return <Modal
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