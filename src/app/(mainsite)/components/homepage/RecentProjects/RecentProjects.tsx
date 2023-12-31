"use client"
import { useEffect, useRef } from "react"
import styles from "./recentprojects.module.css"
import gsap from "gsap"
import Image from "next/image"


export default function RecentProjects() {

  const wrapperRef: any = useRef()
  
useEffect(()=>{
  let isCarouselInView = false
  const carouselObserver = new IntersectionObserver((elems)=>{
    elems.forEach((elem)=>{
      if(elem.isIntersecting){
        isCarouselInView = true
      }else{
        isCarouselInView = false
      }
    })
  })
  carouselObserver.observe(wrapperRef.current)

  const scrollAmt = (window.matchMedia("(max-width: 649px)").matches) ? 0.5 : 0.3;

  window!.addEventListener("scroll", ()=>{
    if(isCarouselInView){
      const pixels = window.scrollY;
      gsap.to(".past-projects-carousel-item",
        {x: -1 * (scrollAmt) * pixels,
        duration: 1}
      )
    }
  })
}, [])

  return (
    <div ref={wrapperRef} className={styles.wrapper}>

        <div className={styles.pastProjectsSign}>
          <span>Recent<br/>Projects</span>
          <Image src={"/img/shield.png"} alt="Roman Shield Icon" width={300} height={300} />
          <div className={styles.shader}></div>
        </div>

        <div className={`${styles.carouselWrapper} recentProjectCarouselWrapper`}>
        <img alt="Past Project Thumbnail" src="/img/pastprojects/shine.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="/img/pastprojects/quicknclean.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="/img/pastprojects/advantage.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          
          <img alt="Past Project Thumbnail" src="/img/pastprojects/speedspray.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
        

          <img alt="Past Project Thumbnail" src="/img/pastprojects/quicknclean.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="/img/pastprojects/advantage.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="/img/pastprojects/shine.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
        </div>
    </div>
  )
}
