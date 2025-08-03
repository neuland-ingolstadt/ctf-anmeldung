import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function ErrorPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto max-w-4xl p-3">
      <Header />
      <div className="flex flex-col items-center justify-center h-full gap-6 my-6">
        <p className="text-xl font-bold">Uff, an error has occurred.</p>
        <p>
          Please try to register yourself again! If it is a permanent
          malfunction, we can be reached at{' '}
          <a href="mailto:ctf@neuland-ingolstadt.de">
            ctf@neuland-ingolstadt.de
          </a>
          .
        </p>
        <p>{router.query.message}</p>
      </div>
      <Footer />
    </div>
  )
}
