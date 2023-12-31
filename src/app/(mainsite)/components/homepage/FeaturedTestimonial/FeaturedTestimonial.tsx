import styles from "./featuredtestimonial.module.css"

export default function FeaturedTestimonial() {
  return (
    <aside className={styles.featuredTestimonial}>
        <div className="center">
            <img src="/icons/quote-light.svg" aria-hidden />
        </div>
        <p>You did such a great job on our SpeedSpray website I wanted to see what you can do for our handyman business as well.</p>
        <h1>George - CEO of SpeedSpray</h1>
    </aside>
  )
}
