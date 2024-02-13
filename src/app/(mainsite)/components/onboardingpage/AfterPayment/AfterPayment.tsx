"use client"
import styles from "./afterpayment.module.css"
import { useEffect, useState } from "react"

export default function AfterPayment() {

  const [businessName, setBusinessName] = useState("")

  useEffect(()=>{
    setBusinessName((typeof window !== "undefined" && window.localStorage.getItem("business_name")) ? ` ${window.localStorage.getItem("business_name")}` : "")
  }, [])

  return (
    <>
        <h1 className={styles.title}>Thank's for joining{businessName}!</h1>
        <h3 className={styles.subtitle}>Now we can begin creating the website your business deserves!</h3>

        <p className={styles.content}>We will reach out to you very soon using the email we have on record for you. <br /><br />

        In the meantime, you can fill out the questionaire linked below so that we have enough information to create the website exactly how you want it.
         </p>

        <div className={styles.buttonWrapper}>
        <a target="_blank" href="https://form.jotform.com/232695090163154" className={`main-button ${styles.ctaButton}`}>Questionaire <img src="/icons/arrow-right.svg" aria-hidden /></a>
        </div>
    </>
  )
}
