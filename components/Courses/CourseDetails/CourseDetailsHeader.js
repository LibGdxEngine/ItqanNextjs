import classes from "./CourseDetailsHeader.module.css";
import Image from "next/image";
import {getSession, useSession} from "next-auth/react";
import Link from "next/link";
import {useEffect, useState} from "react";


const CourseDetailsHeader = (props) => {
    const {data: session, status} = useSession();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        getSession().then(session => {
            if (session) {
                setIsLoggedIn(true);
                // router.replace("/");
            } else {
                setIsLoggedIn(false);
            }
        })
    }, []);

    return <div className={classes.header}>
        <div className={classes.courseDetailsContainer}>
            <br/>
            <h1 className={classes.courseTitle}>الذكاء الصناعي وعلوم البيانات</h1>
            <p className={classes.courseDescription}>هذه الدورة مهمة لكل طالب مهتم بعلوم البيانات والذكاء الاصطناعي
                بشكل عام</p>

            <div className={classes.courseInstructorContainer}>
                <Image className={classes.instructorImage} src={"/me.jpeg"} width={100} height={100}
                       alt={"img"}></Image>
                <h6 className={classes.instructorName}>أحمد فتحي</h6>
            </div>
            <div className={classes.space}>

            </div>
            <h4 className={classes.coursePrice}>400 EGP</h4>

            <div className={classes.courseActions}>
                <div className={classes.coursePreviewVideo}>
                    <div className={classes.c1}>
                        <div className={classes.c2}>
                            <Image src={"/icons8-circled-play-100.png"} width={35} height={35} alt={"2"}></Image>
                        </div>
                    </div>
                    <h6 className={classes.coursePreviewTitle}>مقدمة الدورة</h6>
                </div>

                <div className={classes.courseTiming}>
                    <div className={classes.courseTimingContainer}>
                        <Image src={"/calender.png"} width={20} height={20} alt={""}></Image>
                        <span className={classes.courseTimingMonths}>مدة الدورة شهران</span>
                    </div>
                    <span>/</span>
                    <div className={classes.courseTimingContainer}>
                        <Image src={"/video.png"} width={20} height={20} alt={""}></Image>
                        <span className={classes.courseTimingMonths}>أكثر من 24 فيديو </span>
                    </div>
                    <span>/</span>
                    <div className={classes.courseTimingContainer}>
                        <Image src={"/time.png"} width={20} height={20} alt={""}></Image>
                        <span className={classes.courseTimingMonths}>أكثر من 35 ساعة </span>
                    </div>
                </div>

                <div className={classes.buyCourseBtnContainer}>
                    {!isLoggedIn && <Link href="/payment" className={classes.buyCourseBtn}>اشترك الأن</Link>}
                    {isLoggedIn && <Link href="/courses/ai/1" className={classes.buyCourseBtn}>شاهد الدورة</Link>}
                </div>
            </div>
        </div>
    </div>
};

export default CourseDetailsHeader;