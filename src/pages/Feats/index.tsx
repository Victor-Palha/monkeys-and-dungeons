import { useEffect, useState } from "react";
import { FeatsContainer, FeatsHeight, FeatsList, FeatsListBody, FeatsListHead} from "./styles";
import { FeatDetails } from "./FeatDetails";

interface AllFeats{
    name: string
    id: string
}
export function Feats(){
    const [feats, setFeats] = useState<AllFeats[]>([])
    const [activeFeat, setActiveFeat] = useState<string | null>(null)

    async function loadFeats(){
        const feats = await fetch("http://localhost:5000/api/feats")
        const featsJson = await feats.json()
        setFeats(featsJson)
    }

    async function handleActiveFeat(id: string){
        setActiveFeat(id)
    }

    useEffect(()=>{
        loadFeats()
    }, [])

    return (
        <FeatsContainer>
            <FeatsHeight>
            <FeatsList>
                <FeatsListHead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </FeatsListHead>
                <FeatsListBody>
                    {feats.map((feat)=>(
                        <tr key={feat.id}>
                            <td onClick={()=> handleActiveFeat(feat.id)}>{feat.name}</td>
                        </tr>
                    ))}
                </FeatsListBody>
            </FeatsList>
            </FeatsHeight>
            <FeatDetails featId={activeFeat}/>
        </FeatsContainer>
    )
}