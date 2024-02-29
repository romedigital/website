import Footer from "../(mainsite)/components/misc/Footer/Footer"
import Navbar from "../(mainsite)/components/misc/Navbar/Navbar"
import AppWrapper from "../(mainsite)/components/misc/AppWrapper"
import PopUpForm from "../(mainsite)/components/misc/FreeEstimateForm/PopupForm/PopupForm"

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return  (
    <AppWrapper elems={<><Navbar /> <PopUpForm />{children}<Footer /></>} />)
}