import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Ubuntu & DM Mono import */}
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Ubuntu&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
