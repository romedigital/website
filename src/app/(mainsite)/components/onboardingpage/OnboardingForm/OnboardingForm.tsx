"use client"
import InfiniteRibbon from '../../homepage/InfiniteRibbon/InfiniteRibbon';
import RecentProjects from '../../homepage/RecentProjects/RecentProjects';
import Testimonials from '../../homepage/Testimonials/Testimonials';
import styles from './onboardingform.module.css';

export default function OnboardingForm(props: {businessName: string}){
  const businessName = (props.businessName).split("-").map((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}).join(" ")

 if(typeof window !== "undefined"){
  const urlParams = (typeof window !== "undefined") ? new URLSearchParams(window.location.search) : null;
    
    let pkg = urlParams?.has("pkg") ?  urlParams?.get("pkg") : "2025sale"
  localStorage.setItem("business_name", businessName)
  localStorage.setItem("pkg", pkg!)
 }
 const infiniteRibbonContent = <>
      <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden /> <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden /> <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden /> <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden /> <span>Are You Ready To Destroy The Competition?</span><img src="/img/logo.webp" aria-hidden />
    </>
 
return (
 <div className={styles.onboardingForm}>
    <div className={styles.stuffWrapper}>
      <h1>Hey {businessName}, let's get started!</h1>
      <img src="/img/portfolio/washedbythewater.webp" aria-hidden className={styles.mainImg} />
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