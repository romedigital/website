"use client"
import "./workflow.css"
import { useEffect } from "react"
import styles from "./workflow.module.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Link from "next/link"
gsap.registerPlugin(ScrollTrigger) 

export default function Workflow() {


    useEffect(()=>{
        setTimeout(()=>{
            const tl = gsap.timeline({defaults:{
                duration: 0.8,
                ease: "power3.inOut"
            },
            scrollTrigger: {
                trigger: ".workflow-wrapper",
                start: "center 100%",
                end: "center 80%"
    
            },})
    
            tl.to(".workflow-item", {
                y: 0,
                opacity: 1,
                stagger: 0.3
            }).to(".workflow-item",{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.5,
                stagger: 0.3
            }, "<").to(".workflow-seperator", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                stagger: 0.4
            }, "<")
        }, 1000)
        

    }, [])

  return (
    <section className={`${styles.section} main-bg-center`}>
        <h3 className="small-heading">Our Process</h3>
        <div className="center">
            <h1 className="large-heading">Our Seamless Workflow</h1>
        </div>

        <div className="center">
            <div className={`${styles.workflowWrapper} workflow-wrapper` }>

                <div className={`${styles.workflowItem} workflow-item`}>
                    <img src="./img/paper.png" aria-hidden />
                    <span>Contact our team</span>
                </div>

                <aside className={`${styles.seperator} workflow-seperator`}>
                    <img src="./img/svg-squiggle.svg" aria-hidden  />
                </aside>

                <div className={`${styles.workflowItem} workflow-item`}>
                    <img src="./img/paper.png" aria-hidden />
                    <span>Get a personalized quote</span>
                </div>

                <aside className={`${styles.seperator} ${styles.seperatorOdd} workflow-seperator`}>
                    <img src="./img/svg-squiggle.svg" aria-hidden  />
                </aside>


                <div className={`${styles.workflowItem} workflow-item`}>
                    <img src="./img/paper.png" aria-hidden />
                    <span>Build and test your product</span>
                </div>

                <aside className={`${styles.seperator} workflow-seperator`}>
                    <img src="./img/svg-squiggle.svg" aria-hidden  />
                </aside>
                

                <div className={`${styles.workflowItem} workflow-item`}>
                    <img src="./img/paper.png" aria-hidden />
                    <span>Ready to launch!</span>
                </div>

            </div>
        </div>
        <div className="center">
            <Link href="/contact" className="main-button">Get Started! <img src="./icons/arrow-right.svg" aria-hidden /></Link>
        </div>
    </section>
  )
}
