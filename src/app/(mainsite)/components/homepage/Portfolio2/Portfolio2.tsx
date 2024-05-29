import styles from "./portfolio.module.css"
import PortfolioItem from "./PortfolioItem/PortfolioItem"

export default function Portfolio2(props: {portfolioData: portfolioType[]}) {
    const portfolioElems = props.portfolioData.map((data, i)=>{
        return <PortfolioItem {...data} key={i} />
    })
  return (
    <div className={styles.portfolio}>
        {portfolioElems}
    </div>
  )
}
