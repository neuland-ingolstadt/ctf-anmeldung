import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface FormData {
  name: string
  email: string
  course: string
  shirt?: string
  'h-captcha-response': string
}

const registrationEnabled =
  process.env.NEXT_PUBLIC_ENABLE_REGISTRATION === 'true'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number.parseInt(process.env.MAIL_PORT || '587'),
  secure: process.env.MAIL_TLS !== undefined,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

function getSubject(_form: FormData): string {
  return 'Neue Anmeldung zum CTF'
}

function getBody(form: FormData): string {
  return `Es ist eine neue Anmeldung eingegangen

Name:\tE-Mail:\tStudiengang:\tT-Shirt Größe:
${form.name}\t${form.email}\t${form.course}\t${form.shirt || 'Nicht angegeben'}
`
}

async function verifyCaptcha(form: FormData): Promise<void> {
  const resp = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      response: form['h-captcha-response'],
      secret: process.env.HCAPTCHA_SECRET || '',
    }),
  })
  if (resp.status !== 200) {
    throw new Error('Can not reach hCaptcha backend')
  }
  const body = await resp.json()
  if (!body.success) {
    throw new Error('Invalid hCaptcha response')
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  if (!registrationEnabled) {
    return res.status(403).json({ message: 'Registration is closed' })
  }

  try {
    const form = req.body as FormData
    await verifyCaptcha(form)
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: form.email || undefined,
      subject: getSubject(form),
      text: getBody(form),
    })
    res.redirect(302, '../done')
  } catch (e) {
    console.error(e)
    const errorMessage = e instanceof Error ? e.message : 'Unknown error'
    res.redirect(302, `../error?message=${encodeURIComponent(errorMessage)}`)
  }
}
