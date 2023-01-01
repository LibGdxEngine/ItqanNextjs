import Link from "next/link";
import classes from '../../styles/Home.module.css';
import {useRef} from "react";

const Welcome = (props) => {
    const searchKeywordRef = useRef();

    async function handleOnClick() {
        const searchKey = searchKeywordRef.current.value;
        try {
            const response = await fetch("https://itqan-32c83-default-rtdb.firebaseio.com/searchKeys.json", {
                method: "POST",
                body: JSON.stringify({searchKey}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
        } catch (e) {
            console.log(e.toString());
        }
    }

    return <div>
        <div className="jumbotron jumbotron-fluid position-relative overlay-bottom"
             style={{marginBottom: '90px'}}>
            <div className="container text-center my-5 py-5">
                <h1 className="text-white mt-5 mb-5">دورات متقنة من البداية حتى الاحتراف</h1>
                <h1 className="text-white display-3 mb-5">أتقن مجالات البرمجة المختلفة</h1>
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
                        <input ref={searchKeywordRef} type="text" className="form-control border-light" style={{padding: '50px 20px'}}
                               placeholder="ماذا تريد ان تتعلم؟"/>
                        <div className="input-group-append">
                            <Link className="input-group-append" href={"/courses"} onClick={handleOnClick}>
                                <button className={"btn btn-secondary px-4 px-lg-5"}>ابحث</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Welcome;