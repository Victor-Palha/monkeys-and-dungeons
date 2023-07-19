import { useEffect, useState } from "react";
import { ConditionsContainer, ConditionsHeight, ConditionsList, ConditionsListBody, ConditionsListHead} from "./styles";
import { ConditionsDetails } from "./ConditionDetails";

interface AllConditions{
    name: string
    source: string
    id: string
}
export function Conditions(){
    const [conditions, setConditions] = useState<AllConditions[]>([])
    const [activeCondition, setActiveCondition] = useState<string | null>(null)

    async function loadConditions(){
        const conditions = await fetch("http://localhost:5000/api/conditions")
        const conditionsJson = await conditions.json()
        setConditions(conditionsJson)
    }

    async function handleActiveCondition(id: string){
        setActiveCondition(id)
    }

    useEffect(()=>{
        loadConditions()
    }, [])

    return (
        <ConditionsContainer>
            <ConditionsHeight>
            <ConditionsList>
                <ConditionsListHead>
                    <tr>
                        <th>Name</th>
                        <th>Source</th>
                    </tr>
                </ConditionsListHead>
                <ConditionsListBody>
                    {conditions.map((condition)=>(
                        <tr key={condition.id} onClick={()=> handleActiveCondition(condition.id)}>
                            <td>{condition.name}</td>
                            <td>{condition.source}</td>
                        </tr>
                    ))}
                </ConditionsListBody>
            </ConditionsList>
            </ConditionsHeight>
            <ConditionsDetails id={activeCondition}/>
        </ConditionsContainer>
    )
}