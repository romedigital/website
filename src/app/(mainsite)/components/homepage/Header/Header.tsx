"use client"
import { useEffect, useRef } from "react"
import styles from "./header.module.css"
import gsap from "gsap"
import logoData from "@/app/(mainsite)/data/logoDats"
import Link from "next/link"

export default function Header() {

  const mainTaglineSpanRef: any = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      gsap.to(mainTaglineSpanRef.current, {
        "--clip-path-amt": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power3.in",
        duration: 0.5
      })
    }, 500)
  }, [])

  const logoElems = logoData.map((src, i)=>{
    return <img src={src} aria-hidden key={i} className={styles.logoImg} />
  })

  return (
    <header className={`${styles.header} main-bg-top`}>

      <div className={styles.content}>

      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTagline}>We Design The<br /><span ref={mainTaglineSpanRef}>Best</span> Websites and Brands!</h1>

        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414 0L10 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13.5 9.086L18.586 4zM5 18v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0m5-4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm4 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m6-4a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"></path></svg><span>More Traffic!</span></div>
          <div className={styles.info}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="m323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-80.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2m22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h108.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8z"></path></svg><span>Higher Quality Leads</span></div>
          <div className={styles.info}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M14 9.846c-1-.923-3.667-1.23-3.667.616S14 11.385 14 13.23s-3 1.846-4 .615m2 .857V16m0-6.887V8M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"></path><path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path></g></svg><span>More Sales!</span></div>
        </div>

        <div className={styles.happyClients}>
          <span>100% Happy Clients</span>
          <div>
            <span className={styles.big}>5/5</span>
            <img src="/img/5-stars.webp" alt="five stars icon" />
          </div>
        </div>

      </div>
      

      <div className={styles.contentWrapper}>
        <img src="/img/portfolio/trexdetailing.webp" aria-hidden className={styles.mainImg} />
      
        <div className={styles.quote}><span>“Great job! Professional, fast and friendly services. I love my website! I can’t thank you enough.“</span></div>
      </div>

      </div>

      <div className={styles.logoWrapper}>
        {logoElems}
      </div>
       

        <img className={styles.mainBg} alt="Main background" src="/img/main-bg.webp" width={1024} height={1024}/>
    </header>
  )
}
