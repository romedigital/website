"use client"
import InfiniteRibbon from '../../homepage/InfiniteRibbon/InfiniteRibbon';
import RecentProjects from '../../homepage/RecentProjects/RecentProjects';
import Testimonials from '../../homepage/Testimonials/Testimonials';
import DisplaySteps from '../DisplaySteps/DisplaySteps';
import styles from './onboardingform.module.css';

export default function OnboardingForm(props: {businessName: string}){
  const businessName = (props.businessName).split("-").map((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}).join(" ")

let clientName = ""

 if(typeof window !== "undefined"){
  const urlParams = (typeof window !== "undefined") ? new URLSearchParams(window.location.search) : null;
    
    let pkg = urlParams?.has("pkg") ?  urlParams?.get("pkg") : "2025sale"
    clientName = urlParams?.has("fname") ?  urlParams?.get("fname")! : ""
    clientName = clientName.split("-").map((str)=>{
      return str.charAt(0).toUpperCase() + str.slice(1)
  }).join(" ")
  localStorage.setItem("business_name", businessName)
  localStorage.setItem("pkg", pkg!)
  localStorage.setItem("client_name", clientName!)
 }

 
return (
  <>
    <div style={{position: "relative"}}>
    <DisplaySteps currentSection={0} />
 <div className={styles.onboardingForm}>
  
    <div className={styles.stuffWrapper}>
      <h1>Congrats on taking the next step with {businessName}!</h1>
      <h3 className='underline'>Here's what to expect:</h3>
      <p>
      ✅ Our easy onboarding form on this page <br />
      ✅ 100% refundable first month’s payment <br />
      ✅ We personally follow up and begin designing your website! <br />
<br />
<strong>We're excited to personally help you grow {businessName} — let’s get started!</strong></p>
      {/* <img src="/img/portfolio/washedbythewater.webp" aria-hidden className={styles.mainImg} /> */}
    </div>
    <div className={styles.formWrapper}>
        <div className={styles.formContent} dangerouslySetInnerHTML={{__html: `<script type="text/javascript" src="https://form.jotform.com/jsform/241003968771156"></script>`}}>
          
        </div>
        <div className={styles.hideBoi}></div>
    </div>
   
 </div>
 
 </div>
 <img src="/img/colosseum.webp" alt="" className="bg-img" />
 <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
 </>
)};