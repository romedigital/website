import PausedContent from "@/app/(mainsite)/components/pausedpage/AfterPayment/PausedContent"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Website Paused | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Digital"
}

export default function OnboardingPayedPage(){
return(
    <>
        <PausedContent />
    </>
)
}
