import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <Container className="container-custom p-3">
      <Header />
      <p className="abmelden">Sad to see you go :(</p>
      <Footer />
    </Container>
  )
}
