import '~/styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '~/components/header'
import Footer from '~/components/footer'

export const metadata: Metadata = {
  title: 'Atomionics',
  description: '',
}
export const dynamic = 'force-dynamic'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/title-logo.svg" type="image/png" sizes="any" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  )
}
