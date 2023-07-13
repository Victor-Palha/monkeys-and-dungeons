import { useEffect, useState } from "react";
import { ClasseAbilitys, ClasseInfoContainer, ClasseProficiency } from "./styles";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

interface ClasseInterface {
    id: string,
    name: string,
    class_features: {
        hit_points: {
            hit_dice: string,
            hp_at_1st_level: string,
            hp_at_higher_levels: string
        },
        proficiencies: {
            armor: string,
            weapons: string,
            tools: string,
            saving_throws: string,
            skills: string
        }
        equipment: string[]
    },
    features: Features[]
}

interface Features {
    index: string,
    name: string,
    content: string
}


interface ClasseInfoProps{
    classe: string
}
export function ClasseInfo({classe}: ClasseInfoProps){
    const [classeInfo, setClasseInfo] = useState<ClasseInterface>({} as ClasseInterface)
    const [loading, setLoading] = useState(true)

    async function loadClasseInfo(classe: string){
        setLoading(true)
        const response = await fetch(`http://localhost:5000/api/classes?classe=${classe}`)
        const data = await response.json()

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
                        <h2>{classeInfo.name}</h2>
                        <h3>Hit Points</h3>
                        <p><strong>Hit Dice: </strong>{classeInfo.class_features.hit_points.hit_dice}</p>
                        <p><strong>Hit Points at 1st Level: </strong>{classeInfo.class_features.hit_points.hp_at_1st_level}</p>
                        <p><strong>Hit Points at Higher Levels: </strong>{classeInfo.class_features.hit_points.hp_at_higher_levels}</p>
                        <h3>Proficiencies</h3>
                        <p><strong>Armor: </strong>{classeInfo.class_features.proficiencies.armor}</p>
                        <p><strong>Weapons: </strong>{classeInfo.class_features.proficiencies.weapons}</p>
                        <p><strong>Tools: </strong>{classeInfo.class_features.proficiencies.tools}</p>
                        <p><strong>Saving Throws: </strong>{classeInfo.class_features.proficiencies.saving_throws}</p>
                        <p><strong>Skills: </strong>{classeInfo.class_features.proficiencies.skills}</p>
                        <h3>Starting Equipment</h3>
                        <p>You start with the following items, plus anything provided by your background.</p>
                        <ul>
                            {classeInfo.class_features.equipment.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </ClasseProficiency>
                
                    <ClasseAbilitys>
                        {classeInfo.features.map((feature)=> (
                            <div key={feature.index}>
                                <h2>{feature.name}</h2>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {feature.content}
                                </ReactMarkdown>
                            </div>
                        ))}
                    </ClasseAbilitys>
                </>
            )}
        </ClasseInfoContainer>
    )
}