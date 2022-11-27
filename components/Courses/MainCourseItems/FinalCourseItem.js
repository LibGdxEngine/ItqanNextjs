import classes from "./FinalCourseItem.module.css";
import {useRouter} from "next/router";
import Image from "next/image";

const FinalCourseItem = (props) => {
    const course = props.course;

    const router = useRouter();

    function handleClick() {
        router.push("/courses/ai/" + course.id.toString());
    }

    return <div>
        <div className={classes.card}>
            <div className={classes.imgBox}>
                <Image width={350} height={220} src={course.image} alt=""/>
            </div>
            <div className={classes.cardContent}>
                <span className={classes.tag}>{course.level}</span>
                <h2 className={classes.cardTitle}>{course.title}</h2>
                <small className={classes.subTitle}>{course.description}</small>
                <div className={classes.rating}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div className={classes.priceBox}>
                    <p className={classes.priceBox}>{course.price}</p>
                    <p className={classes.oldPrice}>{course.insteadPrice ? course.insteadPrice : ""}</p>
                </div>
                <button onClick={handleClick} className={classes.btn}>أتقن هذه الدورة</button>
            </div>
        </div>
    </div>
};

export default FinalCourseItem;