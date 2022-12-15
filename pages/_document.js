import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8"/>
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
                <title>اتقان</title>
                <meta name="description" content="هذا التطبيق خاص بموقع اتقان"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;500;800&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}