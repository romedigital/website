"use client"

import { useEffect, useState } from "react"
import MessageStatus from "../../misc/MessageStatus/MessageStatus"
import styles from "./tac.module.css"
import getTACData from "@/app/controllers/getTACData"
import sendEmail from "@/app/controllers/sendEmail"

export default function TAC(props: {businessName: string}) {

  const [renderClient, setRenderClient] = useState(false)

    const urlParams = (typeof window !== "undefined") ? new URLSearchParams(window.location.search) : null;
    
    let pkg = urlParams?.has("pkg") ?  urlParams?.get("pkg") : "t8mu09b4"

    // console.log(pkg)

    let curCost: number = 100


    switch(pkg){
      case "t8mu09b4":
          curCost = 50
      break;
      case "2024sale":
        curCost = 20
        break;
    }

    const [status, setStatus] = useState("none")

    const businessName = props.businessName.split("_").map((str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1)
    }).join(" ")

    const TACData = getTACData(businessName, curCost)

    async function agreeHandler(evt: any){

      localStorage.setItem("business_name", businessName)

      await sendEmail(evt, setStatus, {
        senderName: "Rome Digital",
        receiverEmail: "contact@romedigital.co",
        subject: `${businessName} New TAC Accepted`,
        recieverName: "Rome Digital",
        content: TACData
      })

      location.href = `/onboarding/accepted/${pkg}`
    }

    useEffect(()=>{
      setRenderClient(true)
    }, [])
    
  return (
    <>
        <MessageStatus status={status} setStatus={setStatus} />

        <h1 className={styles.title}>Website Design Development Agreement</h1>
        <h3 className={styles.subtitle}>Between Rome Digital and {businessName}</h3>
        <div className={styles.tacWrapper}>
            <div className={styles.tac} dangerouslySetInnerHTML={{__html: (renderClient) ? TACData : "Loading..."}}>

            </div>

        </div>
        <div className="center"><a onClick={agreeHandler} href="#" className={`main-button ${styles.ctaButton}`}>I Agree <img src="/icons/arrow-right.svg" aria-hidden /></a></div>
    </>
  )
}
