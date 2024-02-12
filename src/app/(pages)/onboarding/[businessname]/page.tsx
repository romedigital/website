import type { Metadata } from "next"
import TAC from "@/app/(mainsite)/components/onboardingpage/TAC/TAC"

export const metadata: Metadata = {
    title: "Onboarding | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Digital"
}

export default function OnboardingPage({params}: {params: {businessname: string}}){
return(
    <>
        <TAC businessName={params.businessname} />
    </>
)
}
