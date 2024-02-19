import type { Metadata } from "next"
// import Payment from "@/app/(mainsite)/components/onboardingpage/Payment/Payment"
import AfterPayment from "@/app/(mainsite)/components/onboardingpage/AfterPayment/AfterPayment"

export const metadata: Metadata = {
    title: "Onboarding | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Digital"
}

export default function OnboardingAcceptedPage({params}: {params: {businessname: string}}){
return(
    <>
    <AfterPayment />
    </>
)
}
