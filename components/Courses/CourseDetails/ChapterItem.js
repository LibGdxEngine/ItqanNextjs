import classes from "./ChapterItem.module.css";
import Image from "next/image";
import {useState} from "react";
import LessonItem from "./LessonItem";
import {useRouter} from "next/router";

const ChapterItem = (props) => {

    const course = props.course;
    const childHeight = `${course.lessons.length * 100 / 16}rem`;
    const [itemIsOpened, setItemIsOpened] = useState(false);

    function handleClick() {
        setItemIsOpened(!itemIsOpened);
    }
    const router = useRouter();
    function handleLessonClicked() {
        router.push(`/courses/ai/${course.id}`)
    }

    return <div className={classes.chapterItem}>
        <div className={classes.chapterItemContent}>
            <div className={classes.chapterDetailsContainer}>
                <div className={classes.chapterTimingContainer}>
                    <Image src={"/time-black.png"} width={20} height={20} alt={""}></Image>
                    <span className={classes.chapterTimingMonths}>22:00 دقيقة</span>
                </div>
                <span>/</span>
                <div className={classes.chapterTimingContainer}>
                    <Image src={"/video-black.png"} width={20} height={20} alt={"s"}></Image>
                    <span className={classes.chapterTimingMonths}>12 فيديو</span>
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
    </div>
};

export default ChapterItem;