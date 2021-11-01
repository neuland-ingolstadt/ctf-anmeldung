import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Done () {
  return (
    <Container className="p-3">
      <Header />
        <br></br>
        <br></br>
      <p>
        Deine Anmeldung ist eingegangen. 😊
      </p>
      <p>
          Du erhältst in Kürze eine Bestätigungs-E-Mail.
          Wir stehen dir gerne für Fragen oder Anliegen unter <a href="mailto:ctf@neuland-ingolstadt.de">ctf@neuland-ingolstadt.de</a> zur Verfügung.
      </p>
        <br></br>
        <br></br>
      <Footer />
    </Container>
  )
}
