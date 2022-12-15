import classes from "./PreviewChapterItem.module.css";
import Image from "next/image";
import {useState} from "react";
import PreviewLessonItem from "./PreviewLessonItem";

const PreviewChapterItem = (props) => {

    const course = props.course;
    const childHeight = `${course.lessons.length * 100 / 16}rem`;
    const [itemIsOpened, setItemIsOpened] = useState(false);

    function handleClick() {
        setItemIsOpened(!itemIsOpened);
    }

    return <div className={classes.chapterItem}>
        <div className={classes.chapterItemContent}>

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
                return <PreviewLessonItem onChapterItemClicked={props.onChapterItemClicked} key={lesson.title} lesson={lesson}/>
            })}

        </div>

        <div className={classes.chapterUnderline}></div>
    </div>
};

export default PreviewChapterItem;