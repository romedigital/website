import styles from "./contactinfo.module.css"
import Image from "next/image"

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
        <a href="tel:7065121082" className={styles.contactItem}>
            <Image src="/icons/phone.png" alt="phone icon" width={400} height={400} />
            <span>(706) 512-1082</span>
        </a>

        <a className={`${styles.emailLink} ${styles.contactItem}`} href="mailto:contact@romedigital.co" target="_blank">
            <Image src="/icons/email.png" alt="email icon" width={400} height={400} />
            <span>contact@romedigital.co</span>
        </a>

    </div>
  )
}
