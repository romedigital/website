"use client"
import styles from "./colosseum.module.css"
import Portfolio from "../Portfolio/Portfolio"
import portfolioData from "@/app/(mainsite)/data/portfolioData"
import { useContext } from "react"
import { AppContext } from "../../misc/appContext"

export default function Colosseum() {
  const {openForm} = useContext(AppContext)

  return (
    <section className={styles.section}>

        <h1 className="main-heading">Portfoli<span className="helmet">o</span></h1>
        <h2 className={styles.subTagline}>Setting the Bar!</h2>

        <Portfolio portfolioData={portfolioData} />

        <h1 className={styles.secondTagline}>And Many More!</h1>
        <div className="center">

          <button onClick={openForm} style={{color: "white"}} className={`main-button ${styles.ctaButton}`}>Book a Call With Me</button>
        </div>


        <div className={styles.bgGradient}></div>
        <img alt="Image of roman colosseum" className={styles.bgImg} src="/img/colosseum.webp" width={1024} height={1024}/>
    </section>
  )
}
