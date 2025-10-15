import { NextResponse } from 'next/server'

export function middleware() {

  const siteDisabled = process.env.DISABLE_SITE === 'true'
  
  if (siteDisabled) {
    return NextResponse.redirect('https://neuland-ingolstadt.de')
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}