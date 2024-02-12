import styles from "./payment.module.css"

export default function Payment() {
  return (
    <>
        <h1 className={styles.title}>Let's Get Started!</h1>
        <h3 className={styles.subtitle}>Don't worry, if our services dont match your expectations, you can cancel anytime!</h3>
        <div className={styles.buttonWrapper} dangerouslySetInnerHTML={{__html: `<script async
        src="https://js.stripe.com/v3/buy-button.js">
        </script>

<stripe-buy-button
  buy-button-id="buy_btn_1Oiu2PKaTewv8x5BkfRD9UE1"
  publishable-key="pk_live_51OTXVsKaTewv8x5B7ocCPmnBDkWU0v37izsVOBOTKx8a457McIMV4KP7TeAzxabBumxqtThWW8N82jKOkPqRKXdi00efBOjxag"
>
</stripe-buy-button>`}}></div>
    </>
  )
}
