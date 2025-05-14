import OnboardingForm from "@/app/(mainsite)/components/onboardingpage/OnboardingForm/OnboardingForm"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Start | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Sites"
}

export default function StartPage({params}: {params: {businessname: string}}){
return(
    <>
        <OnboardingForm />
    </>
)
}
