import Image from "next/image";

const WhyChooseUs = (props) => {
  return <div>
      <div className="container-fluid py-5" style={{margin: '3px'}}>
          <div className="container py-5">
              <div className="row">
                  <div className="col-lg-7 my-5 pt-5 pb-lg-5">
                      <div className="section-title position-relative mb-4" style={{textAlign:'right'}}>
                          <h6  style={{textAlign:'right'}} className="d-inline-block position-relative text-secondary text-uppercase pb-2">لماذا معهد إتقان</h6>
                          <h1 style={{textAlign:'right'}} className="display-4">مميزات الدراسة في معهد إتقان</h1>
                      </div>
                      <p style={{textAlign:'right'}} className="mb-4 pb-2">هناك العديد من الخيارات المتاحة لتعلم البرمجة وعلوم البيانات ولكن ليست كلها بنفس المستوى من الجودة.
                          يمكنك أن تسجل في دورات معهد إتقان وأنت مطمئن لأننا نقوم بشكل مستمر بتحديث جميع المعلومات الخاصة بالدورة وبمراقبة جودة ما يتم عرضه في موقعنا كما أننا نقوم بدعم جميع طلابنا بالعديد من المصادر والمراجع التي تساعدهم على التقدم واجتياز المراحل المختلفة</p>

                      <div className="d-flex mb-4">
                          <div className="btn-icon bg-primary mr-4">
                              <Image className="fa fa-2x fa-graduation-cap text-white" width={90} height={90} src="/gold-medal.png" alt="أفضل المعلمين"/>
                          </div>
                          <div className="mt-n3">
                              <h4>لدينا أفضل المعلمين</h4>
                              <p>التعلم على يد أشخاص ذويي خبرة وكفائة يكسبك الثقة ويجعلك مطمئنا لما تتعلمه بقدر ما يجعلك مستعدا لمواجهة صعوبات العمل الحقيقية وبناء مشاريعك الخاصة بشكل أفضل </p>
                          </div>
                      </div>
                      <div className="d-flex mb-4">
                          <div className="btn-icon bg-secondary mr-4">
                              <Image alt="students Image" src="/collaboration.png" width={90} height={90} className="fa fa-2x fa-certificate text-white"/>
                          </div>
                          <div className="mt-n3">
                              <h4>اختبارات دورية ومتابعة مستمرة مع الطلاب</h4>
                              <p> لن تكون وحدك خلال الرحلة. فريق متخصص سوف يتابع معك حل المشاكل ويساعدك على تجاوز العقبات . كما يمكنك مشاركة مشاريعك مع باقي الطلاب  </p>
                          </div>
                      </div>
                      <div className="d-flex">
                          <div className="btn-icon bg-warning mr-4">
                              <Image alt="شهادة معتمدة" width={90} height={90} className="fa fa-2x fa-book-reader text-white" src="/certificate.png" />
                          </div>
                          <div className="mt-n2">
                              <h4>شهادات معتمدة من معهد اتقان</h4>
                              <p className="m-0">في نهاية كل دورة يمكنك الحصول على شهادة معتمدة تساعدك في بناء سيرتك الذاتية وتجعلك مميزا بين جميع المبرمجين حول العالم</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-5" style={{minHeight: '500px'}}>
                      <div className="position-relative h-100">
                          <Image className="position-absolute w-100 h-100" width={800} height={800}
                                 src="/why_itqan4.jpg" alt="Hello alt"
                                 style={{objectFit: 'cover'}}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
};

export default WhyChooseUs;