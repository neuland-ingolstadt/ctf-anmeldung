import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home () {
  return (
    <Container className={[styles.container, 'p-3']}>

      <Header />
      <p className="abmelden">
        Sad to see you go :(
      </p>
      <Footer/>
    </Container>
  )
}