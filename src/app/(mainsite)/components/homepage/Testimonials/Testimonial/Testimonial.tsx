import styles from "./testimonial.module.css"

export default function Testimonial(props: testimonialType) {
  return (
    <aside className={styles.testimonial}>
        <div className={styles.headerContent}>
            <img src="./icons/quote.svg" aria-hidden />
            <div className={styles.name}>{props.name}<br/><span className={styles.title}>- {props.title}</span></div>
        </div>
        <p>"{props.desc}"</p>
    </aside>
  )
}
