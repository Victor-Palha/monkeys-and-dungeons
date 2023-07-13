import { useEffect, useState } from "react";
import { ClasseBody, ClasseContainer, ClasseHeader, ClasseOptions } from "./styles";
import { ClasseTable } from "./ClasseTable";
import { ClasseInfo } from "./ClasseInfo";

interface ClasseOptionProps{
    index: string
    name: string
    url: string
}

export function Classes(){
    const [classeOption, setClasseOption] = useState<ClasseOptionProps[]>([])
    const [classeChoice, setClasseChoice] = useState("")
    

    async function loadClasseOption(){
        const response = await fetch('https://www.dnd5eapi.co/api/classes')
        const data = await response.json()
        setClasseOption(data.results)
    }

    useEffect(()=>{
        loadClasseOption()
    }, [classeChoice])

    return(
        <ClasseContainer>
            <ClasseHeader>
                <ClasseOptions>
                    <h1>Classes</h1>
                    {classeOption.map((classe, index)=>(
                        <li key={index} onClick={()=>setClasseChoice(classe.index)}>{classe.name}</li>
                    ))}
                </ClasseOptions>
                <ClasseTable classe={classeChoice}/>
            </ClasseHeader>
            {classeChoice !== "" && (
                <ClasseBody>
                    <ClasseInfo classe={classeChoice}/>
                </ClasseBody>
            )}
        </ClasseContainer>
    )
}