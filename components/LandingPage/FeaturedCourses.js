import FeaturedCoursesSlider from "./FeaturedCoursesSlider";

const   FeaturedCourses = (props) => {
    return <div className="container-fluid px-0 py-5">
        <div className="row mx-0 justify-content-center pt-5">
            <div className="col-lg-6">
                <div className="section-title text-center position-relative mb-4">
                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">الدورات المميزة</h6>
                    <h2 style={{lineHeight:"4rem"}} className="display-5">يمكنك حجز و حضور الدورات الخصوصية أونلاين أو في المراكز المعتمدة لدينا</h2>
                </div>
            </div>
        </div>

        <FeaturedCoursesSlider/>

        <div className="row justify-content-center bg-image mx-0 mb-5">
            <div className="col-lg-6 py-5">
                <div className="bg-white p-5 my-5">
                    <h1 className="text-center mb-4" style={{direction:"rtl"}}>  30% خصم لفترة محدودة للطلاب الجدد </h1>
                    <form>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg-light border-0"
                                           placeholder="اسم الطالب" style={{padding: '30px 20px'}}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="email" className="form-control bg-light border-0"
                                           placeholder="بريدك الالكتروني" style={{padding: '30px 20px'}}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="tel" className="form-control bg-light border-0"
                                           placeholder="رقم هاتفك" style={{padding: '30px 20px'}}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control bg-light border-0"
                                           placeholder="وظيفتك أو مجال دراستك" style={{padding: '30px 20px'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <select className="custom-select bg-light border-0 px-3"
                                            style={{height: '60px'}}>
                                        <option value={1}>يمكنك اختيار دورة واحدة فقط</option>
                                        <option value="1" style={{direction:"rtl"}}>الذكاء الصناعي وعلوم البيانات</option>
                                        <option value="2" style={{direction:"rtl"}}>الخوارزميات وهياكل البيانات</option>
                                        <option value="3" style={{direction:"rtl"}}>تطوير التطبيقات باستخدام Flutter</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-block" type="submit"
                                        style={{height: '60px'}}>قم بالتسجيل الان
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

};

export default FeaturedCourses;