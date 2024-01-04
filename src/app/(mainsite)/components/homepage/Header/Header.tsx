"use client"
import { useEffect, useRef } from "react"
import styles from "./header.module.css"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"

export default function Header() {

  const mainTaglineSpanRef: any = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      gsap.fromTo(mainTaglineSpanRef.current,{
        "--clip-path-amt":  "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      }, {
        "--clip-path-amt": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power3.in",
        duration: 0.5
      })
    }, 500)
  }, [])

  return (
    <header className={`${styles.header} main-bg-top`}>
        <h1 className={styles.mainTagline}>Small Business <span ref={mainTaglineSpanRef}>Website</span> Creation!</h1>

        <p className={styles.secondTagline}>No-Stress small business websites that get it done right the first time. Our sites will set you and your business apart from the masses, and get more clients, all while being extremely affordable. Reach out and let's take your business to the next level today!</p>

        <Link href="/contact" className={`main-button ${styles.ctaButton}`}>Let's Start! <img src="/icons/arrow-right.svg" aria-hidden /></Link>

        <p className={styles.subTagline}>Websites that crush competition!
        <img src="/icons/sword.svg" aria-hidden /></p>

        <Image className={styles.mainBg} alt="Main background" src="/img/main-bg.png" width={1024} height={1024}/>
    </header>
  )
}
