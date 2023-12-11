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
        <span className={styles.promptWhite}>{' '}./ctf-2023{' '}</span>
        <span className={styles.promptGrey}>--{label}</span>
      </h4>
    )
  }

  return (
    <Container className={[styles.container, 'p-3']}>
      <Header/>

      <br/>
      <br/>

      {genTitle('info')}
      <div>
        The event already took place in December 2023. This is just an event recap.<br/>
        <br/>
        Capture The Flag is a competition where you can legally hack and exploit intentionally vulnerable programs or
        websites. You will solve tasks in the categories web, steganography, blue team, cryptography, osint (open source
        intelligence), reverse engineering, pwn/binary exploitation and miscellaneous tasks. For every hack, there is a
        flag that secures you points and a place on the scoreboard. You do not need any previous knowledge, the CTF
        includes tasks for all levels of experience.
        <br/>
        In addition to getting to know students with the same interests and having fun solving
        puzzles, there is of course also free food (lunch & dinner) + drinks and prizes for the best hackers. The
        participants get merch and a Neuland CTF T-Shirt.
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
              <td className="td-2">CTF competition time during which flags can be handed in</td>
            </tr>
            <tr>
              <td className="td-1">07:00 p.m. - 09:00 p.m.</td>
              <td className="td-2">Get together</td>
            </tr>
          </tbody>
        </table>
        <b>Place</b>: Technische Hochschule Ingolstadt in room G215<br/>
        <br/>

        <b>Participants</b>: Limited to 45<br/>
        <b>Registrations</b>: 90<br/>
        <b>Team size</b>: 1 - 3 team members<br/>
        <br/>

        <b>Writeup:</b> <a href="https://blog.neuland-ingolstadt.de/posts/neuland-ctf-12-2023/" target="_blank" rel="noreferrer">Blogpost</a> <br/>
        <b>Challenge Repository</b>: <a href="https://github.com/neuland-ingolstadt/Neuland-CTF-2023-Winter/" target="_blank" rel="noreferrer">GitHub</a>
        <br/>
        <br/>

        <b>Prizes and Winners:</b>
        <table>
          <tbody>
            <tr>
              <td className="td-1">1st team</td>
              <td className="td-2">250 €</td>
              <td className="td-3">nland&#123;s0lv3d&#125;</td>
            </tr>
            <tr>
              <td className="td-1">2nd team</td>
              <td className="td-2">150 €</td>
              <td className="td-3">CyberCyberCyberfrösche</td>
            </tr>
            <tr>
              <td className="td-1">3rd team</td>
              <td className="td-2">100 €</td>
              <td className="td-3">s.Lit.</td>
            </tr>
            <tr>
              <td className="td-1">4th & 5th team</td>
              <td className="td-2">15 € voucher for each team member</td>
              <td className="td-3">IHK-Zertifiziert & GuardianOfTheFlag</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>

      {genTitle('sponsors')}
      <div>
        <p>
          Thanks again to our sponsors that made this event possible! <br/>
        </p>
        <span className="inline_design">
          <a href="https://www.mbda-careers.de/" target="_blank" rel="noreferrer">
            <img src="/mbda-logo.svg" alt="MBDA logo" className="sponsor_mbda sponsor" />
          </a>
          <a href="https://www.securai.de/" target="_blank" rel="noreferrer">
            <img src="/securai-logo.png" alt="Securai logo" className="sponsor_securai sponsor" />
          </a>
        </span>

        <span className="inline_design">
        <a href="https://www.isecng.de/" target="_blank" rel="noreferrer">
          <img src="/isecng-logo.svg" alt="iSecNG logo" className="sponsor_isecng sponsor" />
        </a>
        <a href="https://www.donat-it.de/" target="_blank" rel="noreferrer">
          <img src="/donat_it-logo.svg" alt="Donat IT logo" className="sponsor_donat_it sponsor" />
        </a>
        </span>
      </div><br/>

      <br/>
      <br/>

      The participants of the event can find the information on data processing in the <a href="/privacy_policy.pdf" target="_blank" rel="noreferrer">privacy policy</a>.

      <Footer/>
    </Container>
  )
}
