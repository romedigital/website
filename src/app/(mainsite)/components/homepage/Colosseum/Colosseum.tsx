"use client"
import styles from "./colosseum.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Colosseum() {
  return (
    <section className={styles.section}>

        <h1 className={styles.tagline}><span>Unlike</span> the Colesseum<br />of Competitors</h1>

        <p>Do you want a website that looks like every other business on the market? Or a website that just doesn't convert? Luckily we solve both! Every website is custom-made to compliment and strengthen YOUR brand, and use proven techniques to get more clients to convert than ever!</p>

        <div className="center">
            <Link href="/contact" className={`main-button ${styles.ctaButton}`}>Get Started <img src="./icons/arrow-right.svg" aria-hidden /></Link>
        </div>

        <div className={styles.bgGradient}></div>
        <Image alt="Image of roman colosseum" className={styles.bgImg} src="/img/colosseum.png" width={1024} height={1024}/>
    </section>
  )
}
