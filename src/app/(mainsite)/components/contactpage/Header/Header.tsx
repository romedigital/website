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
          <p>Let’s create your business' new website together, we can't wait to help you reach your goals!</p>
        </div>
    </header>
  )
}
