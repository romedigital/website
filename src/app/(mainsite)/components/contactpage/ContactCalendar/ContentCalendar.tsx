import styles from "./contentcalendar.module.css"
import Script from "next/script"

export default function ContentCalendar() {
  return (
<>
<div className="calendly-inline-widget" data-url="https://calendly.com/romedigital/strategy-call?primary_color=d44b4b" style={{minWidth: "320px", height: "700px"}}></div>
<Script src="https://assets.calendly.com/assets/external/widget.js" async />
</>
  )
}
