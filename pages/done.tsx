import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Done() {
  return (
    <div className="container mx-auto max-w-4xl p-3">
      <Header />
      <div className="flex flex-col items-center justify-center h-full gap-6 my-6">
        <p className="text-xl font-bold">
          Your registration has been received. 😊
        </p>
        <p>
          You will not receive a confirmation email immediately. Thank you for
          your patience.
          <br />
          We will accept or deny your registration not later than 4 days before
          the event.
          <br />
          We are at your disposal for questions or concerns under{' '}
          <a href="mailto:ctf@neuland-ingolstadt.de">
            ctf@neuland-ingolstadt.de
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  )
}
