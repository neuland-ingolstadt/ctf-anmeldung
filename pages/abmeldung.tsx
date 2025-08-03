import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container className={[styles.container, 'p-3']}>
      <Header />
      <p>
        <Button
          variant="primary"
          className="abmelden"
          type="submit"
          onClick={() =>
            window.location.replace(
              window.location.href.replace('abmeldung', 'confirm-abmeldung')
            )
          }
        >
          Click here if you will not make it to the event :(
        </Button>
      </p>
      <Footer />
    </Container>
  )
}
