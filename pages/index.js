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
        <span className={styles.promptWhite}>{' '}./ctf-2022-spring{' '}</span>
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
        Capture The Flag is a competition where you can legally hack and exploit intentionally
        vulnerable programs or websites.
        You will solve tasks in the categories web, steganography, forensics, cryptography, osint
        (open source intelligence), reverse engineering, pwn/binary exploitation and miscellaneous tasks.
        <br />
        For every hack, there is a flag that secures you points and a place on the scoreboard.
        You do not need any previous knowledge, the CTF includes tasks for all levels of experience.
        <br />
        In addition to getting to know students with the same interests and having fun solving
        puzzles, there is of course also free food/drinks and prizes for the best hackers.
      </p><br />

      <p>
        {genTitle('next')}
        The next Neuland CTF will take place in the winter semester 2022/2023!
      </p><br />

      <p>
        {genTitle('data')}
        <p>
          This event already took place in April 2022. <br />
        </p>

        <b>Date</b>: 02.04.2022<br />
        <b>Time</b>: 10 a.m. to 6 p.m. with a get-togther afterwards<br />
        <b>Place</b>: Technische Hochschule Ingolstadt<br />
        <br />

        <b>Participants</b>: 40 <br />
        <b>Writeup</b>: <a href="https://blog.neuland-ingolstadt.de/posts/neuland-ctf-04-2022/">Blogpost</a> <br />
        <b>Challenge Repository</b>: <a href="https://github.com/neuland-ingolstadt/Neuland-CTF-2022">GitHub</a> <br />
        <br />

        <b>Prizes and Winners</b>:
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">1st place</th>
              <td>500 €</td>
              <td>WebFreak, Crsi, Omikron</td>
            </tr>
            <tr>
              <th scope="row">2nd place</th>
              <td>300 £ Hack The Box Gift Card</td>
              <td>pr1celessR3act1on, Kenji</td>
            </tr>
            <tr>
              <th scope="row">3rd place</th>
              <td>100 £ Hack The Box Gift Card</td>
              <td>DarkTerminator, Giovanni Giorgio</td>
            </tr>
          </tbody>
        </table>
      </p><br />

      <p>
        {genTitle('sponsors')}
        <p>
          Thanks again to our sponsors which made this event possible! <br />
        </p>
        <img src="/sponsor-response.svg" className="main-sponsor" />
        <br />
        <img src="/sponsor-stract.svg" className="sponsor" />
        <img src="/sponsor-securai.svg" className="sponsor" />
        <img src="/sponsor-lus.svg" className="sponsor" />
      </p><br />

      <br />
      <br />

      <Footer />
    </Container>
  )
}
