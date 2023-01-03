import classes from "./CourseDetailsHeader.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import VideoModal from "../../tools/VideoModal";


const CourseDetailsHeader = (props) => {
    const course = props.course;

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("مقدمة الدورة");

    const isLoggedIn = props.isLoggedIn;
    const courseIsAvailable = props.courseIsAvailable;

    return <div className={classes.header}>
        <div className={classes.courseDetailsContainer}>
            <br/>
            <h4 className={classes.courseTitle}>{course.title}</h4>
            <p className={classes.courseDescription}>
                {course.description}
            </p>

            <div className={classes.courseInstructorContainer}>
                <Image className={classes.instructorImage} src={course.instructorImage} width={100} height={100}
                       alt={"img"}></Image>
                <h6 className={classes.instructorName}>شرح/ {course.instructor}</h6>
            </div>
            <div className={classes.space}>

            </div>


            <div className={classes.courseActions}>
                <div className={classes.coursePreviewVideo}>
                    <div onClick={() => setShowModal(true)} className={classes.c1}>
                        <div className={classes.c2}>
                            <Image src={"/icons8-circled-play-100.png"} width={35} height={35} alt={"2"}></Image>
                        </div>
                    </div>
                    <h6 className={classes.coursePreviewTitle}>مقدمة الدورة</h6>
                </div>

                <div className={classes.courseTiming}>
                    <div className={classes.courseTimingContainer}>
                        <Image src={"/calender.png"} width={20} height={20} alt={""}></Image>
                        <span
                            className={classes.courseTimingMonths}>مدة الدورة {course.numOfMonthsToComplete} أشهر</span>
                    </div>
                    <span>/</span>
                    <div className={classes.courseTimingContainer}>
                        <Image src={"/video.png"} width={20} height={20} alt={""}></Image>
                        <span className={classes.courseTimingMonths}>أكثر من {course.numOfVideos} فيديو </span>
                    </div>
                    <span>/</span>
                    <div className={classes.courseTimingContainer}>
                        <Image src={"/time.png"} width={20} height={20} alt={""}></Image>
                        <span className={classes.courseTimingMonths}>أكثر من {course.numOfHours} ساعة </span>
                    </div>
                </div>

                <div className={classes.buyCourseBtnContainer}>
                    {(!isLoggedIn || !courseIsAvailable) && <Link
                        href={course.paymentLink}
                        className={classes.buyCourseBtn}>اشترك الأن</Link>}
                    {(isLoggedIn && courseIsAvailable) &&
                        <Link href="/courses/ai/0" className={classes.buyCourseBtn}>شاهد الدورة</Link>}
                </div>
            </div>
        </div>
        <VideoModal
            onClose={() => {
                setShowModal(false);
                setModalTitle("");
            }}
            title={modalTitle}
            show={showModal}>
            <div className={classes.courseVideoPlayerContainer}>
                <div className={classes.info}>
                    <iframe className={classes.videoPlayer}
                            src={"https://drive.google.com/file/d/" + course.introVideoId + "/preview"}
                            allowFullScreen={true}
                            allow="autoplay"></iframe>
                </div>
            </div>
        </VideoModal>

    </div>
};

export default CourseDetailsHeader;