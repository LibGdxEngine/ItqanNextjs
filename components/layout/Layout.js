import NavBar from "../NavBar";
import Footer from "../Footer";
import Head from "next/head";


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                <title>اتقان</title>
                <meta name="description" content="هذا التطبيق خاص بموقع اتقان"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}