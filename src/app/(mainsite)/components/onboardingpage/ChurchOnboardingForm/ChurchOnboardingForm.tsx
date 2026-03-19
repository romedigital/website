"use client"
import InfiniteRibbon from '../../homepage/InfiniteRibbon/InfiniteRibbon';
import RecentProjects from '../../homepage/RecentProjects/RecentProjects';
import Testimonials from '../Testimonials/Testimonials';
import DisplaySteps from '../DisplaySteps2/DisplaySteps2';
import Testimonial from '../Testimonials/Testimonial/Testimonial';
import styles from './onboardingform.module.css';
import Colosseum from '../Colosseum/Colosseum';
import DisplaySteps2 from '../DisplaySteps2/DisplaySteps2';

export default function ChurchOnboardingForm(){
  const businessName = ""

let clientName = ""

 if(typeof window !== "undefined"){
  const urlParams = (typeof window !== "undefined") ? new URLSearchParams(window.location.search) : null;
    
    let pkg = urlParams?.has("pkg") ?  urlParams?.get("pkg") : "2026sale"
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
    <DisplaySteps2 currentSection={1} />
 <div className={styles.onboardingForm}>
  
    <div className={styles.stuffWrapper}>
      <h1>Let’s get your church website started.</h1>
      <p> 
We’ll handle everything — design, content, and setup — so you can stay focused on your ministry.</p>
      <p>
     

      

{/* If you have any questions, send us a quick message! <br /><br />
<a target='_blank' href="https://m.me/romesites" className={`main-button ${styles.buttonWrapper}`}>Send Message</a> */}
</p>      {/* <img src="/img/portfolio/washedbythewater.webp" aria-hidden className={styles.mainImg} /> */}
    </div>
    <div className={styles.formWrapper}>
        <div className={styles.formContent} dangerouslySetInnerHTML={{__html: `<script type="text/javascript" src="https://form.jotform.com/jsform/260768885431166"></script>`}}>
          
        </div>
        <div className={styles.hideBoi}></div>
    </div>
   
 </div>
 
 </div>
  
 <Testimonials />
 <Colosseum />
 <img src="/img/colosseum.webp" alt="" className="bg-img" />
 <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
 </>
)};