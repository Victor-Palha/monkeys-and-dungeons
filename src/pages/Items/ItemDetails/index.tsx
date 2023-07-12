import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import { ItemsDetailsBody, ItemsDetailsContainer, ItemsDetailsHeader, ItemsDetailsTitle} from "./styles";
import remarkGfm from "remark-gfm";

export interface Items{
    id: string,
    name: string,
    desc: string,
    type: string,
    rarity: string,
    requiresAttunement?: boolean,
}

interface ItemsDetailsProps{
    itemId: string | null;
}
export function ItemDetails({itemId}: ItemsDetailsProps){
    const [ItemsDetails, setItemsDetails] = useState<Items | null>(null)

    async function fetchItemsDetails(id: string){
        const ItemsDetails = await fetch(`http://localhost:8080/api/items/${id}`)
        const ItemsDetailsJson = await ItemsDetails.json()
        console.log(ItemsDetailsJson)
        setItemsDetails(ItemsDetailsJson[0])
    }

    useEffect(()=>{
        if(itemId != null){
            fetchItemsDetails(itemId)
        }
    }, [itemId])
    
    return (
        <ItemsDetailsContainer>
            {ItemsDetails != null && (
                <>
                <ItemsDetailsHeader>
                    <ItemsDetailsTitle>
                        <h3>{ItemsDetails.name}</h3>
                    </ItemsDetailsTitle>
                    <p><strong>Type: </strong>{ItemsDetails.type}</p>
                    <p><strong>Rarity: </strong>{ItemsDetails.rarity}</p>
                    <p><strong>Attunement: </strong>{ItemsDetails.requiresAttunement ? "Yes" : "No"}</p>
                </ItemsDetailsHeader>
                <ItemsDetailsBody>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {ItemsDetails.desc}
                    </ReactMarkdown>
                </ItemsDetailsBody>
                </>
            )}
            </ItemsDetailsContainer>
        )
    }