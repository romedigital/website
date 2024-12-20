"use client"
import styles from './onboardingform.module.css';

export default function OnboardingForm(props: {businessName: string}){
  const businessName = (props.businessName).split("-").map((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}).join(" ")

 if(typeof window !== "undefined"){
  const urlParams = (typeof window !== "undefined") ? new URLSearchParams(window.location.search) : null;
    
    let pkg = urlParams?.has("pkg") ?  urlParams?.get("pkg") : "2024sale"
  localStorage.setItem("business_name", businessName)
  localStorage.setItem("pkg", pkg!)
 }

 
return (
 <div className={styles.onboardingForm}>
    <div className={styles.stuffWrapper}>
      <h1>Hey {businessName}, let's get this started!</h1>
      <img src="/img/portfolio/trexdetailing.webp" aria-hidden className={styles.mainImg} />
    </div>
    <div className={styles.formWrapper}>
        <div className={styles.formContent} dangerouslySetInnerHTML={{__html: `<script type="text/javascript" src="https://form.jotform.com/jsform/241003968771156"></script>`}}>
          
        </div>
        <div className={styles.hideBoi}></div>
    </div>
    <img src="/img/colosseum.webp" alt="" className="bg-img" />
    <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
 </div>
)};