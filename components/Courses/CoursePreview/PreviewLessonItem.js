import classes from "./PreviewLessonItem.module.css";
import Image from "next/image";


const PreviewLessonItem = (props) => {
    const lesson = props.lesson;

    return <div onClick={props.onChapterItemClicked.bind(this, lesson)}
                className={classes.chapterVideosContent} key={lesson.video_id}>
        <div className={classes.chapterVideoDetailsContainer}>
            <div className={classes.chapterTimingContainer}>
                <Image src={"/time-black.png"} width={18} height={18} alt={""}></Image>
                <h6 className={classes.chapterTimingMonths}>{lesson.duration} دقيقة</h6>
            </div>
        </div>
        <div className={classes.chapterVideoTitleContainer}>
            <h5 className={classes.chapterVideoTitle}>{lesson.title}</h5>
            <Image className={classes.videoIcon}
                   src={"/circle-play.png"} width={30} height={30}
                   alt={""}></Image>
        </div>
    </div>
};

export default PreviewLessonItem;