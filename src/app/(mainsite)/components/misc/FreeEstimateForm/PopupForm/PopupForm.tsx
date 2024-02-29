"use client"

import "./popupform.css"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import handleFormSubmit from "../handleFormSubmit"
import Image from "next/image"
import MessageStatus from "../../MessageStatus/MessageStatus"
import { AppContext } from "../../appContext"
import { useContext } from "react"

export default function PopUpForm() {

    const {isFormOpen, closeForm}: {isFormOpen: boolean, closeForm: any} = useContext(AppContext)

    const [status, setStatus] = useState("none")

    const formRef: any = useRef();
    const wrapperRef: any = useRef();

    function openTheForm(){
        wrapperRef.current.style.pointerEvents = "all";
        wrapperRef.current.style.display = "flex";
        gsap.to(wrapperRef.current, {
            opacity: 1,
            ease: "power3.in",
            duration: 0.5
        })
        gsap.to(formRef.current, {
            y: 0,
            ease: "bounce.out",
            duration: 1
        })
    }
    function closeTheForm(){
        wrapperRef.current.style.pointerEvents = "none";
        wrapperRef.current.style.display = "none";
        gsap.to(wrapperRef.current, {
            opacity: 0,
            ease: "power3.out",
            duration: 0.5
        })
        gsap.to(formRef.current, {
            y: "-30px",
            ease: "power3.out",
            duration: 0.5
        })
    }

    
    useEffect(()=>{
        if(isFormOpen){
            openTheForm()
        }else{
            closeTheForm()
        }

    }, [isFormOpen])

  return (
    <>
    <MessageStatus status={status} setStatus={setStatus} />
    <div id="popupFormWrapper" ref={wrapperRef} >
        <form ref={formRef} id="popupForm" onSubmit={(evt)=>{handleFormSubmit(evt, setStatus, formRef); closeForm()}}>
        <input type="hidden" name="_cc" value="contact@romedigital.co" />
        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_subject" value="New message from website"/>
            
        <h2 id="popupFormTitle">Let's Talk!</h2>
            <div className="input-wrapper">
                <Image width={200} height={200} id="formPersonIcon" src={"/icons/person.png"} alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper">
                <Image width={200} height={200} id="formPhoneIcon" src={"/icons/phone.png"} alt="Phone Icon" />
                <input required type="text" name="phoneNumber" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
                <Image width={200} height={200} id="formEmailIcon" src={"/icons/email.png"} alt="Email Icon" />
                <input required type="email" name="email" id="emailInput" placeholder={"Email Address"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={2000} name="details" id="messageInput" placeholder={"Details about your project"}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-button" id="estimateFormSubmit" type="submit">Let's Go! <img src="/icons/arrow-right.svg" aria-hidden /></a>
            </div>
            
            <div className="form-decoration top-left"></div>
            <div className="form-decoration top-right"></div>
            <div className="form-decoration bottom-left"></div>
            <div className="form-decoration bottom-right"></div>

            <button id="popupFormClose" onClick={(evt)=>{
                evt.preventDefault();
                closeForm()
            }}></button>        
        </form>
    </div>
    </>
  )
}
