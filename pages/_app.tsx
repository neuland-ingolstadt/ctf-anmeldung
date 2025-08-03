import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Space_Grotesk as GoogleFont } from 'next/font/google'

const font = GoogleFont({
  subsets: ['latin'],
  variable: '--sans-font',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`font-sans dark ${font.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
