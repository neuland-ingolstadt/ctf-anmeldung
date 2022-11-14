import React from 'react'
import Container from 'react-bootstrap/Container'
import { useRouter } from 'next/dist/client/router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Error () {
  const router = useRouter()

  return (
    <Container className="p-3">
      <Header/>
      <br></br>
      <br></br>
      <p>
        Uff, an error has occurred.
      </p>
      <p>
        Please try to register yourself again, if it is a permanent malfunction we can be reached at <a
        href="mailto:ctf@neuland-ingolstadt.de">ctf@neuland-ingolstadt.de</a>.
      </p>
      <p>
        {router.query.message}
      </p>
      <br></br>
      <br></br>
      <Footer/>
    </Container>
  )
}
