"use client"
import styles from "./pausedcontent.module.css"
import { useEffect, useState } from "react"

export default function PausedContent() {



  return (
        <div className={styles.contentWrapper}>
        <h1 className={styles.title}>This website has been paused...</h1>

        <p className={styles.content}>If you are an admin, contact Rome Digital to get this website re-instated.
        </p>
        <img src="/img/colosseum.webp" alt="" className="bg-img" />
    <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
        </div>
  )
}