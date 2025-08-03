import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { sendEmail } from '@/lib/azure'
import { type SubmissionData, submissionSchema } from '@/lib/schemas'
import CTFSignupConfirmationEmail from '@/mail/confirmSignUp'
import CTFSignupNotificationEmail from '@/mail/signUpNotification'

const mailTo = process.env.MAIL_TO || ''

const registrationEnabled = process.env.ENABLE_REGISTRATION === 'true'

async function verifyCaptcha(form: SubmissionData) {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }

  if (!registrationEnabled) {
    return res.status(403).json({ error: 'Registration is closed' })
  }

  try {
    const validationResult = await submissionSchema.safeParseAsync(req.body)
    if (!validationResult.success) {
      return res.status(400).json({
        error: 'Invalid form data',
        details: validationResult.error.issues,
      })
    }

    await verifyCaptcha(validationResult.data)

    const { name, email, course, shirt } = validationResult.data

    await sendEmail(
      validationResult.data.email,
      'Your CTF Registration',
      React.createElement(CTFSignupConfirmationEmail, {
        name,
        email,
        shirtSize: shirt,
        courseOfStudy: course,
      })
    )

    await sendEmail(
      mailTo,
      'New CTF Registration',
      React.createElement(CTFSignupNotificationEmail, {
        name,
        email: validationResult.data.email,
        shirtSize: shirt,
        courseOfStudy: course,
        timestamp: new Date().toISOString(),
      })
    )

    return res
      .status(200)
      .json({ success: true, message: 'Registration submitted successfully' })
  } catch (e) {
    console.error('Registration submission error:', e)
    const errorMessage = e instanceof Error ? e.message : 'Unknown error'
    return res.status(500).json({ error: errorMessage })
  }
}
