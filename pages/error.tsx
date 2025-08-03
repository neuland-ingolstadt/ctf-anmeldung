import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function ErrorPage() {
  const router = useRouter()

  return (
    <Container className="p-3">
      <Header />
      <br />
      <br />
      <p>Uff, an error has occurred.</p>
      <p>
        Please try to register yourself again! If it is a permanent malfunction,
        we can be reached at{' '}
        <a href="mailto:ctf@neuland-ingolstadt.de">ctf@neuland-ingolstadt.de</a>
        .
      </p>
      <p>{router.query.message}</p>
      <br />
      <br />
      <Footer />
    </Container>
  )
}
