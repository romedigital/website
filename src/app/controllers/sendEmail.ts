interface sendEmailParams{
    senderName: string,
    receiverEmail: string,
    subject: string,
    recieverName: string,
    content: string 
}

export default async function sendEmail(evt:any,setStatus:any, props: sendEmailParams){
    evt.preventDefault();
    setStatus("loading")
    try{
        await fetch("/api/sendmail",{
            method: "POST",
            body: JSON.stringify({
                senderName: props.senderName,
                receiverEmail: props.receiverEmail,
                subject: props.subject,
                content: props.content
            })
        })
    }catch(err){
        console.error(err)
        setStatus("error")
        return false
    }finally{
        setStatus("success")
        return true
    }
}