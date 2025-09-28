import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required')
}

export interface EmailConfirmationPayload {
  email: string
  name: string
  course: string
  shirt?: string
  type: 'email_confirmation'
}

export function generateEmailConfirmationToken(data: Omit<EmailConfirmationPayload, 'type'>): string {
  const payload: EmailConfirmationPayload = {
    ...data,
    type: 'email_confirmation'
  }
  
  // Token expires in 24 hours
  return jwt.sign(payload, JWT_SECRET, { 
    expiresIn: '24h',
    issuer: 'ctf-anmeldung',
    audience: 'email-confirmation'
  })
}

export function verifyEmailConfirmationToken(token: string): EmailConfirmationPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: 'ctf-anmeldung',
      audience: 'email-confirmation'
    }) as EmailConfirmationPayload
    
    if (decoded.type !== 'email_confirmation') {
      throw new Error('Invalid token type')
    }
    
    return decoded
  } catch (error) {
    console.error('JWT verification failed:', error)
    return null
  }
}