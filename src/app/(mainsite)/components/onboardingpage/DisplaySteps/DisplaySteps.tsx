"use client"

import { CSSProperties, ReactNode, useEffect, useRef } from "react"
import styles from "./displaysteps.module.css"

interface displayStepsProps{
    currentSection: number
}


export default function DisplaySteps(props: displayStepsProps) {
    let displayStepsSize = 15
    const displayStepsConnectorWidth =   (100 - (displayStepsSize as number * 3)) / (3 - 1)

    
    const displayStepsElems: ReactNode[] = []

    const wrapperRef: any = useRef();



    // ----- Hooks

    // On currentSectionChange
       
    useEffect(()=>{
        const topValue = (props.currentSection == 0) ? 1 : (props.currentSection * 2) + 1;
        const initValue = 3 + 3 - 1;
        for(let i = 0; i < initValue; ++i){
            if(i < topValue){
                wrapperRef.current.children[i].classList.add(styles.filled)
            }else{
                wrapperRef.current.children[i].classList.remove(styles.filled)  
            }
        }
    }, [props.currentSection])

    
        for(let i = 0; i < 3; ++i){
            const displayStepsCircleStyles = {"--circle-size": `${displayStepsSize}%`} as CSSProperties
            const displayStepsConnectorStyles = {"--connector-width": `${displayStepsConnectorWidth}%`} as CSSProperties
            let text = ""
            if(i == 0){
                text = `Fill in
your info`
            }else if(i == 1){
                text = `Lock in
the deal`
            }else{
                text = `We build
your website!`
            }
            displayStepsElems.push(
                <div className={styles.wrap}>
                    <div key={i} className={styles.circle} style={displayStepsCircleStyles}>{i+1}</div>
                    <div className={styles.text}>{text}</div>
                </div>
            )
            if(i !== 3 - 1){
                displayStepsElems.push(<div key={i+50} className={styles.connector} style={displayStepsConnectorStyles}></div>)
            }
        }


  return (
    <div className="center">
        <div className={styles.stepsWrapper} ref={wrapperRef}>
       {displayStepsElems}
    </div>
    </div>
  )
}
