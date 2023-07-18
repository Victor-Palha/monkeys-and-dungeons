import { useEffect, useState } from "react";
import { BackgroundHeight, BackgroundList, BackgroundListBody, BackgroundListHead, BackgroundsContainer } from "./styles";
import { BackgroundDetails } from "./BackgroundDetails";

interface BackgroundInterface{
    name: string;
    SkillProficiencies: string;
    Source: string;
    id: string
}
export function Backgrounds(){
    const [backgroundList, setBackgroundList] = useState<BackgroundInterface[]>([])
    const [activeBackground, setActiveBackground] = useState<string | null>(null)
    

    async function LoadBackgrounds(){
        const Backgrounds = await fetch("http://localhost:5000/api/backgrounds")
        const BackgroundsJson = await Backgrounds.json()
        setBackgroundList(BackgroundsJson)
    }

    async function handleSearch(searchBackground: string){
        const Backgrounds = await fetch(`http://localhost:5000/api/Backgrounds/query?search=${searchBackground}`)
        const BackgroundsJson = await Backgrounds.json()
        setBackgroundList(BackgroundsJson)
    }

    function handleActiveBackground(id: string){
        setActiveBackground(id)
    }

    useEffect(() => {
        LoadBackgrounds()
    }, []);
    return (
        <BackgroundsContainer>
            <BackgroundHeight>
                <BackgroundList>
                    <BackgroundListHead>
                        <tr>
                            <th>Name</th>
                            <th>Skill Proficiencies</th>
                            <th>Source</th>
                        </tr>
                    </BackgroundListHead>
                    <BackgroundListBody>
                        {backgroundList.map((background)=>(
                            <tr key={background.id} onClick={() => handleActiveBackground(background.id)}>
                                <td>{background.name}</td>
                                <td>{background.SkillProficiencies}</td>
                                <td>{background.Source}</td>
                            </tr>
                        ))}
                    </BackgroundListBody>
                </BackgroundList>
            </BackgroundHeight>
            <BackgroundDetails id={activeBackground}/>
        </BackgroundsContainer>
    )
}