"use client"
import { useEffect, useRef } from "react"
import styles from "./recentprojects.module.css"
import gsap from "gsap"


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
  
  window!.addEventListener("scroll", ()=>{
    if(isCarouselInView){
      const pixels = window.scrollY;
      gsap.to(".past-projects-carousel-item",
        {x: -0.3 * pixels,
        duration: 1}
      )
    }
  })
}, [])

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
        <div className={`${styles.carouselWrapper} recentProjectCarouselWrapper`}>
          <img alt="Past Project Thumbnail" src="./img/pastprojects/advantage.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="./img/pastprojects/shine.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="./img/pastprojects/speedspray.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="./img/pastprojects/coi.png" className={`${styles.carouselItem} past-projects-carousel-item`} />

          <img alt="Past Project Thumbnail" src="./img/pastprojects/advantage.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="./img/pastprojects/shine.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
          <img alt="Past Project Thumbnail" src="./img/pastprojects/speedspray.png" className={`${styles.carouselItem} past-projects-carousel-item`} />
        </div>
    </div>
  )
}
