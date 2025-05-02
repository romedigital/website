"use client"
import DisplaySteps from "../DisplaySteps/DisplaySteps"
import styles from "./afterpayment.module.css"
import { useEffect, useState } from "react"

export default function AfterPayment() {

  const [businessName, setBusinessName] = useState("")

  useEffect(()=>{
    setBusinessName((typeof window !== "undefined" && window.localStorage.getItem("business_name")) ? ` ${window.localStorage.getItem("business_name")}` : "")
  }, [])

  return (
    <>
        <div className={styles.contentWrapper}>
          <DisplaySteps currentSection={2} />
        <h1 className={styles.title}>Thank's for choosing us to be a key part of your business!</h1>

        <p className={styles.content}>Send us a quick message on messenger at the link below, and tell us your business name. We will now begin designing your website and keep in close contact with you through the whole process to make sure you get exactly what you want!
        </p>
        <div className="center">
            <a href="https://m.me/romesites" className={`main-button ${styles.buttonWrapper}`}>Open Chat</a>
        </div>
        
        </div>
        <img src="/img/colosseum.webp" alt="" className="bg-img" />
        <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
        </>
  )
}