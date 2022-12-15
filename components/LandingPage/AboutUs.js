
import CountUp from "react-countup";
import Image from "next/image";

const AboutUs = (props) => {
  return <div >
      <div className="container-fluid py-5">
          <div className="container py-5">
              <div className="row">
                  <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: '500px'}}>
                      <div className="position-relative h-100">
                          <Image className="position-absolute w-100 h-100" width={900} height={900}
                                 src="/aboutus.jpg" alt="sss"
                                 style={{objectFit: 'cover'}}/>
                      </div>
                  </div>
                  <div className="col-lg-7" style={{textAlign:'right'}}>
                      <div className="section-title position-relative mb-4">
                          <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2" style={{textAlign:'right'}}>كل ما تحتاجه في مكان واحد</h6>
                          <h1 className="display-5" style={{textAlign:'right'}}>تعلم البرمجة من أفضل المصادر لتجهز نفسك لسوق العمل</h1>
                      </div>
                      <p style={{textAlign:'right'}}>
                          جهز نفسك للدخول في سوق عمل البرمجة والذكاء الصناعي سواءا اذا كنت تريد العمل كمبرمج حر أو أردت العمل في كبرى الشركات.
                          سوف تحصل على التدريب الكافي للوصول إلى هدفك في أسرع وقت وبأفضل
                          طريقة من خلال شروحات سهلة ومتدرجة ومدعمة بالكثير من الاختبارات والمشاريع العملية. كل هذا وأكثر متوفر على معهد إتقان.
                           جميع دوراتنا مصنوعة باهتمام شديد حتى تناسب جميع الأعمار والمستويات وتصل في النهاية إلى الهدف المرجو وهو الحصول على الخبرة العلمية والعملية الكافية للمنافسة في مجال البرمجة بقوة
                      </p>
                      <div className="row pt-4 mx-0">
                          <div className="col-3 px-0">
                              <div className="bg-success text-center p-4">
                                  <CountUp style={{fontSize:'1.2rem', fontWeight:'bold'}} className="text-white" data-toggle="counter-up" end={100} />
                                  <h6 className="text-uppercase text-white">ـ<span
                                      className="d-block">الدروس</span></h6>
                              </div>
                          </div>
                          <div className="col-3 px-0">
                              <div className="bg-primary text-center p-4">
                                  <CountUp style={{fontSize:'1.2rem', fontWeight:'bold'}} className="text-white" data-toggle="counter-up" end={30} />
                                  <h6 className="text-uppercase text-white">ـ<span
                                      className="d-block">الاختبارات</span></h6>
                              </div>
                          </div>
                          <div className="col-3 px-0">
                              <div className="bg-secondary text-center p-4">
                                  <CountUp style={{fontSize:'1.2rem', fontWeight:'bold'}} className="text-white" data-toggle="counter-up" end={4} />
                                  <h6 className="text-uppercase text-white">ـ<span
                                      className="d-block">المدرسين</span></h6>
                              </div>
                          </div>
                          <div className="col-3 px-0">
                              <div className="bg-warning text-center p-4">
                                  <CountUp style={{fontSize:'1.2rem', fontWeight:'bold'}} className="text-white" data-toggle="counter-up" end={1000} />
                                  <h6 className="text-uppercase text-white">ـ<span
                                      className="d-block">الطلاب</span></h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
};
export default AboutUs;