import classes from "./LessonItem.module.css";
import Image from "next/image";
import {useRouter} from "next/router";

const LessonItem = (props) => {
    const lesson = props.lesson;

    return <div onClick={props.onLessonClicked} className={classes.chapterVideosContent} key={lesson.video_id}>
        <div className={classes.chapterVideoDetailsContainer}>
            <div className={classes.chapterTimingContainer}>
                <Image src={"/time-black.png"} width={20} height={20} alt={""}></Image>
                <span className={classes.chapterTimingMonths}>5:00 دقيقة</span>
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

export default LessonItem;