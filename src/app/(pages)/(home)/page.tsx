import styles from './home.module.css'
import Header from '../../(mainsite)/components/homepage/Header/Header'
import RecentProjects from '../../(mainsite)/components/homepage/RecentProjects/RecentProjects'
import Colosseum from '../../(mainsite)/components/homepage/Colosseum/Colosseum'
import Testimonials from '../../(mainsite)/components/homepage/Testimonials/Testimonials'
import Workflow from '../../(mainsite)/components/homepage/Workflow/Workflow'
import Dedicated from '../../(mainsite)/components/homepage/Dedicated/Dedicated'
import FAQ from '../../(mainsite)/components/homepage/FAQ/FAQ'
import PopUpForm from '@/app/(mainsite)/components/misc/FreeEstimateForm/PopupForm/PopupForm'
import FeaturedTestimonial from '@/app/(mainsite)/components/homepage/FeaturedTestimonial/FeaturedTestimonial'

export default function Home() {
  return (
    <>
      <PopUpForm />
      <Header />
      <RecentProjects />
      <Colosseum />
      <FeaturedTestimonial />
      
      <Workflow />
      <Testimonials />
      <Dedicated />
      <FAQ />
    </>
  )
}
