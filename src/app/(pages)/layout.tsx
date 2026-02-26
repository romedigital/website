import Footer from "../(mainsite)/components/misc/Footer/Footer"
import Navbar from "../(mainsite)/components/misc/Navbar/Navbar"
import AppWrapper from "../(mainsite)/components/misc/AppWrapper"


export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return  (
    <AppWrapper elems={<><Navbar />{children}<Footer /></>} />)
}