import { Search } from "../../components/Search";
import { useFetch } from "../../hooks/useFetch";
import { changeColorBySource } from "../../utils/colorChange";
import { templateSpellLevelChange } from "../../utils/templateSpellLevelChange";
import { SpellDetails } from "./SpellDetails";
import { SpellHeight, SpellList, SpellListBody, SpellListHead, SpellListTdColor, SpellsContainer } from "./styles";
import {useState, useEffect } from 'react';


interface SpellListInterface{
    id: string;
    name: string;
    source: string;
    level: number;
    ritual: boolean;
    concentration: boolean;
    classes: string[];
    school: string;
    time: string;
    range: string;
}
export function Spells(){
    const [spellList, setSpellList] = useState<SpellListInterface[]>([])
    const [activeSpell, setActiveSpell] = useState<string | null>(null)
    // const {data, isLoading} = useFetch("http://localhost:5000/api/spells")
    

    async function LoadSpells(){
        const spells = await fetch("http://localhost:5000/api/spells")
        const spellsJson = await spells.json()
        setSpellList(spellsJson)
    }

    async function handleSearch(searchSpell: string){
        const spells = await fetch(`http://localhost:5000/api/spells/query?search=${searchSpell}`)
        const spellsJson = await spells.json()
        setSpellList(spellsJson)
    }

    function handleActiveSpell(id: string){
        setActiveSpell(id)
    }

    useEffect(() => {
        LoadSpells()
    }, []);

    return (
        <SpellsContainer>
            <SpellHeight>
            <Search handleSearch={handleSearch}/>
            <SpellList>
                    <SpellListHead>
                        <tr>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Time</th>
                            <th>School</th>
                            <th>C.</th>
                            <th>Range</th>
                            <th>Source</th>
                        </tr>
                    </SpellListHead>
                    {spellList.map((spell)=>(
                        <SpellListBody key={spell.id}>
                            <tr onClick={()=> handleActiveSpell(spell.id)}>
                                <td>{spell.name}</td>
                                <td>{templateSpellLevelChange(spell.level)}</td>
                                <td>{spell.time}</td>
                                <td>{spell.school}</td>
                                <td>{spell.concentration ? "X" : " "}</td>
                                <td>{spell.range}</td>
                                <SpellListTdColor colorVariant={changeColorBySource(spell.source)}>
                                    {spell.source}
                                </SpellListTdColor>
                            </tr>
                        </SpellListBody>
                    ))}
                    
            </SpellList>
            </SpellHeight>
            <SpellDetails spellId={activeSpell}/>
        </SpellsContainer>
    )
}
