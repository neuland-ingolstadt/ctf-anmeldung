import Link from 'next/link'

export default function Footer() {
  return (
    <div className="text-muted-foreground mt-32 flex flex-col items-center justify-center">
      <Link
        href="https://neuland-ingolstadt.de/legal/impressum/"
        target="_blank"
        rel="noreferrer"
      >
        Imprint
      </Link>
      <Link
        href="https://neuland-ingolstadt.de/legal/datenschutz/"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </Link>
    </div>
  )
}
