import styles from "./header.module.css"
import Image from "next/image"

export default function Header() {
  return (
    <header className={styles.header}>
        <div className="center">
            <div className={styles.headingWrapper}>
              <h1>Let’s <span>Start!</span></h1>
              <Image src="/icons/pen.png" width={500} height={500} alt="Pen Icon" />
            </div>
        </div>
        <div className="center">
          <p>Let’s begin transforming your online presence, we can’t wait to hear from you!</p>
        </div>
    </header>
  )
}
