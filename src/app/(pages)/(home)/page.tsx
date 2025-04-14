import Header from '../../(mainsite)/components/homepage/Header/Header'
import RecentProjects from '../../(mainsite)/components/homepage/RecentProjects/RecentProjects'
import Colosseum from '../../(mainsite)/components/homepage/Colosseum/Colosseum'
import Testimonials from '../../(mainsite)/components/homepage/Testimonials/Testimonials'
import FAQ from '../../(mainsite)/components/homepage/FAQ/FAQ'
import CalendarPopup from '@/app/(mainsite)/components/homepage/CalendarPopup/CalendarPopup'
import InfiniteRibbon from '@/app/(mainsite)/components/homepage/InfiniteRibbon/InfiniteRibbon'
import Problems from '@/app/(mainsite)/components/homepage/Problems/Problems'
import Commitment from '@/app/(mainsite)/components/homepage/Commitment/Commitment'
import Colosseum2 from '@/app/(mainsite)/components/homepage/Colosseum2/Colosseum2'

export default function Home() {
    
    const infiniteRibbonContent = <>
      <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden /> <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden /> <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden /> <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden /> <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden />
    </>

  return (
    <>
    {/* <CalendarPopup /> */}
    <Header />
    <RecentProjects />
    <Colosseum />
    <InfiniteRibbon content={infiniteRibbonContent} />
    <Testimonials />
    {/* <Problems /> */}
    <Commitment />
    <Colosseum2 />
    <InfiniteRibbon content={infiniteRibbonContent} />
    <FAQ />
    
    </>
  )
}
