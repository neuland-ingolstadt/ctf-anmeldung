import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  const router = useRouter()

  return (
    <div className="container mx-auto max-w-4xl p-3">
      <Header />
      <div className="flex flex-col items-center justify-center h-full gap-6 my-6">
        <p>
          If you are unable to attend the event, please let us know by clicking
          the button below. This helps us manage the event better and allows
          others to take your spot.
        </p>
        <Button
          className="text-white"
          onClick={() => router.push('/confirm-abmeldung')}
        >
          Cancel Registration
        </Button>
      </div>
      <Footer />
    </div>
  )
}
