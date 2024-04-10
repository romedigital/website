"use client"
import styles from './onboardingform.module.css';

export default function OnboardingForm(props: {businessName: string}){
  const businessName = (props.businessName).split("-").map((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}).join(" ")

 if(typeof window !== "undefined"){
  localStorage.setItem("business_name", businessName)
 }
return (
 <div className={styles.onboardingForm}>
    <div className={styles.stuffWrapper}>
      <h1>Hey {businessName}, let's get started!</h1>
      <img src="/img/portfolio/trexdetailing.webp" aria-hidden className={styles.mainImg} />
    </div>
    <div className={styles.formWrapper} dangerouslySetInnerHTML={{__html: `<script type="text/javascript" src="https://form.jotform.com/jsform/241003968771156"></script>`}}>
        
    </div>
    <img src="/img/colosseum.webp" alt="" className="bg-img" />
    <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
 </div>
)};