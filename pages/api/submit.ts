import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { sendEmail } from '@/lib/azure'
import { generateEmailConfirmationToken } from '@/lib/jwt'
import { type SubmissionData, submissionSchema } from '@/lib/schemas'
import CTFSignupEmailConfirmation from '@/mail/emailConfirmation'

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

    // Generate confirmation token
    const confirmationToken = generateEmailConfirmationToken({
      name,
      email,
      course,
      shirt,
    })

    // Create confirmation URL
    const confirmationUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/api/confirm-email?token=${confirmationToken}`

    // Send email confirmation
    await sendEmail(
      email,
      'Please confirm your CTF registration',
      React.createElement(CTFSignupEmailConfirmation, {
        name,
        confirmationUrl,
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
