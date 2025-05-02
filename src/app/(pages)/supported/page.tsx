import Supported from "@/app/(mainsite)/components/supportpage/Supported/Supported"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Supported Businesses | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Sites"
}

export default function SupportedPage(){
    return(
       <>
       <Supported />
       </>
    )
}