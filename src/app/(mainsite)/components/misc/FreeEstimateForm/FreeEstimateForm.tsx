"use client"
// import PhoneNumber from "./PhoneNumber/PhoneNumber"
import Image from "next/image"
import { useRef, useState } from "react"
import handleFormSubmit from "./handleFormSubmit"
import "./freeestimateform.css"
import MessageStatus from "../MessageStatus/MessageStatus"
import PopUpForm from "./PopupForm/PopupForm"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{handleFormSubmit(evt, setStatus, formRef)}}>
    <input type="hidden" name="_subject" value="New message from website"/>
    <input type="hidden" name="_captcha" value="false"/>
    <input type="hidden" name="_cc" value="contact@romedigital.co" />

            
            <h2 id="estimateFormTitle">Send a Message!</h2>
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
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-button" id="estimateFormSubmit" type="submit">Let's Go! <img src="./icons/arrow-right.svg" aria-hidden /></a>
            </div>
            
            <div className="form-decoration top-left"></div>
            <div className="form-decoration top-right"></div>
            <div className="form-decoration bottom-left"></div>
            <div className="form-decoration bottom-right"></div>
        </form>
    </>
  )
}
