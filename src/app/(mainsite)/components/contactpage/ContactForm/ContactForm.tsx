import styles from "./contactform.module.css"
import FreeEstimateForm from "../../misc/FreeEstimateForm/FreeEstimateForm"
import ContentCalendar from "../ContactCalendar/ContentCalendar"

export default function ContactForm() {
  return (
    <div className={`center ${styles.contactForm}`}>
      {/* <ContentCalendar /> */}
        <FreeEstimateForm />
    </div>
  )
}
