import styles from "./contactform.module.css"
import FreeEstimateForm from "../../misc/FreeEstimateForm/FreeEstimateForm"

export default function ContactForm() {
  return (
    <div className={`center ${styles.contactForm}`}>
        <FreeEstimateForm />
    </div>
  )
}
