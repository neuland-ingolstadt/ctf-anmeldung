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

            <Header/>
            <br></br>
            <br></br>
            <p>
                admin@NEULAND:~$ ./ctf-2021 -info
                <br></br>
                Capture the Flag ist ein Wettbewerb, bei dem man legal hacken kann, du wirst Aufgaben in der Kategorien
                web, stego, forensic, crypto, osint, re und pwn lösen.
                Für jeden richtigen Hack gibt es eine Flagge, die dir Punkte und einen Platz auf dem Scoreboard sichert.
                Hierfür benötigt ihr keine Vorkenntnisse, der CTF beinhaltet Aufgaben für alle Erfahrungsgerade.
                Neben dem Kennenlernen von Studierenden mit gleichen Interessen und dem Spaß beim Rätsel lösen gibt
                es natürlich auch kostenloses Essen/Trinken und Preise für die besten Hacker.
            </p>

            <p>
                admin@NEULAND:~$ ./ctf-2021 -wann
                <br></br>
                Am 11.12.2021 von 10 bis 18 Uhr.
            </p>

            <p>
                admin@NEULAND:~$ ./ctf-2021 -wo
                <br></br>
                An der Technische Hochschule Ingolstadt im Raum G105.
            </p>

            <p>
                admin@NEULAND:~$ ./ctf-2021 -wer
                <br></br>
                Alle THI Studenten sind herzlich eingeladen, es können bis zu 40 Personen teilnehmen. Teams sind
                erlaubt qualifizieren sich jedoch nicht für das Gewinnen von Preisen.
            </p>

            <p>
                admin@NEULAND:~$ ./ctf-2021 -sponsoren
                <br></br>
                Folgen bald.
            </p>

            <p>
                admin@NEULAND:~$ ./ctf-2021 -anmeldung
                <br></br>
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
            <Footer/>
        </Container>
  )
}
Home.propTypes = {
  hCaptchaSiteKey: PropTypes.string
}
