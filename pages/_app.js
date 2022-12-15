import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import {SessionProvider} from "next-auth/react";

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';
import Head from "next/head"; //styles of nprogress
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                    <title>اتقان</title>
                    <meta name="description" content="هذا التطبيق خاص بموقع اتقان"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}

export default MyApp
