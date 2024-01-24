import './style.css'
import "react-multi-carousel/lib/styles.css";
import "./vendor/prism.css"
import type { Metadata } from 'next'
import { Spectral, EB_Garamond, IBM_Plex_Sans } from 'next/font/google'
import Script from 'next/script';


const primaryFont = EB_Garamond({ subsets: ['latin'], weight: [ "400", "500", "600", "800"], display: "swap", variable: "--primary-font" })
const secondaryFont = Spectral({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800"], display: "swap", variable: "--secondary-font" })
const thirdFont = IBM_Plex_Sans({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "100"], display: "swap", variable: "--third-font" })

export const metadata: Metadata = {
  title: 'Small Business Web Design and Development | Rome Digital',
  description: 'Top Rated Website Development Agency. Strengthening business\' brands and converting prospects with websites.',

  openGraph: {
    title: "Small Business Web Design and Development | Rome Digital",
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
    title: "Small Business Web Design and Development | Rome Digital",
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
      
      <body className={`${primaryFont.variable} ${secondaryFont.variable} ${thirdFont.variable}`}>
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
     {children}</body>
    
<Script>
{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2588852987955922');
fbq('track', 'PageView');`}
</Script>
      
    </html>
  )
}
