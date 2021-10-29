import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Done () {
  return (
    <Container className="p-3">
      <Header />
      <p>
        Deine Anmeldung ist eingengen. 😊
      </p>
      <p>
        Wenn alles gut geht erhältst in kürze eine Bestätitugungs E-Mail.
        Solltest du noch Fragen haben wende dich gerne an <a href="mailto:ctf@neuland-ingolstadt.de">ctf@neuland-ingolstadt.de</a>
      </p>
      <Footer />
    </Container>
  )
}
