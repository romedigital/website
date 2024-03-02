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
        <h1 className={styles.title}>Thank's for Choosing us {businessName}!</h1>

        <p className={styles.content}>We will now begin finishing the design for your website and developing it. We will keep in close contact with you through the whole process to make sure you get exactly what you want!
         </p>

    </>
  )
}
