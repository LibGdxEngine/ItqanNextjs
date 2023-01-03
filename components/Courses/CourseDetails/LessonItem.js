import classes from "./LessonItem.module.css";
import Image from "next/image";
import {useRouter} from "next/router";

const LessonItem = (props) => {
    const lesson = props.lesson;

    return <div onClick={lesson.free ? props.onLessonClicked.bind(this, lesson) : null} className={classes.chapterVideosContent} key={lesson.video_id}>
        <div className={classes.chapterVideoDetailsContainer}>
            <div className={classes.chapterTimingContainer}>
                <Image className={classes.chapterTimingIcon} src={"/time-black.png"} width={20} height={20}
                       alt={""}></Image>
                <h6 className={classes.chapterTimingMonths}>{lesson.duration} دقيقة</h6>
            </div>
        </div>
        <div className={classes.chapterVideoTitleContainer}>
            <h5 className={classes.chapterVideoTitle}>{lesson.title}</h5>
            {lesson.free ?
                <Image className={classes.videoIcon}
                                  src={"/circle-play.png"} width={30} height={30}
                                  alt={""}></Image>
                :
                <Image className={classes.videoIcon}
                       src={"/lock.png"} width={30} height={30}
                       alt={""}></Image>}

        </div>
    </div>
};

export default LessonItem;