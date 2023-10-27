import styles from "./navbar.module.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className={styles.mainNav}>
        <div className={styles.topbar}>
          <span className={styles.topbarHeadline}>Let’s start building your digital empire today!</span>

          <div className={styles.contactInfo}>
            <a  href="tel:7065121082" className={`${styles.phoneContact} ${styles.topbarLink}`}>
              <img src="./icons/phone-rounded.svg" aria-hidden={true} />
              <span>(706) 512-1082</span>
            </a>

            <a className={styles.topbarLink} href="https://www.facebook.com/rome.digital.dev/" target="_blank">
              <img src="./icons/facebook-rounded.svg" aria-hidden={true} />
            </a>

            <a target="_blank" className={styles.topbarLink} href="mailto:contact@romedigital.co">
              <img src="./icons/email-rounded.svg" aria-hidden={true} />
            </a>
          </div>
        </div>

        <div className={styles.mainContent}>

          <Link href="/" className={styles.logo}>
            <img src="./img/logo.png" alt="Rome Digital Logo" className={styles.logoImg} />
            <span>Rome Digital</span>
          </Link>

          <div className={styles.navLinks}>
            
            <menu>
            <li><Link href="/">Home</Link></li>
              <li className={styles.seperator}>&bull;</li>

              <li><Link href="/contact">Contact</Link></li>
              <li className={styles.seperator}>&bull;</li>

              <li><Link href="/#testimonialsHeading">Testimonials</Link></li>
              <li className={styles.seperator}>&bull;</li>
              
              <li><Link href="/#faqHeading">FAQ</Link></li>
            </menu>

            <a href="#tempLink" className={styles.getStartedButton}>Get started!</a>
          </div>

        </div>
    </nav>
  )
}
