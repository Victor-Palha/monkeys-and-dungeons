import { useEffect, useRef, useState } from "react";
import { BestiaryDetailsContainer, BestiaryDetailsHeader, BestiaryDetailsInfo, BestiaryDetailsStats, BestiaryDetailsTitle } from "./styles";

interface Monster{
    id: string
    name: string;
    meta: string;
    Armor_Class: string;
    Hit_Points: string;
    Speed: string;
    STR: string;
    DEX: string;
    CON: string;
    INT: string;
    WIS: string;
    CHA: string;
    STR_mod: string;
    DEX_mod: string;
    CON_mod: string;
    INT_mod: string;
    WIS_mod: string;
    CHA_mod: string;
    Senses: string;
    Languages: string;
    Challenge: string;
    Traits: string;
    Actions: string;
    img_url: string;
    Damage_Resistances?: string;
    Condition_Immunities?: string;
    Damage_Immunities?: string;
    Saving_Throws?: string;
    Skills?: string;
    Legendary_Actions?: string;
}

interface BastiaryDetailsProps{
    id: string;
}
export function BestiaryDetails({id}: BastiaryDetailsProps){

    const [monster, setMonster] = useState<Monster>({} as Monster)
    const monsterRef = useRef<HTMLDivElement>(null)

    async function loadMonster(){
        const response = await fetch(`http://localhost:5000/api/monsters/${id}`)
        const data = await response.json()
        setMonster(data)
    }

    useEffect(()=>{
        if(id !== ""){
            loadMonster()
            monsterRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [id])
    return (
        <BestiaryDetailsContainer>
            {id !== "" && (
                <>
                    <BestiaryDetailsHeader>
                        <BestiaryDetailsTitle ref={monsterRef}>
                            <h1>{monster.name}</h1>
                            <span>MM</span>
                        </BestiaryDetailsTitle>
                        <p>{monster.meta}</p>
                        <BestiaryDetailsInfo>
                            <p><strong>Armor class: </strong>{monster.Armor_Class}</p>
                            <p><strong>Hit Points: </strong>{monster.Hit_Points}</p>
                            <p><strong>Speed: </strong>{monster.Speed}</p>
                        </BestiaryDetailsInfo>
                        <BestiaryDetailsStats>
                            <div>
                                <p><strong>STR: </strong>{monster.STR}</p>
                                <p>{monster.STR_mod}</p>
                            </div>
                            <div>
                                <p><strong>DEX: </strong>{monster.DEX}</p>
                                <p>{monster.DEX_mod}</p>
                            </div>
                            <div>
                                <p><strong>CON: </strong>{monster.CON}</p>
                                <p>{monster.CON_mod}</p>
                            </div>
                            <div>
                                <p><strong>INT: </strong>{monster.INT}</p>
                                <p>{monster.INT_mod}</p>
                            </div>
                            <div>
                                <p><strong>WIS: </strong>{monster.WIS}</p>
                                <p>{monster.WIS_mod}</p>
                            </div>
                            <div>
                                <p><strong>CHA: </strong>{monster.CHA}</p>
                                <p>{monster.CHA_mod}</p>
                            </div>
                        </BestiaryDetailsStats>
                        <BestiaryDetailsInfo>
                            {monster.Saving_Throws && (
                                <p><strong>Saving Throws: </strong>{monster.Saving_Throws}</p>
                            )}
                            {monster.Skills && (
                                <p><strong>Skills: </strong>{monster.Skills}</p>
                            )}
                            {monster.Damage_Resistances && (
                                <p><strong>Damage Resistances: </strong>{monster.Damage_Resistances}</p>
                            )}
                            {monster.Damage_Immunities && (
                                <p><strong>Damage Immunities: </strong>{monster.Damage_Immunities}</p>
                            )}
                            {monster.Condition_Immunities && (
                                <p><strong>Condition Immunities: </strong>{monster.Condition_Immunities}</p>
                            )}
                            {monster.Senses && (
                                <p><strong>Senses: </strong>{monster.Senses}</p>
                            )}
                            {monster.Languages && (
                                <p><strong>Languages: </strong>{monster.Languages}</p>
                            )}
                            <p><strong>Challenge: </strong>{monster.Challenge}</p>
                        </BestiaryDetailsInfo>
                        <BestiaryDetailsInfo>
                            <div dangerouslySetInnerHTML={{__html: monster.Traits}}></div>
                        </BestiaryDetailsInfo>
                        <BestiaryDetailsInfo>
                            <div dangerouslySetInnerHTML={{__html: monster.Actions}}></div>
                        </BestiaryDetailsInfo>
                        {monster.Legendary_Actions && (
                            <BestiaryDetailsInfo>
                                <div dangerouslySetInnerHTML={{__html: monster.Legendary_Actions}}></div>
                            </BestiaryDetailsInfo>
                        )}
                    </BestiaryDetailsHeader>
                </>
            )}

        </BestiaryDetailsContainer>
    )
}