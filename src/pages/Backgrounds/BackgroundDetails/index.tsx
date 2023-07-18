import { useEffect, useState } from "react";
import { BackgroundBody, BackgroundContainer, BackgroundDescription, BackgroundHeader, BackgroundTitle } from "./styles";

interface CharacterBackground {
    id: string;
    Classe: string;
    Source: string;
    Page: string;
    SkillProficiencies: string;
    ToolProficiencies?: string;
    Languages?: string;
    Equipment: string[];
    Feature: string;
    FeatureDescription: string;
    SuggestedCharacteristics: {
      PersonalityTraits: string[];
      Ideals: string[];
      Bonds: string[];
      Flaws: string[];
    };

}
interface BackgroundDetailsProps{
    id: string | null;
}
export function BackgroundDetails({id}: BackgroundDetailsProps){
    const [backgroundDetails, setBackgroundDetails] = useState<CharacterBackground>()
    const [loading, setLoading] = useState<boolean>(true)

    async function loadBackgroundDetails(){
        setLoading(true)
        const backgroundDetails = await fetch(`http://localhost:5000/api/backgrounds/${id}`)
        const backgroundDetailsJson = await backgroundDetails.json()
        setBackgroundDetails(backgroundDetailsJson)
        setLoading(false)
    }

    useEffect(()=>{
        loadBackgroundDetails()
    }, [id])

    return (
        <BackgroundContainer>
            {!loading && backgroundDetails && (
                <>
                    <BackgroundHeader>
                        <BackgroundTitle>
                            <h3>{backgroundDetails.Classe}</h3>
                            <span>{backgroundDetails.Source} - {backgroundDetails.Page}</span>
                        </BackgroundTitle>
                            <BackgroundDescription>
                                <p><strong>Skill Proficiencies: </strong>{backgroundDetails.SkillProficiencies}</p>
                                {backgroundDetails.ToolProficiencies && (
                                    <p><strong>Tool Proficiencies: </strong>{backgroundDetails.ToolProficiencies}</p>
                                )}
                                {backgroundDetails.Languages && (
                                    <p><strong>Languages: </strong>{backgroundDetails.Languages}</p>
                                )}
                                <p><strong>Equipment: </strong>{backgroundDetails.Equipment.join(', ')}</p>
                            </BackgroundDescription>
                    </BackgroundHeader>
                    <BackgroundBody>
                        <h3>Feature: {backgroundDetails.Feature}</h3>
                        <p>{backgroundDetails.FeatureDescription}</p>
                        {/* {backgroundDetails.benefits.map((benefit)=>(
                            <p key={benefit}>{benefit}</p>
                        ))} */}
                    </BackgroundBody>
                </>
            )}
        </BackgroundContainer>
    )
}