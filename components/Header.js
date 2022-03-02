import React from 'react'
import Head from 'next/head'

export default function Header () {
  return (
    <>
      <Head>
        <title>Neuland CTF 2022</title>
        <meta name="description" content="Neuland CTF 2022" />
        <link rel="icon" type="image/svg+xml" href="icon.png" />

        <meta property="og:title" content="Neuland CTF 2022" />
        <meta property="og:description" content="Neuland CTF 2022 am 02.04.2022 von 10 bis 18 Uhr an der Technischen Hochschule Ingolstadt" />
        <meta property="og:url" content="https://ctf.neuland-ingolstadt.de/" />
        <meta property="og:image" content="https://ctf.neuland-ingolstadt.de/logo.png" />
      </Head>
        <h1 className="mb-2 mt-4 text-center font-weight-bold">
          Neuland CTF 2022
        </h1>
    </>
  )
}
