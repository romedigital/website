"use client"
import styles from "./dedicated.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Dedicated() {
  return (
    <section className={styles.section}>
        <div className={styles.contentWrapper}>
            <h1>I am <span>dedicated</span> to your business’ success!</h1>
            <p>And I will do everything in my power to ensure that you succeed in the online realm. My job is not done until you are satisfied with your website!</p>

            <div className={styles.point}>
                <Image src={"/icons/bug.png"} width={200} height={200} alt="Bug Icon" />
                <span>Errors/bugs are fixed free of charge.</span>
            </div>

            <div className={styles.point}>
                <Image src={"/icons/money.png"} width={200} height={200} alt="Money Icon" />
                <span>I will work with your budget.</span>
            </div>

            <div className={styles.point}>
                <Image src={"/icons/working.png"} width={200} height={200} alt="Working Man Icon" />
                <span>I will deliver the highest quality website possible.</span>
            </div>

        <div className={styles.ctaButtonWrapper}>
            <Link href="/contact" className={`main-button ${styles.ctaButton}`}>Let's Start! <img src="/icons/arrow-right.svg" aria-hidden /></Link>
        </div>
        
        </div>
        

        <div className={styles.imgWrapper}>
            <Image src="/img/man_walking.png" alt="Greek Man Walking" width={465} height={994} />
        </div>
        
    </section>
  )
}
