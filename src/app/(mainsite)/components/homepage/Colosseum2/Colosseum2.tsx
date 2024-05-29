"use client"
import styles from "./colosseum.module.css"
import Portfolio2 from "../Portfolio2/Portfolio2"
import portfolioData2 from "@/app/(mainsite)/data/portfolioData2"

export default function Colosseum2() {

  return (
    <section className={styles.section}>

        <h1 className="main-heading">Even Mor<span className="helmet">e</span></h1>
        <h2 className={styles.subTagline}>See more of our projects!</h2>

        <Portfolio2 portfolioData={portfolioData2} />

        <h1 className={styles.secondTagline}>Be the next one!</h1>
        <div className="center">

          <a href="https://www.facebook.com/messages/t/130761123452165" target="_blank" style={{color: "white", fontFamily: "sans-serif"}} className={`main-button ${styles.ctaButton}`}>Let's Get Started!</a>
        </div>


        <div className={styles.bgGradient}></div>
        <img alt="Image of roman colosseum" className={styles.bgImg} src="/img/colosseum.webp" width={1024} height={1024}/>
    </section>
  )
}
