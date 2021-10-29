import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export async function getServerSideProps (ctx) {
  return {
    props: {
      hCaptchaSiteKey: process.env.HCAPTCHA_SITEKEY
    }
  }
}

export default function Home ({ hCaptchaSiteKey }) {
  const [verified, setVerified] = useState(false)

  return (
    <Container className={[styles.container, 'p-3']}>
      <Header />
      <p>
        Am 11.12.2021 veranstalten wir einen Capture The Flag (CTF). Ein CTF ist ein Wettbewerb bei dem
        man legal {'"hacken"'} kann, also sein Können im Bereich IT-Sicherheit, Forensik und co. unter Beweis
        stellen kann.
        <br />
        <a href="https://de.wikipedia.org/wiki/Capture_the_Flag#Computersicherheit">
          Mehr Informationen zu CTFs
        </a>
      </p>
      <p>
        Unser CTF ist Dabei so gestaltet dass auch Menschen mit wenig Erfahrung mitmachen können.
        Es gibt zu jeder Kategorie jeweils eine leichte, eine mittlere und eine schwere Aufgabe.
        <br />
        <b>Kategorien</b>: web, stego, forensic, crypto, osint, re, pwn
      </p>
      <p>
        Teams sind erlaubt, Preise gibt es jedoch nur für die besten drei Einzelkämpfer.
        <br />
        <b>Preise</b>: Hack The Box Gift Cards
      </p>

      <h2>Eckdaten</h2>
      <p>
        <b>Datum</b>: 11.12.2021<br />
        <b>Uhrzeit</b>: 10 bis 18 Uhr<br />
        <b>Ort</b>: Technische Hochschule Ingolstadt<br />
        <b>Raum</b>: TBD<br />
        <b>Teilnehmer</b>: ca. 20-40 einzeln oder in Teams ohne Wertung<br />
      </p>

      <h2>Sponsoren</h2>
      <p>
        folgen
      </p>

      <h2>Anmeldung</h2>
      <Form method="post" action="api/submit">
        <Form.Group className="mb-3">
          <Form.Label>Name / Nickname</Form.Label>
          <Form.Control
            name="name"
            type="text"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-Mail-Adresse:</Form.Label>
          <Form.Control
            name="email"
            type="email"
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Studiengang:</Form.Label>
          <Form.Control
            name="course"
            type="text"
            placeholder="Informatik 3. Semester, Bachelorand Künstliche Intelligenz, ..."
            />
        </Form.Group>
        <Form.Group>
          <HCaptcha
            sitekey={hCaptchaSiteKey}
            onVerify={() => setVerified(true)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!verified}>Absenden</Button>
      </Form>
      <Footer />
    </Container>
  )
}
Home.propTypes = {
  hCaptchaSiteKey: PropTypes.string
}
