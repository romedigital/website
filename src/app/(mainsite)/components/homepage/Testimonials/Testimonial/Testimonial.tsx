import styles from "./testimonial.module.css"

export default function Testimonial(props: testimonialType) {
  return (
    <aside className={styles.testimonial}>
        <div className={styles.headerContent}>
            <img src="./icons/quote.svg" aria-hidden />
            <div className={styles.name}>{props.name}</div>
            <div className={styles.title}>{props.title}</div>
        </div>
        <p>{props.desc}</p>
    </aside>
  )
}
