import './style.css'
import "react-multi-carousel/lib/styles.css";
import type { Metadata } from 'next'
import { Spectral, EB_Garamond } from 'next/font/google'
import Navbar from './(mainsite)/components/misc/Navbar/Navbar'
import Footer from './(mainsite)/components/misc/Footer/Footer'
import Script from 'next/script';


const primaryFont = EB_Garamond({ subsets: ['latin'], weight: [ "400", "500", "600", "800"], display: "swap", variable: "--primary-font" })
const secondaryFont = Spectral({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800"], display: "swap", variable: "--secondary-font" })

export const metadata: Metadata = {
  title: 'Top Rated Website Development Agency',
  description: 'Top Rated Website Development Agency. Strengthening business\' brands and converting prospects with websites.',

  openGraph: {
    title: "Top Rated Website Development Agency",
    description: "Top Rated Website Development Agency. Strengthening business\' brands and converting prospects with websites.",
    type: "website",
    images: [
      {
        url: 'https://www.romedigital.co/img/main-website-bg.jpg',
        width: 1920,
        height: 1080,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Top Rated Website Development Agency",
    description: "Top Rated Website Development Agency. Strengthening business\' brands and converting prospects with websites.",
    images: ['https://www.romedigital.co/img/main-website-bg.jpg']
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <img src="./img/main-website-bg.jpg" aria-hidden style={{display: "none"}} />
      <Navbar />{children}<Footer /></body>
      
    </html>
  )
}
