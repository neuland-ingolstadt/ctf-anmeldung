import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from '@/components/Title'

const sponsors = [
  {
    name: 'MBDA',
    url: 'https://www.mbda-deutschland.de/',
    logo: '/mbda-logo.svg',
  },
  {
    name: 'Securai',
    url: 'https://www.securai.de/',
    logo: '/securai-logo.png',
  },
  {
    name: 'iSecNG',
    url: 'https://www.isecng.de/',
    logo: '/isecng-logo.svg',
  },
  {
    name: 'Donat IT',
    url: 'https://www.donat-it.de/',
    logo: '/donat_it-logo.svg',
  },
] as const

const Sponsors = React.memo(function Sponsors() {
  return (
    <>
      <Title label="sponsors" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-16 items-center auto-rows-fr justify-items-center">
        {sponsors.map((sponsor) => (
          <Link
            href={sponsor.url}
            key={sponsor.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={300}
              height={100}
            />
          </Link>
        ))}
      </div>
    </>
  )
})

export default Sponsors
