import type { Metadata } from "next"
import styles from "./contact.module.css"
import Header from "@/app/(mainsite)/components/contactpage/Header/Header"
import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"
import ContactForm from "@/app/(mainsite)/components/contactpage/ContactForm/ContactForm"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Contact Page | Rome Digital",
    description: "Let's get started on building your digital empire through websites by Rome Digital"
}

export default function ContactPage(){
    return(
        <main className={styles.main}>
            <Header />
            <ContactInfo />
            <ContactForm />

            <Image className={styles.mainBg} src="/img/contact-bg.png" width={1024} height={1024} alt="Contact background image" />
        </main>
    )
}