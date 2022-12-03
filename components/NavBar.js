import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";

const NavBar = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const router = useRouter();
    const activeClassName = (path) => {
        if (router.pathname === path) {
            return "nav-item nav-link active";
        }
        return "nav-item nav-link";
    }

    function handleMenuClick() {
        setMenuIsOpen(!menuIsOpen);
    }

    return <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" className={"navbar-brand ml-lg-3"}>
                <h1 style={{fontStyle: "Reem Kufi', sans-serif"}} className={"m-0 text-uppercase text-primary "}>
                    <i className="fa fa-book-reader mr-3"></i>
                    إتقان
                </h1>
            </a>

            <button onClick={handleMenuClick} type="button" className="navbar-toggler" data-toggle="collapse"
                    data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            {menuIsOpen ?
                <div className="navbar-collapse justify-content-between px-lg-3" id="navbarCollapse" onClick={handleMenuClick}>
                    <div className="navbar-nav mx-auto py-0">
                        <Link href="/" className={activeClassName('/')}>الرئيسية</Link>
                        <Link href="/courses" className={activeClassName('/courses')}>تعلم معنا</Link>
                        <Link href="/admin" className="nav-item nav-link">تعرف علينا</Link>
                        <Link href="#" className="nav-item nav-link">تواصل معنا</Link>

                    </div>
                    <Link href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">قم بالتسجيل</Link>
                </div>
             : null}
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">

                <div className="navbar-nav mx-auto py-0">
                    <Link href="/" className={activeClassName('/')}>الرئيسية</Link>
                    <Link href="/courses" className={activeClassName('/courses')}>تعلم معنا</Link>
                    <Link href="/login" className="nav-item nav-link">تسجيل</Link>
                    <Link href="#" className="nav-item nav-link">تواصل معنا</Link>

                </div>
                <Link href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">قم بالتسجيل</Link>
            </div>
        </nav>
    </div>
};


export default NavBar;