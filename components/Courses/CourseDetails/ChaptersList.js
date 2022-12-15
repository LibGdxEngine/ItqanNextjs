import classes from "./ChaptersList.module.css";
import Image from "next/image";
import {useCallback, useMemo, useState} from "react";
import ChapterItem from "./ChapterItem";

const ChaptersList = (props) => {
    const courses = props.courses['sections'];

    return <div className={classes.chaptersList}>
        {courses.map((course, index) => {
            return <ChapterItem key={course.id} course={course}/>
        })}
    </div>
};

export default ChaptersList;