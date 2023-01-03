import classes from './CourseDetails.module.css';
import Image from "next/image";
import CourseDetailsHeader from "./CourseDetailsHeader";
import ChaptersList from "./ChaptersList";
import WhyChooseThisCourse from "./WhyChooseThisCourse";
import {useCallback, useEffect, useState} from "react";
import {getUserByEmail} from "../../../helpers/db";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/router";

const CourseDetails = (props) => {
    const courses = props.courses;

    const router = useRouter();
    const {data: session, status} = useSession();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [courseIsAvailable, setCourseIsAvailable] = useState(false);


    const checkIfCourseIsAvailable = useCallback(async () => {
        const loggedInUser = await getUserByEmail(session.user.email);
        const firstKey = Object.keys(loggedInUser)[0];
        if (loggedInUser[firstKey].myCourses.some(courseId => courseId === router.query.courseTopicId)) {
            setCourseIsAvailable(true);
        }
    }, [router, session]);


    useEffect(() => {
        getSession().then(session => {
            if (session) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }).then(() => {
            if (isLoggedIn) {
                if (courses.coursePrice === "free") {
                    setCourseIsAvailable(true);
                } else {
                    checkIfCourseIsAvailable().catch(console.error);
                }
            }
        })
    }, [isLoggedIn, checkIfCourseIsAvailable, courses]);


    return <div className={classes.container}>
        <CourseDetailsHeader course={courses} isLoggedIn={isLoggedIn} courseIsAvailable={courseIsAvailable}/>
        <div className={classes.videosListContainer}>
            <div className={classes.contentTable}>
                <p className={classes.contentParagraph}>محتويات الدورة</p>
                <h1 className={classes.contentTitle}>ماذا سوف تتعلم؟</h1>
                <ChaptersList courses={courses} courseIsAvailable={courseIsAvailable} />
            </div>
        </div>
        <div className={classes.bottomSpace}>

        </div>
        <WhyChooseThisCourse course={courses}/>

        <div className={classes.bottomSpace}>

        </div>
    </div>
};

export default CourseDetails;