import { useEffect, useState } from "react";
import { SpellDetailsBody, SpellDetailsContainer, SpellDetailsFooter, SpellDetailsHeader, SpellDetailsTitle } from "./styles";
import { changeColorBySource } from "../../../utils/colorChange";
import { templateSpellLevelChange } from "../../../utils/templateSpellLevelChange";
import { templateSourceChange } from "../../../utils/tamplateSourceChange";

export interface Spell{
    id: string
    name: string;
    source: string;
    level: number;
    school: string;
    ritual: boolean;
    casting_time: string;
    range: string;
    components: string;
    duration: Duration;
    description: string;
    higher_level?: string;
    tables?: Tables;
    classes: string[];
    subclasses: string[];
}
interface Duration{
    time: string;
    concentration: boolean;
}
interface Tables{
    header: string[];
    rows: string[][];
}

interface SpellDetailsProps{
    spellId: string | null;
}
export function SpellDetails({spellId}: SpellDetailsProps){
    const [spellDetails, setSpellDetails] = useState<Spell | null>(null)

    async function fetchSpellDetails(id: string){
        const spellDetails = await fetch(`http://localhost:5000/api/spells/${id}`)
        const spellDetailsJson = await spellDetails.json()
        console.log(spellDetailsJson)
        setSpellDetails(spellDetailsJson[0])
    }

    useEffect(()=>{
        if(spellId != null){
            fetchSpellDetails(spellId)
        }
    }, [spellId])
    
    return (
        <SpellDetailsContainer>
            {spellDetails != null && (
                <>
                <SpellDetailsHeader>
                <SpellDetailsTitle colorVariant={changeColorBySource(spellDetails.source)}>
                    <h3>{spellDetails.name}</h3>
                    <span>{templateSourceChange(spellDetails.source)}</span>
                </SpellDetailsTitle>
                    <p>{templateSpellLevelChange(spellDetails.level)} - {spellDetails.school}</p>
                    <p><strong>Casting Time: </strong>{spellDetails.casting_time}</p>
                    <p><strong>Range: </strong>{spellDetails.range}</p>
                    <p><strong>Components: </strong>{spellDetails.components}</p>
                    <p><strong>Duration: </strong>{spellDetails.duration.concentration ? "Concentration, " : ""} {spellDetails.duration.time}</p>
                </SpellDetailsHeader>
                <SpellDetailsBody>
                    {spellDetails.description.split('\f').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </SpellDetailsBody>
                <SpellDetailsFooter>
                    <p><strong>Classes: </strong>{spellDetails.classes.join(', ')}</p>
                    <p><strong>Subclasses: </strong>{spellDetails.subclasses.join(', ')}</p>
                </SpellDetailsFooter>
                </>
            )}
            </SpellDetailsContainer>
        )
    }