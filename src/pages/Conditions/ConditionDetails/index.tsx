import { useEffect, useState } from "react";
import { ConditionsBody, ConditionsDescription, ConditionsDetailsContainer, ConditionsHeader, ConditionsTitle } from "./styles";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

interface Conditions{
    id: string;
    name: string;
    source: string;
    effects: string[] | string;
}
interface ConditionsDetailsProps{
    id: string | null
}
export function ConditionsDetails({id}: ConditionsDetailsProps){
    const [conditionsDetails, setConditionsDetails] = useState<Conditions>()
    const [loading, setLoading] = useState<boolean>(true)

    async function loadConditionsDetails(){
        setLoading(true)
        const conditionsDetails = await fetch(`http://localhost:5000/api/conditions/${id}`)
        const conditionsDetailsJson = await conditionsDetails.json()
        setConditionsDetails(conditionsDetailsJson)
        setLoading(false)
    }

    useEffect(()=>{
        loadConditionsDetails()
    }, [id])

    return (
        <ConditionsDetailsContainer>
            {!loading && conditionsDetails && (
                <>
                    <ConditionsHeader>
                        <ConditionsTitle>
                            <h3>{conditionsDetails.name}</h3>
                            <span>{conditionsDetails.source}</span>
                        </ConditionsTitle>
                    </ConditionsHeader>
                    <ConditionsBody>
                        {typeof conditionsDetails.effects === "string" ? (
                            <ConditionsDescription>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {conditionsDetails.effects}
                                </ReactMarkdown>
                            </ConditionsDescription>
                        ) : (
                            conditionsDetails.effects.map((effect)=>(
                                <li key={effect}>{effect}</li>
                            ))
                        )}
                        
                    </ConditionsBody>
                </>
            )}
        </ConditionsDetailsContainer>
    )
}