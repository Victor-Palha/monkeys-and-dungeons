import { useEffect, useState } from "react";
import { ClasseAbilitys, ClasseInfoContainer, ClasseProficiency } from "./styles";

interface ClasseInfoProps{
    classe: string
}
export function ClasseInfo({classe}: ClasseInfoProps){
    const [classeInfo, setClasseInfo] = useState<any>({})
    const [classeProficienciesSkills, setClasseProficienciesSkills] = useState<any>([])
    const [classeProficienciesTools, setClasseProficienciesTools] = useState<any>([])
    const [loading, setLoading] = useState(true)

    async function loadClasseInfo(classe: string){
        setLoading(true)
        const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classe}`)
        const data = await response.json()
        console.log(data.proficiency_choices[1])
        setClasseProficienciesSkills(data.proficiency_choices[0])
        setClasseProficienciesTools(data.proficiency_choices[1])
        setClasseInfo(data)
        setLoading(false)
    }

    useEffect(()=>{
        loadClasseInfo(classe)
    }, [classe])
    return(
        <ClasseInfoContainer>
            {!loading && (
                <>
                    <ClasseProficiency>
                        <h3>{classeInfo.name}</h3>
                        <h4>Hit Points</h4>
                        <p><strong>Hit Dice: </strong>1d{classeInfo.hit_die}</p>
                        <p><strong>Hit Points at 1st Level: </strong>{classeInfo.hit_die} + your Constitution modifier</p>
                        <p><strong>Hit Points at Higher Levels: </strong>1d{classeInfo.hit_die} + your Constitution modifier per {classeInfo.name} level after 1st</p>
                        <h4>Proficiencies</h4>
                        {classeInfo.proficiencies.map((proficiency: any)=>(
                            <p key={proficiency.index}>{proficiency.name.replace("Saving Throw: ", "")}</p>
                        ))}

                        {classeProficienciesSkills && classeProficienciesTools && (
                            <>
                            {classeProficienciesSkills !== undefined && (
                                <p><strong>Skills: </strong>Choose {classeProficienciesSkills.choose} from {classeProficienciesSkills.from.options.map((skill: any)=> (
                                    <span key={skill.item.index}>{skill.item.name.replace("Skill: ", "")}</span>
                                ))}</p>
                            )}
                            {classeProficienciesTools !== undefined && classe === "monk" && (
                                <p><strong>Tools: </strong>Choose {classeProficienciesTools.choose} from {classeProficienciesTools.from.options.map((tool: any)=> (
                                    <span key={tool.index}>{tool.choice.desc}</span>
                                ))}</p>
                            )}
                            {classeProficienciesTools !== undefined && classe !== "monk" && (
                                <p><strong>Tools: </strong>Choose {classeProficienciesTools.choose} from {classeProficienciesTools.from.options.map((tool: any)=> (
                                    <span key={tool.item.index}>{tool.item.name.replace("Tools: ", "")}</span>
                                ))}</p>
                            )}
                            </>
                        )
                        }

                    </ClasseProficiency>
                    <ClasseAbilitys>

                    </ClasseAbilitys>
                </>
            )}
        </ClasseInfoContainer>
    )
}