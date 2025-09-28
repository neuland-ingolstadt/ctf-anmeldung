import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Done() {
  const router = useRouter()
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    if (router.query.confirmed === 'true') {
      setIsConfirmed(true)
    }
  }, [router.query])

  return (
    <div className="container mx-auto max-w-4xl p-3">
      <Header />
      <div className="flex flex-col items-center justify-center h-full gap-6 my-6">
        {isConfirmed ? (
          <>
            <p className="text-xl font-bold text-green-600">
              Your email has been confirmed!
            </p>
            <p>
              Your CTF registration is now complete. You will receive a
              confirmation email shortly.
              <br />
              We will accept or deny your registration not later than 4 days
              before the event.
              <br />
              We are at your disposal for questions or concerns under{' '}
              <a href="mailto:ctf@neuland-ingolstadt.de">
                ctf@neuland-ingolstadt.de
              </a>
              .
            </p>
          </>
        ) : (
          <>
            <p className="text-xl font-bold">
              Please check your email to confirm your registration
            </p>
            <p>
              We've sent a confirmation link to your email address. Please click
              the link to complete your registration.
              <br />
              The confirmation link will expire in 24 hours.
              <br />
              If you don't see the email, please check your spam folder.
              <br />
              We are at your disposal for questions or concerns under{' '}
              <a href="mailto:ctf@neuland-ingolstadt.de">
                ctf@neuland-ingolstadt.de
              </a>
              .
            </p>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}
