import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="robots" content="noindex, follow" />
                <link href="https://fonts.cdnfonts.com/css/myriad-pro" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}