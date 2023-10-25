import styles from './home.module.css'
import Header from './(mainsite)/components/homepage/Header/Header'
import RecentProjects from './(mainsite)/components/homepage/RecentProjects/RecentProjects'
import Colosseum from './(mainsite)/components/homepage/Colosseum/Colosseum'

export default function Home() {
  return (
    <>
      <Header />
      <RecentProjects />
      <Colosseum />
    </>
  )
}
