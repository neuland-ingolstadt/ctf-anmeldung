import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { Space_Grotesk as GoogleFont } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/themeProvider'

const font = GoogleFont({
  subsets: ['latin'],
  variable: '--sans-font',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" forcedTheme="dark">
      <main className={`font-sans ${font.className}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
