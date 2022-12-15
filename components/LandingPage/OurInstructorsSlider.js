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

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const options = {
    margin: 0,
    responsiveClass: true,
    dots: false,
    autoplay: true,
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
            items: 3,

        }
    },
};


export default function OurInstructorsSlider() {
    return (
        <div>
            <OwlCarousel items={3} nav={true} {...options}>
                <div className="team-item">
                    <Image style={{objectFit:"cover"}} width={500} height={500}
                           className="Image-fluid w-100" src="/me.png" alt=""/>
                        <div className="bg-light text-center p-4">
                            <h5 className="mb-3">أحمد فتحي</h5>
                            <p className="mb-2">مهندس ذكاء صناعي وعالم بيانات</p>
                            <div className="d-flex justify-content-center">
                                <Link className="mx-1 p-1" href="https://www.facebook.com/profile.php?id=100081568971018"><Image src="/facebook.png" width={35} height={35}
                                                                                                                      alt="facebook"
                                                                                                                      className="fab fa-facebook-f"></Image></Link>
                                <Link className="mx-1 p-1" href="components/LandingPage/OurInstructorsSlider#"><Image src="/linkedin.png" width={35} height={35}
                                                                                                                      alt="linkedin"
                                                                                                                      className="fab fa-facebook-f"></Image></Link>
                            </div>
                        </div>
                </div>
                <div className="team-item">
                    <Image style={{objectFit:"cover"}} width={500} height={500}
                           className="Image-fluid w-100" src="/shaf.jpg" alt=""/>
                    <div className="bg-light text-center p-4">
                        <h5 className="mb-3">محمد الشافعي</h5>
                        <p className="mb-2">مهندس برمجيات</p>
                        <div className="d-flex justify-content-center">
                            <Link className="mx-1 p-1" href="#"><Image src="/facebook.png" width={35} height={35}
                                                                                                                  alt="facebook"
                                                                                                                  className="fab fa-facebook-f"></Image></Link>
                            <Link className="mx-1 p-1" href="#"><Image src="/linkedin.png" width={35} height={35}
                                                                                                                  alt="facebook"
                                                                                                                  className="fab fa-facebook-f"></Image></Link>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <Image style={{objectFit:"cover"}} width={500} height={500}
                           className="Image-fluid w-100" src="/gabr.jpg" alt=""/>
                    <div className="bg-light text-center p-4">
                        <h5 className="mb-3">ابراهيم جبر</h5>
                        <p className="mb-2">مهندس برمجيات</p>
                        <div className="d-flex justify-content-center">
                            <Link className="mx-1 p-1" href="components/LandingPage/OurInstructorsSlider#"><Image src="/facebook.png" width={35} height={35}
                                                                                                                  alt="facebook"
                                                                                                                  className="fab fa-facebook-f"></Image></Link>
                            <Link className="mx-1 p-1" href="components/LandingPage/OurInstructorsSlider#"><Image src="/linkedin.png" width={35} height={35}
                                                                                                                  alt="facebook"
                                                                                                                  className="fab fa-facebook-f"></Image></Link>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
}