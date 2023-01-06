import {Fragment, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "./tools/Modal";
import facebookIcon from '../public/facebook.png';
import linkedinIcon from '../public/linkedin.png';

const Footer = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");


    const emailRef = useRef();

    async function handleOnClick(event) {
        event.preventDefault();
        const email = emailRef.current.value;
        if(email === ""){
            return;
        }
        try {
            const response = await fetch("https://itqan-32c83-default-rtdb.firebaseio.com/newsEmails.json", {
                method: "POST",
                body: JSON.stringify({email}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
        } catch (e) {
            console.log(e.toString());
        }
        setModalTitle("لقد تم تسجيل حسابك");
        setShowModal(true);
        emailRef.current.value = "";
    }

    return <div style={{marginBottom: "-25px"}}>
        <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
             style={{marginTop: '90px'}}>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <Link href="/" className="navbar-brand">
                            <h1 className="mt-n2 text-uppercase text-white"><i
                                className="fa fa-book-reader mr-3"></i>إتقان</h1>
                        </Link>
                        <p className="m-0">معهد إتقان هو مشروع يهدف إلى نشر العلوم باللغة العربية وخاصة علوم البرمجة
                            والذكاء الصناعي وعلوم البيانات . و
                            سنحاول ان شاء الله أن نثري المحتوى العربي بأكبر عدد من الدورات ذات الجودة العالية التي تجعل
                            تعلم هذه العلوم أسهل بالنسبة للفرد المسلم الذي يريد اكتساب صنعة البرمجة لكي يستفيد منها في
                            حياته الدينية أو الدنيوية

                        </p>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h3 className="text-white mb-4">تابع أخبار المعهد</h3>
                        <div className="w-100">
                            <form onSubmit={handleOnClick} className="input-group">
                                <input ref={emailRef} type="email" className="form-control border-light" required
                                       onInvalid={F => F.target.setCustomValidity('بريدك الالكتروني غير صحيح !')}
                                       onInput={F => F.target.setCustomValidity('')}
                                       style={{padding: '30px'}}
                                       placeholder="بريدك الالكتروني"/>
                                <div className="input-group-append">
                                    <button type={"submit"} className="btn btn-primary px-4">سجل الان</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h3 className="text-white mb-4">كن على تواصل معنا</h3>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>ahmed.fathy@gmail.com</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+02 0101 98 67 911</p>
                        {/*<p><i className="fa fa-envelope mr-2"></i>info@example.com</p>*/}
                        <div className="d-flex justify-content-start mt-4">
                            <Link className="text-white mr-4" href="https://www.facebook.com/profile.php?id=100088815550847"><Image src={facebookIcon} alt={""} width={30} height={30} /></Link>
                            <Link className="text-white mr-4" href="#"><Image src={linkedinIcon} alt={""} width={30} height={30} /></Link>
                            {/*<a className="text-white mr-4" href="#"><Image src={"./facebook.png"} alt={""} width={30} height={30} /></a>*/}
                            {/*<a className="text-white" href="#"><i className="fab fa-2x fa-instagram"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h3 className="text-white mb-4">دوراتنا المميزة</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white-50 mb-2" href="/courses/ai"><i
                                className="fa fa-angle-right mr-2"></i>الذكاء الصناعي وعلوم البيانات</Link>
                            {/*<a className="text-white-50 mb-2" href="#"><i*/}
                            {/*    className="fa fa-angle-right mr-2"></i>تطوير التطبيقات</a>*/}
                            {/*<a className="text-white-50 mb-2" href="#"><i*/}
                            {/*    className="fa fa-angle-right mr-2"></i>الخوارزميات وهيكلة البيانات</a>*/}
                            {/*<a className="text-white-50 mb-2" href="#"><i*/}
                            {/*    className="fa fa-angle-right mr-2"></i>الرؤية الحاسوبية</a>*/}
                            {/*<a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2"></i>تطوير الألعاب</a>*/}
                        </div>
                    </div>
                    {/*<div className="col-md-4 mb-5">*/}
                    {/*    <h3 className="text-white mb-4">Quick Links</h3>*/}
                    {/*    <div className="d-flex flex-column justify-content-start">*/}
                    {/*        <a className="text-white-50 mb-2" href="#"><i*/}
                    {/*            className="fa fa-angle-right mr-2"></i>Privacy Policy</a>*/}
                    {/*        <a className="text-white-50 mb-2" href="#"><i*/}
                    {/*            className="fa fa-angle-right mr-2"></i>Terms & Condition</a>*/}
                    {/*        <a className="text-white-50 mb-2" href="#"><i*/}
                    {/*            className="fa fa-angle-right mr-2"></i>Regular FAQs</a>*/}
                    {/*        <a className="text-white-50 mb-2" href="#"><i*/}
                    {/*            className="fa fa-angle-right mr-2"></i>Help & Support</a>*/}
                    {/*        <a className="text-white-50" href="#"><i className="fa fa-angle-right mr-2"></i>Contact</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
        <div className="container-fluid bg-dark text-white-50 border-top py-4"
             style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0">حقوق الطبيع والنشر &copy; <a className="text-white" href="#">معهد إتقان</a>.
                            محفوظة.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-right">
                        <p className="m-0">تم التصميم بواسطة <a className="text-white" href="#">معهد إتقان</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {showModal ? <Modal
            onClose={() => {
                setShowModal(false);
            }}
            title={modalTitle}
            show={showModal}>
            <h4>شكرا لك لتسجيل حسابك . سوف تصلك أخبار معهد إتقان أولا بأول </h4>
        </Modal> : null}
    </div>
};

export default Footer;