import classes from "./WhyChooseThisCourse.module.css";
import Image from "next/image";

const WhyChooseThisCourse = (props) => {
    const course = props.course;

    return <div className={classes.container}>
        <hr className={classes.line}/>
        <h1>التعريف بالدورة:</h1>
        <div className={classes.desc} dangerouslySetInnerHTML={{__html:course.courseIntroText}}>

        </div>


        {/*<h1>لمن هذه الدورة؟ </h1>*/}
        {/*<p className={classes.desc}> هذه الدورة المكثفة في مجال علوم البيانات والذكاء الاصطناعي تستهدف الفئات*/}
        {/*    التالية:</p>*/}
        {/*<ul className={classes.list}>*/}


        {/*    <li className={classes.listItem}>*/}
        {/*        <div className={classes.listItemContent}>*/}
        {/*            <p>كل من لديه شغف لتعلم الذكاء الإصطناعي وعلوم البيانات</p>*/}
        {/*            <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>*/}
        {/*        </div>*/}
        {/*    </li>*/}

        {/*    <li className={classes.listItem}>*/}
        {/*        <div className={classes.listItemContent}>*/}
        {/*            <p>طلبة كليات الهندسة وعلوم الحاسب والذكاء الاصطناعي</p>*/}
        {/*            <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>*/}
        {/*        </div>*/}
        {/*    </li>*/}

        {/*    <li className={classes.listItem}>*/}
        {/*        <div className={classes.listItemContent}>*/}
        {/*            <p>طلبة الكليات الحسابية والعلوم الرياضية والتجارة</p>*/}
        {/*            <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>*/}
        {/*        </div>*/}
        {/*    </li>*/}

        {/*    <li className={classes.listItem}>*/}
        {/*        <div className={classes.listItemContent}>*/}
        {/*            <p>المطورين الذين يريدون تعلم الذكاء الإصطناعي لتعزيز خبراتهم</p>*/}
        {/*            <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>*/}
        {/*        </div>*/}
        {/*    </li>*/}

        {/*</ul>*/}

        {/*<h1>متطلبات الدورة:</h1>*/}
        {/*<p className={classes.desc}> هذه الدورة لا تحتاج لأي متطلبات خاصة فهي مصممة لتناسب جميع المستويات من البداية*/}
        {/*    تماما وحتى الإتقان بإذن الله</p>*/}
        {/*<p className={classes.desc}> يكفي فقط أن:</p>*/}
        {/*<ul className={classes.list}>*/}

        {/*    <li className={classes.listItem}>*/}
        {/*        <div className={classes.listItemContent}>*/}
        {/*            <p>تستعين بالله وتعلم أنه لا طاقة لك بشيء إلا بحول الله وقوته</p>*/}
        {/*            <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>*/}
        {/*        </div>*/}
        {/*    </li>*/}

        {/*    <li className={classes.listItem}>*/}
        {/*        <div className={classes.listItemContent}>*/}
        {/*            <p>تحل جميع الاختبارات أولا بأول</p>*/}
        {/*            <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>*/}
        {/*        </div>*/}
        {/*    </li>*/}
        {/*</ul>*/}
    </div>
};

export default WhyChooseThisCourse;