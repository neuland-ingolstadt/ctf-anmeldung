import React from 'react'
import Head from 'next/head'

export default function Header () {
  return (
    <>
      <Head>
        <title>Neuland CTF 2021</title>
        <meta name="description" content="Meckerkasten von der Fachschaft Informatik für die Studierenden der Fakultät Informatik" />
        <link rel="icon" type="image/svg+xml" href="icon.png" />
      </Head>
      <img src="/logo.png" width="300" className="mb-3" />
      <h1>Neuland CTF 2021</h1>
    </>
  )
}
