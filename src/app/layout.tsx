import './style.css'
import "react-multi-carousel/lib/styles.css";
import type { Metadata } from 'next'
import { Spectral, EB_Garamond } from 'next/font/google'
import Navbar from './(mainsite)/components/misc/Navbar/Navbar'
import Footer from './(mainsite)/components/misc/Footer/Footer'
import Head from 'next/head';

const primaryFont = EB_Garamond({ subsets: ['latin'], weight: [ "400", "500", "600", "800"], display: "swap", variable: "--primary-font" })
const secondaryFont = Spectral({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800"], display: "swap", variable: "--secondary-font" })

export const metadata: Metadata = {
  title: 'Rome Digital | Top Rated Website Development Agency',
  description: 'Top Rated Website Development Agency. Strengthening business\' brands and converting prospects with websites.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <Head>

  <meta property="og:url" content="https://www.romedigital.co"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Rome Digital | Top Rated Website Development Agency"/>
  <meta property="og:description" content="Top Rated Website Development Agency. Strengthening business\' brands and converting prospects with websites."/>
  <meta property="og:image" content="https:///www.romedigital.co/img/logo-banner-full.jpg"/>

  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:domain" content="https://www.romedigital.co"/>
  <meta property="twitter:url" content="https://www.romedigital.co"/>
  <meta name="twitter:title" content="Rome Digital | Top Rated Website Development Agency"/>
  <meta name="twitter:description" content="Top Rated Website Development Agency. Strengthening business\' brands and converting prospects with websites."/>
  <meta name="twitter:image" content="https://www.romedigital.co/img/logo-banner-full.jpg"/>


      </Head>
      
      <body className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <Navbar />{children}<Footer /></body>
      
    </html>
  )
}
