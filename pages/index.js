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
        Capture the Flag is a competition where you can legally hack, you will solve tasks in the categories web,
        stego, forensic, crypto, osint, re and pwn.
        For every hack, there is a flag that secures you points and a place on the scoreboard.
        You do not need any previous knowledge, the CTF includes tasks for all levels of experience.
        In addition to getting to know students with the same interests and having fun solving puzzles, there is of
        course also free food/drinks and prizes for the best hackers.
      </p><br/>

      <p>
        {genTitle('data')}
        <b>Date</b>: 11.12.2021<br/>
        <b>Time</b>: Flags can be handed in from 10 a.m. to 6 p.m. after which a get-together with snacks is
        planned.<br/>
        <b>Place</b>: Technische Hochschule Ingolstadt in room G105<br/>
        <b>Prizes</b>: 1 place: 500€ 2/3 place: Hack the Box credits (teams are allowed, but prizes are only available
        for the best three lone fighters)<br/>
        <b>Corona</b>: Please note that this event will be held with a 3G+ concept! <br/>
      </p><br/>

      <p>
        {genTitle('sponsors')}
        <p>
          <b>- Main sponsor: Response (https://www.respon.se/)</b><br/>
          - STRACT ()<br/>
          - Securai (https://www.securai.de/) </p>
      </p>
      <br/>

      <p>
        {genTitle('registration')}
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
            <Form.Label>E-mail address:</Form.Label>
            <Form.Control
              name="email"
              type="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course:</Form.Label>
            <Form.Control
              name="course"
              type="text"
              placeholder="Computer Science 3rd semester, Bachelor's degree in Artificial Intelligence,..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>T-Shirt Size:</Form.Label>
            <Form.Control
              name="shirt"
              type="text"
              placeholder="S,M,L, ..."
            />
          </Form.Group>
          <Form.Group>
            <HCaptcha
              sitekey={hCaptchaSiteKey}
              onVerify={() => setVerified(true)}
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit" disabled={!verified} className="absend">Send</Button>
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
