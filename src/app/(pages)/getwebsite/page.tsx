import Payment from "@/app/(mainsite)/components/onboardingpage/Payment/Payment"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Get Website | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Sites"
}

export default function GetWebsitePage(){
return(
    <>
        <Payment />
    </>
)
}
