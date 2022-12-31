import Image from "next/image";
import classes from "../../styles/About.module.css";

const About = (props) => {
    return <div style={{direction:"rtl"}}>

        <div className="container-fluid bg-primary p-5 hero-header mb-5 bg-image">
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-1 text-black animated zoomIn">تعرف علينا</h1>
                    {/*<a href="" className="h4 text-white">Home</a>*/}
                    {/*<i className="far fa-circle text-white px-2"></i>*/}
                    {/*<a href="" className="h4 text-white">About</a>*/}
                </div>
            </div>
        </div>


        <div className="container-fluid py-5 wow fadeInUp">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:"500px"}}>
                        <div className="position-relative h-100">
                            <Image className="position-absolute w-100 h-100 rounded wow zoomIn" width={400} height={530} alt={""} data-wow-delay="0.3s"
                                 src="./logo_with_name.png" style={{objectFit:"cover"}}/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h5 className="text-primary text-uppercase" style={{letterSpacing:"0px"}}>نبذة عن معهد إتقان</h5>
                            <h1 className="display-5 mb-0">يقوم معهد إتقان على تقديم دورات قوية في مجالات البرمجة المختلفة باللغة العربية</h1>
                        </div>
                        <h4 className="text-body fst-italic mb-4">دورات قوية - مبسطة - عملية</h4>
                        <p className="mb-4">معهد إتقان هو مشروع يهدف إلى نشر العلوم باللغة العربية وخاصة علوم البرمجة والذكاء الصناعي وعلوم البيانات .
                            سنحاول ان شاء الله أن نثري المحتوى العربي بأكبر عدد من الدورات ذات الجودة العالية التي تجعل تعلم هذه العلوم أسهل بالنسبة للفرد المسلم الذي يريد اكتساب صنعة البرمجة لكي يستفيد منها في حياته الدينية أو الدنيوية

                        </p>
                        <div className="row g-3">
                            <div className="col-sm-6 wow zoomIn mt-1" data-wow-delay="0.6s">
                                <div
                                    className="d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3"
                                    style={{height:"200px", backgroundColor:"#FBC252"}}>
                                    <Image width={100} height={100} alt={""} src={"./icon1.png"} className=""></Image>
                                    <h4 className="text-white mb-0">دورات منظمة وقوية</h4>
                                </div>
                            </div>
                            <div className="col-sm-6 wow zoomIn mt-1" data-wow-delay="0.6s">
                                <div
                                    className="d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3"
                                    style={{height:"200px", backgroundColor:"#ADA2FF"}}>
                                    <Image width={100} height={100} alt={""} src={"./icon2.png"} className=""></Image>
                                    <h4 className="text-white mb-0">تعلم باللغة العربية</h4>
                                </div>
                            </div>
                            <div className="col-sm-6 wow zoomIn mt-1" data-wow-delay="0.6s">
                                <div
                                    className="d-flex flex-column justify-content-center text-center border-bottom border-5 border-secondary rounded p-3"
                                    style={{height:"200px", backgroundColor:"#472183"}}>
                                    <Image width={100} height={100} alt={""} src={"./icon3.png"} className=""></Image>
                                    <h4 className="text-white mb-0">دورات خصوصية</h4>
                                </div>
                            </div>
                            <div className="col-sm-6 wow zoomIn mt-1" data-wow-delay="0.9s">
                                <div
                                    className="d-flex flex-column justify-content-center text-center border-bottom border-5 border-primary rounded p-3"
                                    style={{height:"200px", backgroundColor:"#1C315E"}}>
                                    <Image width={100} height={100} alt={""} src={"./icon4.png"} className=""></Image>
                                    <h4 className="text-white mb-0">شهادات معتمدة</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid py-5 wow fadeInUp">
            <div className="container">
                <div className="text-center mx-auto mb-5"  style={{maxWidth:"600px"}}>
                    <h5 className="text-primary text-uppercase" style={{letterSpacing:"0px"}}>المدربون في معهد إتقان</h5>
                    <h1 className="display-6 mb-0">تعرف على المدربين في معهدنا</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="position-relative rounded-top">
                            <Image width={500} height={500}  className="img-fluid rounded-top w-100" src="./me.png" alt=""/>
                                {/*<div className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"*/}
                                {/*     style={{marginRight:"-25px"}}>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-twitter fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-facebook-f fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-linkedin-in fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#">*/}
                                {/*        <Image width={30} height={30} alt={""} src={"./icon3.png"} className=""></Image>*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                        </div>
                        <div className="bg-primary text-center rounded-bottom p-4">
                            <h3 className="text-white">أحمد فتحي</h3>
                            <p className="text-white m-0">مهندس ذكاء اصطناعي</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="position-relative rounded-top">
                            <Image width={100} height={100}  className="img-fluid rounded-top w-100" src="shaf.jpg" alt=""/>
                                {/*<div className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"*/}
                                {/*     style={{marginRight:"-25px"}}>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-twitter fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-facebook-f fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-linkedin-in fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-instagram fw-normal"></i></a>*/}
                                {/*</div>*/}
                        </div>
                        <div className="bg-primary text-center rounded-bottom p-4">
                            <h3 className="text-white">محمد الشافعي</h3>
                            <p className="text-white m-0">مطور تطبيقات للهواتف</p>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="position-relative rounded-top">
                            <Image width={100} height={100}  className="img-fluid rounded-top w-100" src="gabr.jpg" alt=""/>
                                {/*<div className="position-absolute bottom-0 end-0 d-flex flex-column bg-white p-1"*/}
                                {/*     style={{marginRight:"-25px"}}>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-twitter fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-facebook-f fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-linkedin-in fw-normal"></i></a>*/}
                                {/*    <a className="btn btn-outline-secondary btn-square m-1" href="#"><i*/}
                                {/*        className="fab fa-instagram fw-normal"></i></a>*/}
                                {/*</div>*/}
                        </div>
                        <div className="bg-primary text-center rounded-bottom p-4">
                            <h3 className="text-white">إبراهيم جبر</h3>
                            <p className="text-white m-0">مهندس برمجيات</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default About;