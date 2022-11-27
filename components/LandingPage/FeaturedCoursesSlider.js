import React from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
const options = {
    margin: 0,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    nav: true,
    navText: ['<span class="arrow prev">‹</span>',
        '<span class="arrow next">›</span>'],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 3,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,

        }
    },
};


export default function FeaturedCoursesSlider() {
    const router = useRouter();
    return (
        <div className="container-fluid px-0 py-5">
            <OwlCarousel className="courses-carousel" {...options}>
                <div style={{height: "500px"}} className="courses-item position-relative">
                    <Image width={500} height={500} className="Image-fluid"
                           src="/ai_course.jpg" alt=""/>
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3" style={{direction: 'rtl'}}>الذكاء الصناعي وعلوم
                            البيانات باستخدام لغة البايثون</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>أحمد فتحي</span>
                                <span className="text-white"><i
                                    className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4">
                            <a className="btn btn-primary" href="/courses/ai">تفاصيل الدورة</a>
                        </div>
                    </div>
                </div>
                <div style={{height: "500px"}} className="courses-item position-relative">
                    <Image width={500} height={500} className="Image-fluid" src="/ds_course.jpg" alt=""/>
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3" style={{direction: 'rtl'}}>الخوارزميات وهياكل
                            البيانات</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>ابراهيم جبر</span>
                                <span className="text-white"><i
                                    className="fa fa-star mr-2"></i>4.8 <small>(312)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4">
                            <a className="btn btn-primary" href="detail.html">تفاصيل الدورة</a>
                        </div>
                    </div>
                </div>
                <div style={{height: "500px"}} className="courses-item position-relative">
                    <Image width={500} height={500} className="Image-fluid"
                           src="/phone.jpg" alt=""/>
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3" style={{direction: 'rtl'}}>تطوير تطبيقات الهاتف
                            باستخدام Flutter</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>محمد الشافعي</span>
                                <span className="text-white"><i
                                    className="fa fa-star mr-2"></i>4.9 <small>(311)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4">
                            <a className="btn btn-primary" href="detail.html">تفاصيل الدورة</a>
                        </div>
                    </div>
                </div>
                <div style={{height: "500px"}} className="courses-item position-relative">
                    <Image width={500} height={500} className="Image-fluid"
                           src="/ai_course.jpg" alt=""/>
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3" style={{direction: 'rtl'}}>الذكاء الصناعي وعلوم
                            البيانات باستخدام لغة البايثون</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>أحمد فتحي</span>
                                <span className="text-white"><i
                                    className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4">
                            <Link className="btn btn-primary" href="/courses/ai">تفاصيل الدورة</Link>
                        </div>
                    </div>
                </div>
                <div style={{height: "500px"}} className="courses-item position-relative">
                    <Image width={500} height={500} className="Image-fluid" src="/ds_course.jpg" alt=""/>
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3" style={{direction: 'rtl'}}>الخوارزميات وهياكل
                            البيانات</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>ابراهيم جبر</span>
                                <span className="text-white"><i
                                    className="fa fa-star mr-2"></i>4.8 <small>(312)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4">
                            <a className="btn btn-primary" href="detail.html">تفاصيل الدورة</a>
                        </div>
                    </div>
                </div>
                <div style={{height: "500px"}} className="courses-item position-relative">
                    <Image width={500} height={500} className="Image-fluid"
                           src="/phone.jpg" alt=""/>
                    <div className="courses-text">
                        <h4 className="text-center text-white px-3" style={{direction: 'rtl'}}>تطوير تطبيقات الهاتف
                            باستخدام Flutter</h4>
                        <div className="border-top w-100 mt-3">
                            <div className="d-flex justify-content-between p-4">
                                <span className="text-white"><i className="fa fa-user mr-2"></i>محمد الشافعي</span>
                                <span className="text-white"><i
                                    className="fa fa-star mr-2"></i>4.9 <small>(311)</small></span>
                            </div>
                        </div>
                        <div className="w-100 bg-white text-center p-4">
                            <a className="btn btn-primary" href="detail.html">تفاصيل الدورة</a>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
}