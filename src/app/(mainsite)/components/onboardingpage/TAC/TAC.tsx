"use client"

import { useState } from "react"
import MessageStatus from "../../misc/MessageStatus/MessageStatus"
import styles from "./tac.module.css"
import getTACData from "@/app/controllers/getTACData"
import sendEmail from "@/app/controllers/sendEmail"

export default function TAC(props: {businessName: string}) {

    const [status, setStatus] = useState("none")

    const businessName = props.businessName.split("_").map((str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1)
    }).join(" ")

    const TACData = getTACData(businessName)

    async function agreeHandler(evt: any){

      localStorage.setItem("business_name", businessName)

      await sendEmail(evt, setStatus, {
        senderName: "Rome Digital",
        receiverEmail: "contact@romedigital.co",
        subject: `${businessName} New TAC Accepted`,
        recieverName: "Rome Digital",
        content: TACData
      })

      location.href = `/onboarding/accepted/${props.businessName}`
    }
    
  return (
    <>
        <MessageStatus status={status} setStatus={setStatus} />

        <h1 className={styles.title}>Website Design Development Agreement</h1>
        <h3 className={styles.subtitle}>Between Rome Digital and {businessName}</h3>
        <div className={styles.tacWrapper}>
            <div className={styles.tac} dangerouslySetInnerHTML={{__html: TACData}}>

            </div>

        </div>
        <div className="center"><a onClick={agreeHandler} href="#" className={`main-button ${styles.ctaButton}`}>I Agree <img src="/icons/arrow-right.svg" aria-hidden /></a></div>
    </>
  )
}