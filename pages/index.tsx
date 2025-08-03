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
        The event already took place in December 2023. This is just an event
        recap.
        <br />
        <br />
        Capture The Flag is a competition where you can legally hack and exploit
        intentionally vulnerable programs or websites. You will solve tasks in
        the categories web, steganography, blue team, cryptography, osint (open
        source intelligence), reverse engineering, pwn/binary exploitation and
        miscellaneous tasks. For every hack, there is a flag that secures you
        points and a place on the scoreboard. You do not need any previous
        knowledge, the CTF includes tasks for all levels of experience.
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
          <b>Date:</b> 09.12.2023
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
              <TableCell>Get together</TableCell>
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
            <b>Registrations:</b> 90
          </p>
          <p>
            <b>Team size:</b> 1-3 team members
          </p>
        </div>

        <div className="my-6">
          <p>
            <b>Blog Post:</b>{' '}
            <Link
              href="https://neuland-ingolstadt.de/blog/neuland-ctf-12-2023"
              target="_blank"
              rel="noreferrer"
            >
              Neuland CTF 2023
            </Link>
          </p>
        </div>
        <p className="mt-6 font-bold">Prizes and Winners:</p>
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
        </Table>
      </div>

      {registrationEnabled && <SignUpForm hCaptchaSiteKey={hCaptchaSiteKey} />}

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
