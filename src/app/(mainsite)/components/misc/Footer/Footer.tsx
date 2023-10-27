import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={`${styles.mainFooter} main-bg-top`}>
        <div className="center">
          <Image src="/img/logo.png" alt="main logo" width={300} height={300} />
        </div>
        <p>Rome Digital - <span>All rights reserved</span></p>
    </footer>
  )
}
