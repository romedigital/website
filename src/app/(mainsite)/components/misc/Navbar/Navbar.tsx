"use client"

import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef } from "react"


export default function Navbar() {

  const navLinksRef: any = useRef()
  const isMenuOpen: any = useRef()
  const hamburgerMenuRef: any = useRef()
  isMenuOpen.current = false

  function toggleMenu(){
    if(!isMenuOpen.current){
      isMenuOpen.current = true
      navLinksRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      hamburgerMenuRef.current.style.scale = "0.8"
    }else{
      isMenuOpen.current = false
      hamburgerMenuRef.current.style.scale = "1"
      navLinksRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)"
      
    }
  }

  useEffect(()=>{

    window.addEventListener("click", (evt)=>{
      // @ts-ignore
      const currentID = evt.target.id || "";
      if((isMenuOpen.current == true) && (currentID !== "hamburgerMenu")&& (currentID !== "navLinksMenu")){
        toggleMenu()
      }
    })

  }, [])

  return (
    <nav className={styles.mainNav}>
        <div className={styles.topbar}>
          <span className={styles.topbarHeadline}>Let’s start building your digital empire today!</span>

          <div className={styles.contactInfo}>
            <a  href="tel:7065121082" className={`${styles.phoneContact} ${styles.topbarLink}`}>
              <img src="./icons/phone-rounded.svg" aria-hidden={true} />
              <span>(706) 512-1082</span>
            </a>

            <a className={styles.topbarLink} href="https://www.facebook.com/rome.digital.dev/" target="_blank">
              <img src="./icons/facebook-rounded.svg" aria-hidden={true} />
            </a>

            <a target="_blank" className={styles.topbarLink} href="mailto:contact@romedigital.co">
              <img src="./icons/email-rounded.svg" aria-hidden={true} />
            </a>
          </div>
        </div>

        <div className={styles.mainContent}>

          <Link href="/" className={styles.logo}>
            <img src="./img/logo.png" alt="Rome Digital Logo" className={styles.logoImg} />
            <span>Rome Digital</span>
          </Link>

          <div className={styles.navLinks}>
            
            <menu ref={navLinksRef} id="navLinksMenu">
            <li><Link href="/">Home</Link></li>
              <li className={styles.seperator}>&bull;</li>

              <li><Link href="/contact">Contact</Link></li>
              <li className={styles.seperator}>&bull;</li>

              <li><Link href="/blog">Blog</Link></li>
              <li className={styles.seperator}>&bull;</li>
              
              <li><Link href="/#faqHeading">FAQ</Link></li>
            </menu>
            <div className={styles.getStartedWrapper}>
              <Link href="/contact" className={styles.getStartedButton}>Get started!</Link>
              <button ref={hamburgerMenuRef} id="hamburgerMenu" onClick={toggleMenu} className={styles.hamburgerMenu}></button>
            </div>
          </div>

        </div>
    </nav>
  )
}
