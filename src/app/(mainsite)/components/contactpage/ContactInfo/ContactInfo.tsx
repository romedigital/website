import styles from "./contactinfo.module.css"
import Image from "next/image"

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
        <a href="https://m.me/romesites" target="_blank" className={styles.contactItem}>
            <img src="/icons/messenger_black.svg" alt="messenger icon" />
            <span>Click to chat!</span>
        </a>

        <a className={`${styles.emailLink} ${styles.contactItem}`} href="mailto:contact@romesites.co" target="_blank">
            <Image src="/icons/email.png" alt="email icon" width={400} height={400} />
            <span>contact@romesites.co</span>
        </a>

    </div>
  )
}
