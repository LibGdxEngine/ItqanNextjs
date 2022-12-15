import classes from "./WhyChooseThisCourse.module.css";
import Image from "next/image";

const WhyChooseThisCourse = (props) => {
    return <div className={classes.container}>
        <hr className={classes.line}/>
        <h1>التعريف بالدورة:</h1>
        <p className={classes.desc}>
            دورة إتقان الذكاء الاصطناعي وعلوم البيانات مع أحمد فتحي هي دورة عملية باستخدام لغة الـPython - واحدة من أشهر لغات البرمجة.
            سوف يقوم أحمد بشرح جميع الأكواد على IPython وأيضا على Jupyter Notebook وسوف تجد نفسك متمكنا من لغة الـPython في فترة قصيرة. سوف تتعامل مع المكتبات الأساسية في لغة الـPython وبعض المكتبات الخارجية الأخرى.

            <br/>

            في مقدمة مقاطع الفيديو الخاصة بعلوم البيانات ، يضع أحمد الأساس للدروس اللاحقة التي سيقدم فيها بعضًا من تقنيات الحوسبة المتطورة الأكثر تطورا اليوم ، بما في ذلك معالجة اللغات - NLP واستخراج البيانات - Data Mining والحوسبة المعرفية باستخدام IBM ® Watson

            <br/>

            سنتعرض أيضا للتعلم الآلي الخاضع للإشراف والتعلم الآلي غير الخاضع للإشراف ورؤية الكمبيوتر من خلال التعلم العميق وتحليل المشاعر من خلال التعلم العميق مع الشبكات العصبية المتكررة ، والبيانات الضخمة باستخدام Hadoop® ، وتدفق Spark ™ ، وقواعد بيانات NoSQL وإنترنت الأشياء IoT.

            <br/>

            قم بتنزيل أمثلة التعليمات البرمجية لهذه الدورة من <a href="https://github.com/LibGdxEngine/Python-Fundamentals">https://github.com/LibGdxEngine/Python-Fundamentals</a>. سيتم تحديث هذا المستودع بأمثلة الدروس الإضافية عند اكتمال الدروس

            <br/>
            <br/>
            <h4>معلومات عن المدرب</h4>

            <span className={classes.bold}>أحمد فتحي</span> مهندس برمجيات ومتخصص في علوم البيانات, عمل في العديد من الشركات الناشئة والعالمية وهو متخصص في لغات برمجية شهيرة مثل الـJava والـPython والـC# وغيرها من لغات البرمجة الحديثة.
        </p>


        <h1>لمن هذه الدورة؟ </h1>
        <p className={classes.desc}> هذه الدورة المكثفة في مجال علوم البيانات والذكاء الاصطناعي تستهدف الفئات التالية:</p>
        <ul className={classes.list}>


            <li className={classes.listItem}>
                <div className={classes.listItemContent}>
                    <p>كل من لديه شغف لتعلم الذكاء الإصطناعي وعلوم البيانات</p>
                    <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>
                </div>
            </li>

            <li className={classes.listItem}>
                <div className={classes.listItemContent}>
                    <p>طلبة كليات الهندسة وعلوم الحاسب والذكاء الاصطناعي</p>
                    <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>
                </div>
            </li>

            <li className={classes.listItem}>
                <div className={classes.listItemContent}>
                    <p>طلبة الكليات الحسابية والعلوم الرياضية والتجارة</p>
                    <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>
                </div>
            </li>

            <li className={classes.listItem}>
                <div className={classes.listItemContent}>
                    <p>المطورين الذين يريدون تعلم الذكاء الإصطناعي لتعزيز خبراتهم</p>
                    <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>
                </div>
            </li>

        </ul>

        <h1>متطلبات الدورة:</h1>
        <p className={classes.desc}> هذه الدورة لا تحتاج لأي متطلبات خاصة فهي مصممة لتناسب جميع المستويات من البداية تماما وحتى الإتقان بإذن الله</p>
        <p className={classes.desc}> يكفي فقط أن:</p>
        <ul className={classes.list}>

            <li className={classes.listItem}>
                <div className={classes.listItemContent}>
                    <p>تستعين بالله وتعلم أنه لا طاقة لك بشيء إلا بحول الله وقوته</p>
                    <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>
                </div>
            </li>

            <li className={classes.listItem}>
                <div className={classes.listItemContent}>
                    <p>تحل جميع الاختبارات أولا بأول</p>
                    <Image className={classes.arrowLeft} src={"/arrowLeft.png"} alt={""} width={23} height={23}/>
                </div>
            </li>
        </ul>
    </div>
};

export default WhyChooseThisCourse;