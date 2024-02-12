//@ts-ignore
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

  export async function POST(req: Request){

    const body = await req.json()

    
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
        },
    });

    
    try{

        const info = await transporter.sendMail({
            from: `"${body.senderName}" <${process.env.EMAIL_ADDRESS}>`, // sender address
            cc: "williambojczuk@gmail.com",
            to: body.receiverEmail, // list of receivers
            subject: body.subject, // Subject line
            html: body.content, // html body
          });
        
        return NextResponse.json({}, {status: 200})
    }catch(err){
        console.error(err)
        return NextResponse.json({}, {status: 500})
    }
}