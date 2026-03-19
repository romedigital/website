
import AfterPayment from "@/app/(mainsite)/components/onboardingpage/AfterPayment/AfterPayment"
import ChurchAfterPayment from "@/app/(mainsite)/components/onboardingpage/ChurchAfterPayment/ChurchAfterPayment"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Done | Church Web Design and Development",
    description: ""
}

export default function DonePage(){
return(
    <>
        <ChurchAfterPayment />
    </>
)
}
