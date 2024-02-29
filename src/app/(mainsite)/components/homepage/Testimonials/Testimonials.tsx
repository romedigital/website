"use client"

import styles from "./testimonials.module.css"
import testimonialData from "../../../data/testimonialData"
import Testimonial from "./Testimonial/Testimonial"
import Carousel from "react-multi-carousel"
import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {

  const testimonialResponsiveness = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 699, min: 0 },
      items: 2
    }
  }

    const testimonialElems = testimonialData.map((data, i)=>{
        return(
            <Testimonial key={i} {...data} />
        )
    })

  return (
    <section className={`${styles.section}`}>
      <h1 className={`main-heading ${styles.mainHeading}`}>Here's What Our<br /><span className="highlight"><span className={`helmet-reverse ${styles.helmet}`}>C</span>lients</span> Say</h1>
        
        <div className={styles.testimonialsWrapper}>
          
        
        <Carousel
        responsive={testimonialResponsiveness}
        arrows={false}
        infinite
        autoPlay
        autoPlaySpeed={10000}
        >
          {testimonialElems}
        </Carousel>
        </div>
        <img src="/img/brick-bg.webp" aria-hidden className="bg-img" style={{opacity: 0.3}} />
        <div className="shader-gradient"></div>
    </section>
  )
}
