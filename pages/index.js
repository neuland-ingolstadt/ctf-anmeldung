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
        <span className={styles.promptWhite}>{' '}./ctf-2022{' '}</span>
        <span className={styles.promptGrey}>--{label}</span>
      </h4>
    )
  }

  return (
    <Container className={[styles.container, 'p-3']}>

      <Header />
      <br></br>
      <br></br>

      <p>
        {genTitle('info')}
        Capture The Flag is a competition where you can legally hack and exploit intentionally vulnerable programs or
        websites. You will solve tasks in the categories web, steganography, forensics, cryptography, osint (open source
        intelligence), reverse engineering, pwn/binary exploitation and miscellaneous tasks. For every hack, there is a
        flag that secures you points and a place on the scoreboard. You do not need any previous knowledge, the CTF
        includes tasks for all levels of experience.
        <br/>
        In addition to getting to know students with the same interests and having fun solving
        puzzles, there is of course also free food (lunch & dinner) + drinks and prizes for the best hackers. Every
        participant will be rewarded with some merch and a Neuland CTF T-Shirt after the event. We will allow a
        maximum of 40 participants, so make sure to secure yourself a spot quickly.
      </p><br/>

      <p>
        {genTitle('data')}
        <b>Date</b>: 03.12.2022<br/>
        <b>Time schedule</b>:
          <table>
              <tr>
                <td className="td-1">10:30 a.m. - 11:00 a.m.</td>
                <td className="td-2">Opening and introduction</td>
              </tr>
              <tr>
                <td className="td-1">11:00 a.m. - 07:00 p.m.</td>
                <td className="td-2">CTF competition time during which flags can be handed in </td>
              </tr>
              <tr>
                <td className="td-1">07:00 p.m. - 09:00 p.m.</td>
                <td className="td-2">Get together</td>
              </tr>
          </table>
        <b>Place</b>: Technische Hochschule Ingolstadt in room G215<br/>
        <b>Team size</b>: 1 - 3 team members<br/>
        <b>Prizes</b>:
          <table>
            <tr>
              <td className="td-1">1st team</td>
              <td className="td-2">300 €</td>
            </tr>
            <tr>
              <td className="td-1">2nd team</td>
              <td className="td-2">200 €</td>
            </tr>
            <tr>
              <td className="td-1">3rd team</td>
              <td className="td-2">100 €</td>
            </tr>
            <tr>
              <td className="td-1">4th - 8th team</td>
              <td className="td-2">15 € voucher for each team member</td>
            </tr>
          </table>
      </p><br/>

      <p>
        {genTitle('sponsors')}
        <a href="https://cariad.technology/">
          <img src="/cariad-logo.svg" className="sponsor_cariad sponsor" />
        </a>

        <a href="https://www.donat-it.de/">
          <img src="/donat_it-logo.svg" className="sponsor_donat_it sponsor" />
        </a>
        <span className="inline_design">
          <a href="https://www.efs-auto.com/">
            <img src="/efs-logo.svg" className="sponsor_efs sponsor" />
          </a>
          <a href="https://www.securai.de/">
            <img src="/securai-logo.svg" className="sponsor_securai sponsor" />
          </a>
          <a href="https://cognizant-mobility.com/">
            <img src="/cognizant_mobility-logo.png" className="sponsor_cognizant_mobility sponsor" />
          </a>
        </span>
      </p><br/>

      <p>
        {genTitle('registration')}
        The registration is closed.
        Please come back next semester!
      </p>
      <br></br>
      <Footer/>
    </Container>
  )
}
Home.propTypes = {
  hCaptchaSiteKey: PropTypes.string
}
