"use client"
import styles from "./colosseum.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Colosseum() {
  return (
    <section className={styles.section}>

        <h1 className={styles.tagline}><span>Beyond</span> the Colesseum<br />of Competitors</h1>

        <p>We not only create websites that look amazing, but win clients nonstop, rank high with SEO, are extremely fast, ones that your visitors will love using! We use modern and durable technology to ensure your website never get's left in the past.</p>

        <div className="center">
            <Link href="/contact" className={`main-button ${styles.ctaButton}`}>Get Started <img src="./icons/arrow-right.svg" aria-hidden /></Link>
        </div>

        <div className={styles.bgGradient}></div>
        <Image alt="Image of roman colosseum" className={styles.bgImg} src="/img/colosseum.png" width={1024} height={1024}/>
    </section>
  )
}
