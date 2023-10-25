import styles from "./colosseum.module.css"
import Image from "next/image"

export default function Colosseum() {
  return (
    <section className={styles.section}>

        <h1 className={styles.tagline}><span>Beyond</span> the Colesseum<br />of Competitors</h1>

        <p>We not only create websites that look amazing, but also rank high with SEO, are extremely fast and ones that your visitors will love using!</p>

        <div className="center">
            <a href="#tempLink" className={`main-button ${styles.ctaButton}`}>Get Started <img src="./icons/arrow-right.svg" aria-hidden /></a>
        </div>

        <Image alt="Image of roman colosseum" className={styles.bgImg} src="/img/colosseum.png" width={1024} height={1024}/>
    </section>
  )
}
