import React from 'react'
import Head from 'next/head'

export default function Header () {
  return (
    <>
      <Head>
        <title>Neuland CTF 2021</title>
        <meta name="description" content="Neuland CTF 2021" />
        <link rel="icon" type="image/svg+xml" href="icon.png" />

        <meta property="og:title" content="Neuland CTF 2021" />
        <meta property="og:description" content="Neuland CTF 2021 am 11.12.2021 von 10 bis 18 Uhr an der Technischen Hochschule Ingolstadt" />
        <meta property="og:url" content="https://ctf.neuland-ingolstadt.de/" />
        <meta property="og:image" content="https://ctf.neuland-ingolstadt.de/logo.png" />
      </Head>
        <center>
      <img src="/logo.png" width="40%" className="mb-3 neulandLogo"/>
        </center>
    </>
  )
}
