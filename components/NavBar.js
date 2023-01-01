import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Image from "next/image";
import {getSession} from "next-auth/react";
import classes from '../styles/navbar.module.css';
import LessonItem from "./Courses/CourseDetails/LessonItem";

const NavBar = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [smallMenuClicked, setSmallMenuClicked] = useState(false);
    const childHeight = `${5 * 100 / 16}rem`;
    const line1Class = !smallMenuClicked ? classes.line1 : classes.line1Clicked;
    const line2Class = !smallMenuClicked ? classes.line2 : classes.line2Clicked;
    const line3Class = !smallMenuClicked ? classes.line3 : classes.line3Clicked;

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


    function handleOnClick() {
        setSmallMenuClicked(!smallMenuClicked);
    }

    return <div className={classes.navbarContainer}>
        <nav className={classes.navbar}>
            <Link href="/" className={classes.navbarLogo}>
                <Image className={classes.navbarLogoImage} src={"/logo.svg"} width={75} height={75} alt={""}></Image>
            </Link>

            <div className={classes.navbarItemsContainer}>

                <div className={classes.navbarItems}>
                    <Link href="/" className={classes.navbarItem}>الرئيسية</Link>
                    <Link href="/courses" className={classes.navbarItem}>تعلم معنا</Link>
                    {/*<Link href="/private_courses" className={classes.navbarItem}>الدورات الخصوصية</Link>*/}
                    <Link href="/about" className={classes.navbarItem}>من نحن</Link>
                    <Link href="/contactus" className={classes.navbarItem}>تواصل معنا</Link>

                </div>
                {!isLoggedIn && <Link href="/login" className={classes.actionBtn}>قم بالتسجيل</Link>}
                {isLoggedIn &&
                    <Link href="/account" className={classes.navbarLogo}>
                        <Image className={classes.navbarAccountIcon} src={"/profile.png"} width={35} height={35}
                               alt={""}></Image>
                    </Link>}
            </div>

            <div className={classes.collapsedMenuContainer} onClick={handleOnClick}>
                <label htmlFor="click">
                    <div className={classes.menuIcon}>
                        <div className={classes.line + " " + line1Class}></div>
                        <div className={classes.line + " " + line2Class}></div>
                        <div className={classes.line + " " + line3Class}></div>
                    </div>
                </label>
            </div>
        </nav>

        {/* Collapsed Menu */}
        <div className={classes.collapse} style={{
            maxHeight: smallMenuClicked ? childHeight : 0
        }}>

            <div>
              <div className={classes.collapsedMenu} onClick={handleOnClick}>
                  <Link href="/" className={classes.navbarItem}>الرئيسية</Link>
                  <Link href="/courses" className={classes.navbarItem}>تعلم معنا</Link>
                  {/*<Link href="/private_courses" className={classes.navbarItem}>الدورات الخصوصية</Link>*/}
                  <Link href="/about" className={classes.navbarItem}>من نحن</Link>
                  <Link href="/contactus" className={classes.navbarItem}>تواصل معنا</Link>

                  {!isLoggedIn && <Link href="/login" className={classes.navbarItem + " " + classes.actionBtn}>تسجيل</Link>}
                  {isLoggedIn && <Link href="/account" className={classes.navbarItem + " " + classes.actionBtn}>حسابي</Link>}

              </div>
            </div>

        </div>
    </div>
};


export default NavBar;