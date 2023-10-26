import styles from "./dedicated.module.css"
import Image from "next/image"

export default function Dedicated() {
  return (
    <section className={styles.section}>
        <div className={styles.contentWrapper}>
            <h1>We are <span>dedicated</span> to your business’ success!</h1>
            <p>And we will do everything in our power to ensure that you succeed in the online realm. Our job is not done until you are satisfied with your product.</p>

            <div className={styles.point}>
                <Image src={"/icons/bug.png"} width={200} height={200} alt="Bug Icon" />
                <span>Errors/bugs are fixed free of charge.</span>
            </div>

            <div className={styles.point}>
                <Image src={"/icons/money.png"} width={200} height={200} alt="Money Icon" />
                <span>We will work with your budget.</span>
            </div>

            <div className={styles.point}>
                <Image src={"/icons/working.png"} width={200} height={200} alt="Working Man Icon" />
                <span>We will deliver the highest quality website possible.</span>
            </div>
        
        </div>

        <div className={styles.imgWrapper}>
            <Image src="/img/man_walking.png" alt="Greek Man Walking" width={465} height={994} />
        </div>
    </section>
  )
}
