import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="container bg-zinc-900 text-white p-16">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
