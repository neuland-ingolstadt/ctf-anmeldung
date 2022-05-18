import React from 'react'
import Head from 'next/head'

export default function Header() {
  return (
    <>
      <Head>
        <title>Neuland CTF 2022 Spring</title>
        <meta name="description" content="Neuland CTF 2022 Spring" />
        <link rel="icon" type="image/svg+xml" href="neuland-ctf-logo.png" />

        <meta property="og:title" content="Neuland CTF 2022 Spring" />
        <meta property="og:description" content="Information about the last Neuland CTF in Spring 2022" />
        <meta property="og:url" content="https://ctf.neuland-ingolstadt.de/" />
        <meta property="og:image" content="https://ctf.neuland-ingolstadt.de/neuland-ctf-logo.png" />
      </Head>
      <center>
        <img src="/neuland-ctf-logo.png" width="150px" className="mb-2" />
        <h1 className="mb-2 mt-4 text-center font-weight-bold">
          Neuland CTF 2022 Spring
        </h1>
      </center>
    </>
  )
}
