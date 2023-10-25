import styles from "./testimonials.module.css"
import testimonialData from "./testimonialData"
import Testimonial from "./Testimonial/Testimonial"

export default function Testimonials() {
    const testimonialElems = testimonialData.map((data, i)=>{
        return(
            <Testimonial key={i} {...data} />
        )
    })
  return (
    <section className={`${styles.section} main-bg-center`}>
        <h3>Client</h3>
        <h1>Testimonials</h1>
        {testimonialElems}
    </section>
  )
}
