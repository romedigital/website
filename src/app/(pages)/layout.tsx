import Footer from "../(mainsite)/components/misc/Footer/Footer"
import Navbar from "../(mainsite)/components/misc/Navbar/Navbar"
import "prismjs/themes/prism-okaidia.css"

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return  (<><Navbar />{children}<Footer /></>)
}