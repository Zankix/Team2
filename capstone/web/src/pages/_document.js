import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body name = 'main-background'>
        <div>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
