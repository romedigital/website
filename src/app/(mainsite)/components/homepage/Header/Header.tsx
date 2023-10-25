import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={`${styles.header} main-bg-top`}>
        <h1 className={styles.mainTagline}>Let's build <span>your</span> digital empire!</h1>

        <p className={styles.secondTagline}>At Rome Digital, we craft online masterpieces that stand the test of time, and set you and your business apart from the masses.</p>

        <a href="#tempLink" className={`main-button ${styles.ctaButton}`}>Let's Start <img src="./icons/arrow-right.svg" aria-hidden /></a>

        <p className={styles.subTagline}>Websites that crush competition!
        <img src="./icons/sword.svg" aria-hidden /></p>
    </header>
  )
}
