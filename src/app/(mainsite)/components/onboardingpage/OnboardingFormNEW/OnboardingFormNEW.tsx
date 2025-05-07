"use client"
import InfiniteRibbon from '../../homepage/InfiniteRibbon/InfiniteRibbon';
import RecentProjects from '../../homepage/RecentProjects/RecentProjects';
import Testimonials from '../Testimonials/Testimonials';
import DisplaySteps from '../DisplaySteps/DisplaySteps';
import Testimonial from '../Testimonials/Testimonial/Testimonial';
import styles from './onboardingform.module.css';
import Colosseum from '../Colosseum/Colosseum';

export default function OnboardingFormNEW(){
  const businessName = ""

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
      <h1> <span className="highlight">Congrats</span> on taking the next step!</h1>
      <p> With this sale you get a professional website up to 5 pages, hosting, maintenance, contact forms, and 24/7 support! </p>
  
      <p>
     

      <span><svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 32 32"><g fill="none"><path fill="url(#fluentColorCheckmarkCircle320)" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14"></path><path fill="url(#fluentColorCheckmarkCircle321)" d="M22.707 12.707a1 1 0 0 0-1.414-1.414L14.5 18.086l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0z"></path><defs><linearGradient id="fluentColorCheckmarkCircle320" x1={3} x2={22.323} y1={7.25} y2={27.326} gradientUnits="userSpaceOnUse"><stop stopColor="#52d17c"></stop><stop offset={1} stopColor="#22918b"></stop></linearGradient><linearGradient id="fluentColorCheckmarkCircle321" x1={12.031} x2={14.162} y1={11.969} y2={22.66} gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#e3ffd9"></stop></linearGradient></defs></g></svg> Money Back Guarantee!!</span><br />

      <span><svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 32 32"><g fill="none"><path fill="url(#fluentColorCheckmarkCircle320)" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14"></path><path fill="url(#fluentColorCheckmarkCircle321)" d="M22.707 12.707a1 1 0 0 0-1.414-1.414L14.5 18.086l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0z"></path><defs><linearGradient id="fluentColorCheckmarkCircle320" x1={3} x2={22.323} y1={7.25} y2={27.326} gradientUnits="userSpaceOnUse"><stop stopColor="#52d17c"></stop><stop offset={1} stopColor="#22918b"></stop></linearGradient><linearGradient id="fluentColorCheckmarkCircle321" x1={12.031} x2={14.162} y1={11.969} y2={22.66} gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#e3ffd9"></stop></linearGradient></defs></g></svg> Secure + Fast Hosting </span><br />

      <span><svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 32 32"><g fill="none"><path fill="url(#fluentColorCheckmarkCircle320)" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14"></path><path fill="url(#fluentColorCheckmarkCircle321)" d="M22.707 12.707a1 1 0 0 0-1.414-1.414L14.5 18.086l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0z"></path><defs><linearGradient id="fluentColorCheckmarkCircle320" x1={3} x2={22.323} y1={7.25} y2={27.326} gradientUnits="userSpaceOnUse"><stop stopColor="#52d17c"></stop><stop offset={1} stopColor="#22918b"></stop></linearGradient><linearGradient id="fluentColorCheckmarkCircle321" x1={12.031} x2={14.162} y1={11.969} y2={22.66} gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#e3ffd9"></stop></linearGradient></defs></g></svg> Domain Included</span><br />
    
      <span><svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 32 32"><g fill="none"><path fill="url(#fluentColorCheckmarkCircle320)" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14"></path><path fill="url(#fluentColorCheckmarkCircle321)" d="M22.707 12.707a1 1 0 0 0-1.414-1.414L14.5 18.086l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0z"></path><defs><linearGradient id="fluentColorCheckmarkCircle320" x1={3} x2={22.323} y1={7.25} y2={27.326} gradientUnits="userSpaceOnUse"><stop stopColor="#52d17c"></stop><stop offset={1} stopColor="#22918b"></stop></linearGradient><linearGradient id="fluentColorCheckmarkCircle321" x1={12.031} x2={14.162} y1={11.969} y2={22.66} gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#e3ffd9"></stop></linearGradient></defs></g></svg> Websites typically take less than a week to launch!</span> <br /><br />

<strong>We're excited to personally help you grow — let’s get started!</strong><br /><br />

If you have any questions, send us a quick message! <br /><br />
<a href="https://m.me/romesites" className={`main-button ${styles.buttonWrapper}`}>Send Message</a></p>
      {/* <img src="/img/portfolio/washedbythewater.webp" aria-hidden className={styles.mainImg} /> */}
    </div>
    <div className={styles.formWrapper}>
        <div className={styles.formContent} dangerouslySetInnerHTML={{__html: `<script type="text/javascript" src="https://form.jotform.com/jsform/251216527013143"></script>`}}>
          
        </div>
        <div className={styles.hideBoi}></div>
    </div>
   
 </div>
 
 </div>
  <Colosseum />
 <Testimonials />
 <img src="/img/colosseum.webp" alt="" className="bg-img" />
 <div style={{backgroundColor: "rgba(255,255,255,0.95)"}} className="shader"></div>
 </>
)};