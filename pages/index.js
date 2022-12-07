import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home () {
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

      <br />
      <br />

      <p>
        {genTitle('info')}
        <p>
          The event already took place in December 2022. This is just an event recap.
        </p>
        Capture The Flag is a competition where you can legally hack and exploit intentionally vulnerable programs or
        websites. You will solve tasks in the categories web, steganography, forensics, cryptography, osint (open source
        intelligence), reverse engineering, pwn/binary exploitation and miscellaneous tasks. For every hack, there is a
        flag that secures you points and a place on the scoreboard. You do not need any previous knowledge, the CTF
        includes tasks for all levels of experience.
        <br/>
        In addition to getting to know students with the same interests and having fun solving
        puzzles, there is of course also free food (lunch & dinner) + drinks and prizes for the best hackers. The
        participants get merch and a Neuland CTF T-Shirt.
      </p><br/>

      <p>
        {genTitle('data')}
        <b>Date</b>: 03.12.2022<br />
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
        <br />

        <b>Participants</b>: Limited to 40 <br />
        <b>Registrations</b>: More than 80 <br />
        <b>Team size</b>: 1 - 3 team members<br/>
        <br />

        <b>Writeup</b>: <a href="https://blog.neuland-ingolstadt.de/">Blogpost</a> <br />
        <b>Challenge Repository</b>: <a href="https://github.com/neuland-ingolstadt/Neuland-CTF-2022-Winter">GitHub</a> <br />
        <br />

        <b>Prizes and Winners</b>:
        <table>
          <tr>
            <td className="td-1">1st team</td>
            <td className="td-2">300 €</td>
            <td className="td-3">IHK-Zertifiziert</td>
          </tr>
          <tr>
            <td className="td-1">2nd team</td>
            <td className="td-2">200 €</td>
            <td className="td-3">&apos;;drop table teams;--</td>
          </tr>
          <tr>
            <td className="td-1">3rd team</td>
            <td className="td-2">100 €</td>
            <td className="td-3">Schwarzgurtmathematiker</td>
          </tr>
          <tr>
            <td className="td-1">4th - 8th team</td>
            <td className="td-2">15 € voucher for each team member</td>
            <td className="td-3">0xFF, H4CK3R5, CyberFrösche, welp, Zero Knowledge Exploit</td>
          </tr>
        </table>
      </p><br/>

      <p>
        {genTitle('sponsors')}
        <center>
          <p>
            Thanks again to our sponsors that made this event possible! <br />
          </p>
        </center>
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

      <br />

      <Footer />
    </Container>
  )
}
