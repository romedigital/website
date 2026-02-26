"use client"
import DisplaySteps from "../DisplaySteps/DisplaySteps"
import styles from "./payment.module.css"
import { useEffect, useState } from "react"

export default function Payment() {

  const [businessName, setBusinessName] = useState("")
  const [renderClient, setRenderClient] = useState(false)

let pkg = "2026sale"

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
  buy-button-id="buy_btn_1REKEFKaTewv8x5BOA1MxhlQ"
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

      case "2026sale":
      buttonHTML = `<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1T5CsgKaTewv8x5BZPsbcf4t"
  publishable-key="pk_live_51OTXVsKaTewv8x5B7ocCPmnBDkWU0v37izsVOBOTKx8a457McIMV4KP7TeAzxabBumxqtThWW8N82jKOkPqRKXdi00efBOjxag"
>
</stripe-buy-button>`

      break;

      default:

        buttonHTML = `<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1T5CsgKaTewv8x5BZPsbcf4t"
  publishable-key="pk_live_51OTXVsKaTewv8x5B7ocCPmnBDkWU0v37izsVOBOTKx8a457McIMV4KP7TeAzxabBumxqtThWW8N82jKOkPqRKXdi00efBOjxag"
>
</stripe-buy-button>`

  }

  useEffect(()=>{
    setRenderClient(true)
  }, [])

  useEffect(()=>{
    setBusinessName((typeof window !== "undefined" && window.localStorage.getItem("business_name")) ? ` ${window.localStorage.getItem("business_name")}` : "")
  }, [])

  return (
    <>
        <div className={styles.contentWrapper}>
          <DisplaySteps currentSection={1} />
        <h1 className={styles.title}>You're Almost There<span className="highlight">!</span></h1>

        <p className={styles.content}>This final step secures your spot for your business' amazing website. Your payment is safe, encrypted, and handled securely.🔒
        </p>
        <div className={styles.buttonWrapper} dangerouslySetInnerHTML={{__html: buttonHTML}}>

        </div>

        <p className={styles.satisfaction}><span className="underline"><strong>Satisfaction Guaranteed!</strong></span><br /><br />
        If you have any questions after signup, we’ll work with you to make sure you’re 100% happy.</p>
        
        </div>
        <img src="/img/colosseum.webp" alt="" className="bg-img" />
        <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
        </>
  )
}