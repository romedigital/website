"use client"
import styles from "./colosseum.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Colosseum() {
  return (
    <section className={styles.section}>

        <h1 className={styles.tagline}><span>Unlike</span> the Colesseum<br />of Competitors</h1>

        <p>Do you want a website that looks like every other business' website on the market and just doesn't convert? Didn't think so. I am dedicated to building your unique brand and creating websites that stand apart and convert more than ever!</p>

        <div className="center">
            <Link href="/contact" className={`main-button ${styles.ctaButton}`}>Let's GO! <img src="./icons/arrow-right.svg" aria-hidden /></Link>
        </div>

        <div className={styles.bgGradient}></div>
        <Image alt="Image of roman colosseum" className={styles.bgImg} src="/img/colosseum.png" width={1024} height={1024}/>
    </section>
  )
}
