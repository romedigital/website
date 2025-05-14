
import AfterPayment from "@/app/(mainsite)/components/onboardingpage/AfterPayment/AfterPayment"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Done | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Sites"
}

export default function DonePage(){
return(
    <>
        <AfterPayment />
    </>
)
}
