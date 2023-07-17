import { useEffect, useState } from "react";
import { FeatBody, FeatDescription, FeatDetailsContainer, FeatHeader, FeatTitle } from "./styles";

interface Feats{
    id: string
    name: string
    source: string
    page: string
    description: string
    benefits: string[]
}
interface FeatDetailsProps{
    featId: string | null
}
export function FeatDetails({featId}: FeatDetailsProps){
    const [featDetails, setFeatDetails] = useState<Feats>()
    const [loading, setLoading] = useState<boolean>(true)

    async function loadFeatDetails(){
        setLoading(true)
        const featDetails = await fetch(`http://localhost:5000/api/feats/${featId}`)
        const featDetailsJson = await featDetails.json()
        setFeatDetails(featDetailsJson)
        setLoading(false)
    }

    useEffect(()=>{
        loadFeatDetails()
    }, [featId])

    return (
        <FeatDetailsContainer>
            {!loading && featDetails && (
                <>
                    <FeatHeader>
                        <FeatTitle>
                            <h3>{featDetails.name}</h3>
                            <span>{featDetails.source} - {featDetails.page}</span>
                        </FeatTitle>
                            <FeatDescription>
                                <p>{featDetails.description}</p>
                            </FeatDescription>
                    </FeatHeader>
                    <FeatBody>
                        {featDetails.benefits.map((benefit)=>(
                            <p key={benefit}>{benefit}</p>
                        ))}
                    </FeatBody>
                </>
            )}
        </FeatDetailsContainer>
    )
}