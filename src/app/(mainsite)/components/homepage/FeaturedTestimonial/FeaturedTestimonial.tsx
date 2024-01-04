import styles from "./featuredtestimonial.module.css"

export default function FeaturedTestimonial() {
  return (
    <aside className={styles.featuredTestimonial}>
        <div className="center">
            <img src="/icons/quote-light.svg" aria-hidden />
        </div>
        <p>Big shout out to William Bojczuk for our new website! Message William directly if you need a high quality website build.</p>
        <h1>Trey - CEO of Superior Pressure Washing</h1>
    </aside>
  )
}
