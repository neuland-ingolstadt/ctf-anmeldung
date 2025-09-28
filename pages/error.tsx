import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function ErrorPage() {
  const router = useRouter()
  const message = router.query.message as string

  return (
    <div className="container mx-auto max-w-4xl p-3">
      <Header />
      <div className="flex flex-col items-center justify-center h-full gap-6 my-6">
        <p className="text-xl font-bold text-red-600">
          Uff, an error has occurred.
        </p>
        {message && (
          <div className="bg-red-950 border border-red-800 rounded-md p-4 max-w-2xl">
            <p className="text-red-100">{message}</p>
          </div>
        )}
        <p className="text-center">
          Please try to register yourself again! If it is a permanent
          malfunction, we can be reached at <br />
          <a href="mailto:ctf@neuland-ingolstadt.de">
            ctf@neuland-ingolstadt.de
          </a>
          .
        </p>
        <Button onClick={() => router.push('/')}>Back to Registration</Button>
      </div>
      <Footer />
    </div>
  )
}
