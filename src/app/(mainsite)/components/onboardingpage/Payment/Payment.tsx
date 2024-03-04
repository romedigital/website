"use client"
import { useEffect, useState } from "react";
import styles from "./payment.module.css"

export default function Payment(props: {pkg: string}) {

  let pkg = props.pkg

  const [renderClient, setRenderClient] = useState(false)
  
  let buttonHTML = ""

  switch(pkg){
    case("t8mu09b4"):
      buttonHTML = `<script async
      src="https://js.stripe.com/v3/buy-button.js">
      </script><stripe-buy-button
buy-button-id="buy_btn_1Oiu2PKaTewv8x5BkfRD9UE1"
publishable-key="pk_live_51OTXVsKaTewv8x5B7ocCPmnBDkWU0v37izsVOBOTKx8a457McIMV4KP7TeAzxabBumxqtThWW8N82jKOkPqRKXdi00efBOjxag"
></stripe-buy-button>`
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



  return (
    <>
        <h1 className={styles.title}>Thank you for agreeing to our contract!</h1>
        <h3 className={styles.subtitle}>You can now close this page.</h3>
        <div className={styles.buttonWrapper}> </div>
    </>
  )
}
