import AfterPayment from "@/app/(mainsite)/components/onboardingpage/AfterPayment/AfterPayment"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Onboarding | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Digital"
}

export default function OnboardingPayedPage(){
return(
    <>
        <AfterPayment />
    </>
)
}
