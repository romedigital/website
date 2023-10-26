import styles from "./faq.module.css"
import FAQItem from "./FAQItem"
import Image from "next/image"
import faqData from "@/app/(mainsite)/data/faqData"

export default function FAQ() {
    const faqElems = faqData.map((data, i)=>{
        return <FAQItem {...data} key={i} />
    })
  return (
    <section className={`${styles.section} center`}>
        <h3 className="small-heading">FAQ</h3>
        <h1 className="large-heading">Answers to your Questions</h1>
        <Image className={styles.mainBg} alt="Man Thinking" src={"/img/thinker.png"} height={813} width={981} />

        {faqElems}

    </section>
  )
}
