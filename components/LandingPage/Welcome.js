import Link from "next/link";

const Welcome = (props) => {
  return <div>
      <div className="jumbotron jumbotron-fluid position-relative overlay-bottom"
           style={{marginBottom: '90px'}}>
          <div className="container text-center my-5 py-5">
              <h1 className="text-white mt-4 mb-4">دورات متقنة من البداية حتى الاحتراف</h1>
              <h1 className="text-white display-1 mb-5">أتقن مجالات البرمجة المختلفة</h1>
              <div className="mx-auto mb-5" style={{width: '100%', maxWidth: '600px'}}>
                  <div className="input-group">
                      <div className="input-group-prepend">
                          <select className="dropdown-menu" name="cars" id="cars">
                              <option className="dropdown-item" value="volvo">Volvo</option>
                              <option className="dropdown-item" value="saab">Saab</option>
                              <option className="dropdown-item" value="mercedes">Mercedes</option>
                              <option className="dropdown-item" value="audi">Audi</option>
                          </select>

                      </div>
                      <input type="text" className="form-control border-light" style={{padding: '50px 20px'}}
                             placeholder="ماذا تريد ان تتعلم؟"/>
                      <div className="input-group-append">
                          <Link className="input-group-append" href={"/courses"}>
                              <button  className="btn btn-secondary px-4 px-lg-5">ابحث</button>
                          </Link>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
};

export default Welcome;