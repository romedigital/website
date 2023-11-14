"use client"
import { useRef, useState } from "react"
export default function CalendarPopup() {
    const calendarRef: any = useRef()
  return (
    <>
    <div id="calendarScript" ref={calendarRef} dangerouslySetInnerHTML={{__html:  `<script src="https://assets.calendly.com/assets/external/widget.js"></script> <script>Calendly.initBadgeWidget({ url: 'https://calendly.com/romedigital/strategy-call?primary_color=d44b4b', text: 'Book a strategy call!', color: '#d44b4b', textColor: '#ffffff', branding: undefined });
    </script>`}}></div>
    </>
  )
}
