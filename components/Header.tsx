import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Head>
        <title>Neuland CTF - Winter 2025</title>
        <meta
          name="description"
          content="Neuland CTF Winter 2025 - Join us for our third Capture The Flag event at THI"
        />
        <link rel="icon" type="image" href="neuland_ctf-logo.png" />

        <meta property="og:title" content="Neuland CTF Winter 2025" />
        <meta
          property="og:description"
          content="Neuland CTF Winter 2025 | 06.12.2025 | 10:30 a.m. - 09:00 p.m. | G215 - THI"
        />
        <meta property="og:url" content="https://ctf.neuland-ingolstadt.de/" />
        <meta
          property="og:image"
          content="https://ctf.neuland-ingolstadt.de/neuland_ctf-logo.png"
        />
      </Head>
      <Link
        className="text-center flex flex-col items-center hover:no-underline"
        href="/"
      >
        <Image
          src="/neuland_ctf-logo.png"
          className="logo mb-2"
          alt="Neuland CTF Logo"
          width={120}
          height={120}
        />
        <h1 className="mb-2 mt-4 text-center font-bold text-4xl text-primary">
          Neuland CTF
          <span className="text-white"> - </span>
          Winter 2025
        </h1>
      </Link>
    </>
  )
}
