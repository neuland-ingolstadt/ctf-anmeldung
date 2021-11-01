import React from 'react'
import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/dist/client/router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Error () {
  const router = useRouter()

  return (
    <Container className="p-3">
      <Header />
        <br></br>
        <br></br>
      <p>
        Uff, es ist ein Fehler aufgetreten.
      </p>
      <p>
          Bitte versuche dich erneut anzumelden, sollte es sich um eine dauerhafte Störung handeln sind wir unter <a href="mailto:ctf@neuland-ingolstadt.de">ctf@neuland-ingolstadt.de</a> erreichbar.
      </p>
      <p>
        {router.query.message}
      </p>
        <br></br>
        <br></br>
      <Footer />
    </Container>
  )
}
