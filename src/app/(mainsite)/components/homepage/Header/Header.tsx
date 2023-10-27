"use client"
import { useEffect, useRef } from "react"
import styles from "./header.module.css"
import gsap from "gsap"
import Image from "next/image"

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
        <h1 className={styles.mainTagline}>Let's build <span ref={mainTaglineSpanRef}>your</span> digital empire!</h1>

        <p className={styles.secondTagline}>At Rome Digital, we craft online masterpieces that stand the test of time, and set you and your business apart from the masses.</p>

        <a href="#tempLink" className={`main-button ${styles.ctaButton}`}>Let's Start <img src="./icons/arrow-right.svg" aria-hidden /></a>

        <p className={styles.subTagline}>Websites that crush competition!
        <img src="./icons/sword.svg" aria-hidden /></p>

        <Image className={styles.mainBg} alt="Main background" src="/img/main-bg.png" width={1024} height={1024}/>
    </header>
  )
}
