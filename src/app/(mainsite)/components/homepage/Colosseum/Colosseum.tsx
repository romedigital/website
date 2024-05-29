"use client"
import styles from "./colosseum.module.css"
import Portfolio from "../Portfolio/Portfolio"
import portfolioData from "@/app/(mainsite)/data/portfolioData"

export default function Colosseum() {

  return (
    <section className={styles.section}>

        <h1 className="main-heading">Portfoli<span className="helmet">o</span></h1>
        <h2 className={styles.subTagline}>Setting the Bar!</h2>

        <Portfolio portfolioData={portfolioData} />

        <h1 className={styles.secondTagline}>And Many More!</h1>
        <div className="center">

        <a href="https://www.facebook.com/messages/t/130761123452165" target="_blank" style={{color: "white", fontFamily: "sans-serif"}} className={`main-button ${styles.ctaButton}`}>Let's Get Started!</a>
        </div>


        <div className={styles.bgGradient}></div>
        <img alt="Image of roman colosseum" className={styles.bgImg} src="/img/colosseum.webp" width={1024} height={1024}/>
    </section>
  )
}
