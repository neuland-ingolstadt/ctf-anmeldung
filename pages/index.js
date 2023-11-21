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
        <span className={styles.promptWhite}>{' '}./ctf-2023{' '}</span>
        <span className={styles.promptGrey}>--{label}</span>
      </h4>
    )
  }

  return (
    <Container className={[styles.container, 'p-3']}>

      <Header />
      <br></br>
      <br></br>

      {genTitle('info')}
      <div>
        Capture The Flag is a competition where you can legally hack and exploit intentionally vulnerable programs or
        websites. You will solve tasks in the categories web, steganography, blue team, cryptography, osint (open source
        intelligence), reverse engineering, pwn/binary exploitation and miscellaneous tasks. For every hack, there is a
        flag that secures you points and a place on the scoreboard. You do not need any previous knowledge, the CTF
        includes tasks for all levels of experience.
        <br/>
        In addition to getting to know students with the same interests and having fun solving
        puzzles, there is of course also free food (lunch & dinner) + drinks and prizes for the best hackers. Every
        participant will be rewarded with some merch and a Neuland CTF T-Shirt after the event. We will allow a
        maximum of 45 participants, so make sure to secure yourself a spot quickly.
      </div><br/>

      {genTitle('data')}
      <div>
        <b>Date</b>: 09.12.2023<br/>
        <b>Time schedule</b>:
          <table>
            <tbody>
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
            </tbody>
          </table>
        <b>Place</b>: Technische Hochschule Ingolstadt in room G215<br/>
        <b>Team size</b>: 1 - 3 team members<br/>
        <b>Prizes</b>:
          <table>
            <tbody>
              <tr>
                <td className="td-1">1st team</td>
                <td className="td-2">250 €</td>
              </tr>
              <tr>
                <td className="td-1">2nd team</td>
                <td className="td-2">150 €</td>
              </tr>
              <tr>
                <td className="td-1">3rd team</td>
                <td className="td-2">100 €</td>
              </tr>
              <tr>
                <td className="td-1">4th & 5th team</td>
                <td className="td-2">15 € voucher for each team member</td>
              </tr>
            </tbody>
          </table>
      </div><br/>

      {genTitle('sponsors')}
      <div>
        <span className="inline_design">
          <a href="https://www.mbda-deutschland.de/">
            <img src="/mbda-logo.svg" alt="MBDA logo" className="sponsor_mbda sponsor" />
          </a>
          <a href="https://www.securai.de/">
            <img src="/securai-logo.png" alt="Securai logo" className="sponsor_securai sponsor" />
          </a>
        </span>

        <span className="inline_design">
          <a href="https://www.isecng.de/">
            <img src="/isecng-logo.svg" alt="iSecNG logo" className="sponsor_isecng sponsor" />
          </a>
          <a href="https://www.donat-it.de/">
            <img src="/donat_it-logo.svg" alt="Donat IT logo" className="sponsor_donat_it sponsor" />
          </a>
        </span>
      </div><br/>

      {genTitle('registration')}
      <div>
        You can register for the event with the following form. The number of spots is limited. We will get back to you
        not later than 4 days before the event to confirm or decline your registration.<br/>
        The event is intended for the students at Technische Hochschule Ingolstadt. Therefore, these registrations will
        be accepted preferably.<br/>
        <br/>
        <Form method="post" action="api/submit">
          <Form.Group className="mb-3">
            <Form.Label>Name <sup>*</sup></Form.Label>
            <Form.Control
              name="name"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address <sup>*</sup></Form.Label>
            <Form.Control
              name="email"
              type="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Course of study <sup>*</sup></Form.Label>
            <Form.Control
              name="course"
              type="text"
              placeholder="Computer Science 3rd semester bachelor, ..."
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>T-Shirt size (unisex)</Form.Label>
            <Form.Select aria-label="T-Shirt size" name="shirt">
              <option>None selected</option>
              <option value="XXS">XXS</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="3XL">3XL</option>
              <option value="4XL">4XL</option>
              <option value="5XL">5XL</option>
            </Form.Select>
          </Form.Group>
          <br/>
          <p>
            The above data is required for the planning and execution of the Neuland CTF. Photographs will also be taken at the
            event. Further information on data processing can be found in the <a href="/privacy_policy.pdf" target="_blank" rel="noreferrer">privacy policy</a>.
          </p>
          <br/>
          <center>
            <Form.Group>
              <HCaptcha
                sitekey={hCaptchaSiteKey}
                onVerify={() => setVerified(true)}
              />
            </Form.Group>
          </center>
          <br></br>
          <center>
            <Button variant="primary" type="submit" disabled={!verified} className="absend">Send</Button>
          </center>
        </Form>
      </div>
      <br></br>
      <Footer/>
    </Container>
  )
}
Home.propTypes = {
  hCaptchaSiteKey: PropTypes.string
}
