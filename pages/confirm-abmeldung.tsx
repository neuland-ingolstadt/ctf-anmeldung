import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container className={[styles.container, 'p-3']}>
      <Header />
      <p className="abmelden">Sad to see you go :(</p>
      <Footer />
    </Container>
  )
}
