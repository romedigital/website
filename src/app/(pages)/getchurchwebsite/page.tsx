import ChurchPayment from "@/app/(mainsite)/components/onboardingpage/ChurchPayment/ChurchPayment"
import Payment from "@/app/(mainsite)/components/onboardingpage/Payment/Payment"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Get Website | Church Web Design and Development",
    description: ""
}

export default function GetWebsitePage(){
return(
    <>
        <ChurchPayment />
    </>
)
}
