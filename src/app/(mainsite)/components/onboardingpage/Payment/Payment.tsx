"use client"
import styles from "./payment.module.css"
import { useEffect, useState } from "react"

export default function Payment() {

  const [businessName, setBusinessName] = useState("")
  const [renderClient, setRenderClient] = useState(false)

let pkg = "2024sale"

if(typeof window !== "undefined"){
  pkg = localStorage.getItem("pkg")!
}
  
  let buttonHTML = ""

  switch(pkg){
    case("business"):
      buttonHTML = `<script async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    
    <stripe-buy-button
      buy-button-id="buy_btn_1P42vsKaTewv8x5BarPIeHSm"
      publishable-key="pk_live_51OTXVsKaTewv8x5B7ocCPmnBDkWU0v37izsVOBOTKx8a457McIMV4KP7TeAzxabBumxqtThWW8N82jKOkPqRKXdi00efBOjxag"
    >
    </stripe-buy-button>`
    break;
    
    case("standard"):
      buttonHTML = `<script async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    
    <stripe-buy-button
      buy-button-id="buy_btn_1P41ypKaTewv8x5Bxr4zZW5q"
      publishable-key="pk_live_51OTXVsKaTewv8x5B7ocCPmnBDkWU0v37izsVOBOTKx8a457McIMV4KP7TeAzxabBumxqtThWW8N82jKOkPqRKXdi00efBOjxag"
    >
    </stripe-buy-button>`
    break;

    case "2024sale":
      buttonHTML = `<script async
      src="https://js.stripe.com/v3/buy-button.js">
    </script>
    <stripe-buy-button
      buy-button-id="buy_btn_1OplaMKaTewv8x5BW3Lm2oyJ"
      publishable-key="pk_live_51OTXVsKaTewv8x5B7ocCPmnBDkWU0v37izsVOBOTKx8a457McIMV4KP7TeAzxabBumxqtThWW8N82jKOkPqRKXdi00efBOjxag"
    >
    </stripe-buy-button>`

      break;

  }

  useEffect(()=>{
    setRenderClient(true)
  }, [])

  useEffect(()=>{
    setBusinessName((typeof window !== "undefined" && window.localStorage.getItem("business_name")) ? ` ${window.localStorage.getItem("business_name")}` : "")
  }, [])

  return (
        <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Almost There{businessName}!</h1>

        <p className={styles.content}>All there is to do is to complete your subscription at the secure link below. Don't worry, if you aren't fully satisfied with the initial design, we will refund you 100% of your money, so there's absolutely no risk!
        </p>
        <div className={styles.buttonWrapper} dangerouslySetInnerHTML={{__html: buttonHTML}}>

        </div>
        <img src="/img/colosseum.webp" alt="" className="bg-img" />
    <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
        </div>
  )
}