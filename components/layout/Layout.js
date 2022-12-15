
import NavBar from "../NavBar";
import Footer from "../Footer";
import Head from "next/head";



export default function Layout({children}) {
    return (
        <>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}