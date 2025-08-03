import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl p-3">
      <Header />
      <div className="flex flex-col items-center justify-center h-full gap-6 my-6">
        <p className="abmelden text-xl font-bold">Sad to see you go :(</p>
        <p>
          You have successfully canceled your registration. If you have any
          questions or concerns, please feel free to reach out to us.
        </p>
      </div>
      <Footer />
    </div>
  )
}
