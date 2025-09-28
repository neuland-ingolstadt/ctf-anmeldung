import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { sendEmail } from '@/lib/azure'
import { verifyEmailConfirmationToken } from '@/lib/jwt'
import CTFSignupConfirmationEmail from '@/mail/confirmSignUp'
import CTFSignupNotificationEmail from '@/mail/signUpNotification'

const mailTo = process.env.MAIL_TO || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  }

  const { token } = req.query

  if (!token || typeof token !== 'string') {
    return res.redirect(
      302,
      '/error?message=Missing+or+invalid+confirmation+token.'
    )
  }

  try {
    const payload = verifyEmailConfirmationToken(token)

    if (!payload) {
      return res.redirect(
        302,
        '/error?message=Invalid+or+expired+confirmation+link.+Please+try+registering+again.'
      )
    }

    const { name, email, course, shirt } = payload

    // Send confirmation email to user
    await sendEmail(
      email,
      'Your CTF Registration Confirmed',
      React.createElement(CTFSignupConfirmationEmail, {
        name,
        email,
        shirtSize: shirt,
        courseOfStudy: course,
      })
    )

    // Send notification to admin
    await sendEmail(
      mailTo,
      'New CTF Registration Confirmed',
      React.createElement(CTFSignupNotificationEmail, {
        name,
        email,
        shirtSize: shirt,
        courseOfStudy: course,
        timestamp: new Date().toISOString(),
      })
    )

    // Redirect to success page
    return res.redirect(302, '/done?confirmed=true')
  } catch (error) {
    console.error('Email confirmation error:', error)
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    return res.redirect(
      302,
      `/error?message=An+error+occurred+during+confirmation:+${encodeURIComponent(errorMessage)}`
    )
  }
}
