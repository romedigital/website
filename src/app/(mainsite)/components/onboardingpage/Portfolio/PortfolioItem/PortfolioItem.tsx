import styles from "./portfolioitem.module.css"

export default function PortfolioItem(props: portfolioType) {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.content}>
        <img src={props.mockupImg} aria-hidden className={styles.mainImg} />

        <img src={props.logoImg} aria-hidden className={styles.logoImg} />
      </div>
      <div className="center">
        <a href={props.url} target="_blank" className={`main-button`}>View Full Site</a>
      </div>
    </div>
  )
}
