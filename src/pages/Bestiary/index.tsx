import { BestiaryContainer, BestiaryHeight, BestiaryList, BestiaryListBody, BestiaryListHead, BestiaryListMonsterImage } from "./styles";
import {useEffect, useState} from "react"
interface Bestiary{
    id: string
    name: string;
    source: string;
    type: string | {
        type: string;
        tags: string[];
    };
    cr: string;
    image: boolean;
    ext: string;
}
export function Bestiary(){
    const [bestiary, setBestiary] = useState<Bestiary[]>([])

    async function loadBestiary(){
        const bestiary = await fetch("http://localhost:5000/api/monsters?page=1")
        const bestiaryJson = await bestiary.json()
        setBestiary(bestiaryJson)
    }

    useEffect(()=>{
        loadBestiary()
    }, [])
    return (
        <BestiaryContainer>
            <BestiaryHeight>
                <BestiaryList>
                    <BestiaryListHead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>CR</th>
                            <th>Source</th>
                        </tr>
                    </BestiaryListHead>
                    <BestiaryListBody>
                        {bestiary.map((monster)=>(
                            <tr key={monster.id}>
                                <BestiaryListMonsterImage>
                                    {monster.image ? (
                                        <img src={`http://localhost:5000/bestiary/${monster.source}/${monster.name}${monster.ext}`} alt={monster.name}/>
                                    ) : (
                                        <img src={`http://localhost:5000/bestiary/placeholder.png`} alt={monster.name}/>
                                    )}
                                </BestiaryListMonsterImage>
                                <td>{monster.name}</td>
                                {typeof monster.type === "string" ? (
                                    <td>{monster.type}</td>
                                ) : (
                                    <td>{monster.type.type} ({monster.type.tags})</td>
                                )}
                                <td>{monster.cr}</td>
                                <td>{monster.source}</td>
                            </tr>
                        ))}
                    </BestiaryListBody>
                </BestiaryList>
            </BestiaryHeight>
        </BestiaryContainer>
    )
}