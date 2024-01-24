"use client"
import styles from "./dedicated.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Dedicated() {
  return (
    <section className={styles.section}>
        <div className={styles.contentWrapper}>
            <h1>We are <span>dedicated</span> to your business’ success!</h1>
            <p>Your success is our success, and we want to see everyone succeed in their business. Let's create your business the site it deserves, and set your brand apart!</p>

            <div className={styles.point}>
                <Image src={"/icons/bug.png"} width={200} height={200} alt="Bug Icon" />
                <span>Revisions and maintenance are included!</span>
            </div>

            <div className={styles.point}>
                <Image src={"/icons/money.png"} width={200} height={200} alt="Money Icon" />
                <span>Extremely affordable monthly plan</span>
            </div>

            <div className={styles.point}>
                <Image src={"/icons/working.png"} width={200} height={200} alt="Working Man Icon" />
                <span>Made to strengthen your branding!</span>
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
