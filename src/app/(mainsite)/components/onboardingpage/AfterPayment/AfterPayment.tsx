"use client"
import styles from "./afterpayment.module.css"
import { useEffect, useState } from "react"

export default function AfterPayment() {

  const [businessName, setBusinessName] = useState("")

  useEffect(()=>{
    setBusinessName((typeof window !== "undefined" && window.localStorage.getItem("business_name")) ? ` ${window.localStorage.getItem("business_name")}` : "")
  }, [])

  return (
        <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Thank's for Choosing Us{businessName}!</h1>

        <p className={styles.content}>We will now begin designing your website. We will keep in close contact with you through the whole process to make sure you get exactly what you want!
        </p>
        <div className="center">
            <a href="https://www.facebook.com/messages/t/130761123452165" className={`main-button ${styles.buttonWrapper}`}>Open Chat</a>
        </div>
        <img src="/img/colosseum.webp" alt="" className="bg-img" />
    <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
        </div>
  )
}