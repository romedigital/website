"use client"

import styles from "./footer.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <img src="/img/main-logo-text-highlight.webp" width={512} height={512} className={styles.logo} alt="Main Logo"/>

        <div className={styles.links}>
          <aside>
              <h3 className={styles.listTitle}>Quick Links</h3>
              <ul className={styles.list}>
                
                <li className={styles.listItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/blog">Blog</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/contact">Contact</Link>
                </li>

              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Categories</h3>
              <ul className={styles.list}>

                <span className={styles.listItem}>Website Design</span>
                <span className={styles.listItem}>Website Development</span>
                <span className={styles.listItem}>Business Branding Agency</span>
              
              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Contact</h3>
              <ul className={styles.list}>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path></svg>
                  <a href="https://www.facebook.com/rome.digital.dev/" target="_blank">rome.digital.dev</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>
                  <a href="mailto:contact@romedigital.co" target="_blank">contact@romedigital.co</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
                  <a href="https://google.com" target="_blank">2200, E. Hermitage RD Kingston GA</a>
                </aside>

              </ul>
            </aside>
          </div>

      </div>

      <div className={styles.copyright}>© Copyright 2023 to Present - <a href="https://www.romedigital.co" target="_blank">Rome Digital</a></div>
        
       
    </footer>
  )
}
