import React from 'react'
import Head from 'next/head'

export default function Header () {
  return (
    <>
      <Head>
        <title>Neuland CTF 2023 Winter</title>
        <meta name="description" content="Neuland CTF 2023 Winter" />
        <link rel="icon" type="image/svg+xml" href="neuland_ctf-logo.png" />

        <meta property="og:title" content="Neuland CTF 2023 Winter" />
        <meta property="og:description" content="Information about the last Neuland CTF in December 2023" />
        <meta property="og:url" content="https://ctf.neuland-ingolstadt.de/" />
        <meta property="og:image" content="https://ctf.neuland-ingolstadt.de/neuland_ctf-logo.png" />
      </Head>
      <center>
        <img src="/neuland_ctf-logo.png" className="mb-2 logo" />
        <h1 className="mb-2 mt-4 text-center font-weight-bold">
          Neuland CTF 2023 Winter
        </h1>
      </center>
    </>
  )
}
