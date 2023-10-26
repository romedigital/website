import styles from "./workflow.module.css"

export default function Workflow() {
  return (
    <section className={`${styles.section} main-bg-center`}>
        <h3 className="small-heading">Our Process</h3>
        <div className="center">
            <h1 className="large-heading">Our Seamless Workflow</h1>
        </div>

        <div className="center">
            <div className={styles.workflowWrapper}>
                <div className={styles.workflowItem}>
                    <img src="./img/paper.png" aria-hidden />
                    <span>Contact our team</span>
                </div>

                <div className={styles.seperator}>
                    <img src="./img/svg-squiggle.svg" aria-hidden  />
                </div>

                <div className={styles.workflowItem}>
                    <img src="./img/paper.png" aria-hidden />
                    <span>Get a personalized quote</span>
                </div>

                <div className={`${styles.seperator} ${styles.seperatorOdd}`}>
                    <img src="./img/svg-squiggle.svg" aria-hidden  />
                </div>


                <div className={styles.workflowItem}>
                    <img src="./img/paper.png" aria-hidden />
                    <span>Build and test your product</span>
                </div>

                <div className={styles.seperator}>
                    <img src="./img/svg-squiggle.svg" aria-hidden  />
                </div>
                

                <div className={styles.workflowItem}>
                    <img src="./img/paper.png" aria-hidden />
                    <span>Ready to launch!</span>
                </div>
            </div>
        </div>
        <div className="center">
            <a href="#tempLink" className="main-button">Get Started! <img src="./icons/arrow-right.svg" aria-hidden /></a>
        </div>
    </section>
  )
}
