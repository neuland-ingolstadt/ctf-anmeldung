import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Done () {
  return (
    <Container className="p-3">
      <Header/>
      <br></br>
      <br></br>
      <p>
        Your registration has been received. 😊
      </p>
      <p>
        You will receive a confirmation email shortly.
        We are at your disposal for questions or concerns under <a
        href="mailto:ctf@neuland-ingolstadt.de">ctf@neuland-ingolstadt.de</a>.
      </p>
      <br></br>
      <br></br>
      <Footer/>
    </Container>
  )
}
