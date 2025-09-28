import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import Sponsors from '@/components/Sponsors'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SignUpForm from '../components/SignUpForm'
import Title from '../components/Title'

interface HomeProps {
  hCaptchaSiteKey: string
  registrationEnabled: boolean
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  _ctx
) => {
  return {
    props: {
      hCaptchaSiteKey: process.env.HCAPTCHA_SITEKEY || '',
      registrationEnabled: process.env.ENABLE_REGISTRATION === 'true',
    },
  }
}

export default function Home({
  hCaptchaSiteKey,
  registrationEnabled,
}: HomeProps) {
  return (
    <div className="container mx-auto max-w-4xl p-3">
      <Header />
      <br />
      <br />
      <Title label="info" />
      <div>
        Join us for the Neuland CTF Winter 2025 - our third Capture The Flag
        event!
        <br />
        <br />
        Capture The Flag is a competition where you can legally hack and exploit
        intentionally vulnerable programs or websites. You will solve tasks in
        the categories web, steganography, blue team, cryptography, osint (open
        source intelligence), reverse engineering, pwn/binary exploitation,
        artificial intelligence and miscellaneous tasks. For every hack, there
        is a flag that secures you points and a place on the scoreboard. You do
        not need any previous knowledge, the CTF includes tasks for all levels
        of experience.
        <br />
        In addition to getting to know students with the same interests and
        having fun solving puzzles, there is of course also free food (lunch &
        dinner) + drinks and prizes for the best hackers. The participants get
        merch and a Neuland CTF T-Shirt.
      </div>
      <br />
      <Title label="data" />
      <div>
        <p>
          <b>Date:</b> 06.12.2025
        </p>
        <Table className="my-6">
          <TableCaption>
            The time schedule is subject to change. Please check the website
            closer to the event date.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>10:30 a.m. - 11:00 a.m.</TableCell>
              <TableCell>Opening and introduction</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>11:00 a.m. - 07:00 p.m.</TableCell>
              <TableCell>
                CTF competition time during which flags can be handed in
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>07:00 p.m. - 09:00 p.m.</TableCell>
              <TableCell>Get together session with sponsors</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          <b>Place:</b> Technische Hochschule Ingolstadt in room G215
        </p>
        <div className="my-6">
          <p>
            <b>Participants:</b> Limited to 45 participants.
          </p>
          <p>
            <b>Registration deadline:</b> Approximately 2 weeks before the event
          </p>
          <p>
            <b>Team size:</b> 1-3 team members
          </p>
          <p>
            <b>Priority:</b> Students from the Faculty of Computer Science are
            preferred
          </p>
        </div>

        <div className="my-6">
          <p>
            <b>Previous CTF:</b>{' '}
            <Link
              href="https://neuland-ingolstadt.de/blog/neuland-ctf-12-2023"
              target="_blank"
              rel="noreferrer"
            >
              Neuland CTF 2023 Blog Post
            </Link>
          </p>
        </div>
        <p className="mt-6 font-bold">What to expect:</p>
        <ul className="mb-6 list-disc list-outside pl-6">
          <li>
            <b>Categories:</b> Web, Steganography, Blue Team, Cryptography,
            OSINT, Reverse Engineering, PWN/Binary Exploitation, AI (Artificial
            Intelligence), and Miscellaneous
          </li>
          <li>
            <b>New this year:</b> Expanded AI category with focus on artificial
            intelligence challenges
          </li>
          {/* <li>
            <b>Free food:</b> Lunch and dinner provided by catering
          </li> */}
          <li>
            <b>Prizes:</b> 1st place: 250€, 2nd place: 150€, 3rd place: 100€,
            plus vouchers for top
          </li>
          <li>
            <b>Networking:</b> Meet with sponsors during the get-together
            session
          </li>
          <li>
            <b>Merch:</b> All participants receive Neuland CTF merchandise and
            T-shirt
          </li>
        </ul>

        {/* <p className="mt-6 font-bold">Prizes and Winners:</p>
        <Table className="mb-6">
          <TableHeader>
            <TableRow>
              <TableHead>Place</TableHead>
              <TableHead>Prize</TableHead>
              <TableHead>Winners</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1st team</TableCell>
              <TableCell>250 €</TableCell>
              <TableCell>{'nland{s0lv3d}'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2nd team</TableCell>
              <TableCell>150 €</TableCell>
              <TableCell>CyberCyberCyberfrösche</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3rd team</TableCell>
              <TableCell>100 €</TableCell>
              <TableCell>s.Lit.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4th & 5th team</TableCell>
              <TableCell>15 € voucher for each team member</TableCell>
              <TableCell>IHK-Zertifiziert & GuardianOfTheFlag</TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
      </div>

      {registrationEnabled ? (
        <SignUpForm hCaptchaSiteKey={hCaptchaSiteKey} />
      ) : (
        <div className="my-8 p-8 pt-0 border border-primary bg-primary/10 rounded-lg">
          <Title label="registration" />
          <p className="text-gray-300">
            Registration is not yet open. It will be available closer to the
            event date.
            <br />
            Follow us for updates on when registration opens!
          </p>
        </div>
      )}

      <Sponsors />

      <p>
        The participants of the event can find the information on data
        processing in the{' '}
        <Link href={'/privacy_policy.pdf'} target="_blank" rel="noreferrer">
          privacy policy
        </Link>
        .
      </p>
      <Footer />
    </div>
  )
}
