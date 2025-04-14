import styles from "./commitment.module.css"

export default function Commitment() {
  return (
    <section className={styles.commitment}>
        <div className={styles.contentWrapper}>
            <h1 className={`main-heading ${styles.mainHeading}`} style={{textAlign: "left"}}>Your Vision<br />Our <span className="highlight"><span className={`helmet-reverse ${styles.helmet}`}>C</span>ommitment</span></h1>

            <p>Hello, I'm <strong>William Bojczuk</strong>, the Proud owner of Rome Sites. Websites are what I specialize in, but not just websites, the value that they provide is far more important to me. Over the past several years, I've been able to work with many businesses and industries which taught me so much.</p>

            <p>I've seen many businesses pay thousands of dollars for a slow, unresponisive, and overall bad-looking website. Those agencies don't care about your business, only about their next paycheck. My goal is to make websites feel like a branded website, like it BELONGS with you, and website's that not only look good but also build trust with visitors.</p>

            <p>That's why I'm dedicated, day in and day out, to make sure I don't put out an average website. Because average doesn't cut it. I work hard to keep up with modern technology and industry trends to bring you the fastest, best looking, and most converting website out there. <strong>My focus is to deliver the BEST websites possible. That's a promise.</strong>
            </p>

            <p>Let's connect and transform your business and bring your vision into a bright reality, let me prove that I'm the best.</p>

            <div className={styles.personWrapper}>
                {/* <img className={styles.ownerImg} src="/img/williambojczuk.webp" alt="Image of Rome Sites Owner" /> */}
                <div>
                    <img src="/img/signature.webp"/>
                    <span>Owner of <span className="highlight">Rome Sites</span></span>
                </div>
            </div>
        </div>

        <div className={styles.imgWrapper}>
            <img className={styles.mainImg} src="/img/man-standing.webp" alt="man standing" />
            <img src="/img/guarantee.webp" aria-hidden className={styles.guarantee} />
        </div>
    </section>
  )
}
