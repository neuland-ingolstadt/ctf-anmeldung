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

  function genTitle (label) {
    return (
      <h4>
        <span className={styles.promptWhite}>root</span>
        <span className={styles.promptGrey}>@</span>
        <span className={styles.promptWhite}>NEULAND</span>
        <span className={styles.promptGrey}>:~#</span>
        <span className={styles.promptWhite}>{' '}./ctf-2021{' '}</span>
        <span className={styles.promptRed}>--{label}</span>
      </h4>
    )
  }

  return (
    <Container className={[styles.container, 'p-3']}>

      <Header/>
      <br></br>
      <br></br>
      <p>
        {genTitle('info')}
        Capture the Flag ist ein Wettbewerb, bei dem man legal hacken kann. Es wird Aufgaben in der Kategorien
        web, stego, forensic, crypto, osint, re und pwn zu lösen geben.
        Für jeden richtigen Hack erhält man eine Flagge, die Punkte und einen Platz auf dem Scoreboard sichern.
        Hierfür benötigt man keine Vorkenntnisse, der CTF beinhaltet Aufgaben für alle Erfahrungsgerade.
        Neben dem Kennenlernen von Studierenden mit gleichen Interessen und dem Spaß beim Rätsel lösen gibt
        es natürlich auch Verpflegung und Preise für die besten Hacker.
      </p>

      <p>
        {genTitle('daten')}
        <b>Datum</b>: 11.12.2021<br />
        <b>Uhrzeit</b>: 10 bis 18 Uhr<br />
        <b>Ort</b>: Raum G105 in der Technische Hochschule Ingolstadt<br />
        <b>Teilnehmer</b>: maximal 40<br />
        <b>Teams</b>: sind erlaubt, aber ohne Wertung<br />
        <b>Preise</b>: Hack the Box Gift Cards<br />
      </p>

      <p>
        {genTitle('sponsoren')}
        Folgen bald.
      </p>

      <p>
        {genTitle('anmeldung')}
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
          <br></br>
          <Button variant="primary" type="submit" disabled={!verified} className="absend">Absenden</Button>
        </Form>
      </p>
      <br></br>
      <br></br>
      <Footer />
    </Container>
  )
}
Home.propTypes = {
  hCaptchaSiteKey: PropTypes.string
}
