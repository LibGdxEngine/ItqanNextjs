import classes from "./ChapterItem.module.css";
import Image from "next/image";
import {useEffect, useState} from "react";
import LessonItem from "./LessonItem";
import {useRouter} from "next/router";
import {getSession, useSession} from "next-auth/react";
import VideoModal from "../../tools/VideoModal";


const ChapterItem = (props) => {

    const course = props.course;
    const childHeight = `${course.lessons.length * 100 / 16}rem`;
    const [itemIsOpened, setItemIsOpened] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("مقدمة الدورة");
    const [previewVideoId, setPreviewVideoId] = useState();

    function handleClick() {
        setItemIsOpened(!itemIsOpened);
    }

    function handleLessonClicked(lesson, event) {
        setPreviewVideoId(lesson.video_id);
        setShowModal(true);
        setModalTitle(lesson.title);
    }

    return <div className={classes.chapterItem}>
        <div className={classes.chapterItemContent}>
            <div className={classes.chapterDetailsContainer}>
                <div className={classes.chapterTimingContainer}>
                    <Image src={"/time-black.png"} width={20} height={20} alt={""}></Image>
                    <span className={classes.chapterTimingMonths}>{course.duration} دقيقة</span>
                </div>
                <span></span>
                <div className={classes.chapterTimingContainer}>
                    <Image src={"/video-black.png"} width={20} height={20} alt={"s"}></Image>
                    <span className={classes.chapterTimingMonths}>{course.lessons.length} فيديو</span>
                </div>
            </div>

            <div onClick={handleClick} className={classes.chapterTitleContainer}>
                <h4 className={classes.chapterTitle}>{course.title}</h4>
                <Image className={classes.expandArrow}
                       src={"/expand_arrow.png"} width={15} height={15}
                       alt={""}></Image>
            </div>
        </div>
        <div className={classes.collapse} style={{
            maxHeight: itemIsOpened ? childHeight : 0
        }}>

            {course.lessons.map(lesson => {
                return <LessonItem onLessonClicked={handleLessonClicked} key={lesson.title} lesson={lesson}/>
            })}

        </div>

        <div className={classes.chapterUnderline}></div>
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
                            src={"https://drive.google.com/file/d/" + previewVideoId + "/preview"}
                            allowFullScreen={true}
                            allow="autoplay"></iframe>
                </div>
            </div>
        </VideoModal>
    </div>
};

export default ChapterItem;