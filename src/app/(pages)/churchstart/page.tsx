import ChurchOnboardingForm from "@/app/(mainsite)/components/onboardingpage/ChurchOnboardingForm/ChurchOnboardingForm"
import OnboardingForm from "@/app/(mainsite)/components/onboardingpage/OnboardingForm/OnboardingForm"
import OnboardingFormNEW from "@/app/(mainsite)/components/onboardingpage/OnboardingFormNEW/OnboardingFormNEW"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Start | Church Web Design and Development",
    description: ""
}

export default function StartPage(){
return(
    <>
        <ChurchOnboardingForm />
    </>
)
}
