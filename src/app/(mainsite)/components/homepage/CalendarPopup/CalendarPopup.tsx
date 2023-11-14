"use client"
import Script from "next/script"
import { useRef, useState } from "react"
export default function CalendarPopup() {
    const calendarRef: any = useRef()
  return (
    <>
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>

    <div id="calendarScript" ref={calendarRef} dangerouslySetInnerHTML={{__html:  `<script src="https://assets.calendly.com/assets/external/widget.js"></script> <script>Calendly.initBadgeWidget({ url: 'https://calendly.com/romedigital/strategy-call?primary_color=d44b4b', text: 'Schedule time with me', color: '#d44b4b', textColor: '#ffffff', branding: undefined });
    </script>`}}></div>
    </>
  )
}
