"use client"

import styles from "./testimonials.module.css"
import testimonialData from "../../../data/testimonialData"
import Testimonial from "./Testimonial/Testimonial"
import Carousel from "react-multi-carousel"

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
    <section className={`${styles.section} main-bg-center`}>
      <div className={styles.headerWrapper} id="testimonialsHeading">
        <h3 className="small-heading">Client</h3>
        <h1 className="large-heading">Testimonials</h1>
      </div>
        
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
    </section>
  )
}
