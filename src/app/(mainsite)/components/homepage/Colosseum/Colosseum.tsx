"use client"
import styles from "./colosseum.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Colosseum() {
  return (
    <section className={styles.section}>

        <h1 className={styles.tagline}><span>What</span> We Do...</h1>

        <p>We focus on creating websites for small businesses that builds trust with your potential clients, and gains you MORE customers. We write each line of code by hand to make sure your site runs smoothly, bringing in more customers and revenue for your business.</p>

        <div className="center">
            <Link href="/contact" className={`main-button ${styles.ctaButton}`}>Let's GO! <img src="/icons/arrow-right.svg" aria-hidden /></Link>
        </div>

        <div className={styles.bgGradient}></div>
        <Image alt="Image of roman colosseum" className={styles.bgImg} src="/img/colosseum.png" width={1024} height={1024}/>
    </section>
  )
}
