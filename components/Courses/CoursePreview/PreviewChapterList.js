import classes from "./PreviewChaptersList.module.css";
import PreviewChapterItem from "./PreviewChapterItem";


const PreviewChaptersList = (props) => {
    const courses = props.courses;
    return <div className={classes.chaptersList}>
        {courses.map((course, index) => {
            return <PreviewChapterItem onChapterItemClicked={props.onChapterItemClicked} key={course.id} course={course}/>
        })}
    </div>
};

export default PreviewChaptersList;