import styles from "./navbar.module.css"

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

          <div className={styles.logo}>
            <img src="./img/logo.png" alt="Rome Digital Logo" className={styles.logoImg} />
            <span>Rome Digital</span>
          </div>

          <div className={styles.navLinks}>
            
            <menu>
              <li><a href="#tempLink">Testimonials</a></li>
              <li className={styles.seperator}>&bull;</li>
              <li><a href="tempLink">Contact</a></li>
              <li className={styles.seperator}>&bull;</li>
              <li><a href="tempLink">FAQ</a></li>
            </menu>

            <a href="#tempLink" className={styles.getStartedButton}>Get started!</a>
          </div>

        </div>
    </nav>
  )
}
