import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Welcome from "../components/LandingPage/Welcome";
import AboutUs from "../components/LandingPage/AboutUs";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import FeaturedCourses from "../components/LandingPage/FeaturedCourses";
import OurInstructors from "../components/LandingPage/OurInstructors";


export default function Home() {
    return (
        <div>


            <main className={styles.main}>

                <Welcome />

                <AboutUs />

                <WhyChooseUs />

                {/*<FeaturedCourses />*/}

                <OurInstructors />

            </main>

        </div>
    )
}
