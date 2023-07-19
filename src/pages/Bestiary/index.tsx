import { Search } from "../../components/Search";
import { BestiaryDetails } from "./BestiaryDetails";
import { BestiaryContainer, BestiaryHeight, BestiaryList, BestiaryListBody, BestiaryListHead, BestiaryListMonsterImage } from "./styles";
import {useEffect, useRef, useState} from "react"
interface Bestiary{
    id: string
    name: string;
    meta: string;
    Challenge: string;
    img_url: string;
}
export function Bestiary(){
    const [search, setSearch] = useState(false)
    const [activeMonster, setActiveMonster] = useState("")
    const [page, setPage] = useState(1)
    const [bestiary, setBestiary] = useState<Bestiary[]>([])
    const monsterRef = useRef<HTMLDivElement>()

    async function loadBestiary(){
        setSearch(false)
        const bestiaryData = await fetch("http://localhost:5000/api/monsters?page="+page)
        const bestiaryJson = await bestiaryData.json()

        setBestiary([...bestiary, ...bestiaryJson])
    }

    function handlePage(){
        const atualPage = page
        setPage(atualPage+1)
    }

    async function handleSearch(searchMonster: string){
        setSearch(true)
        if(searchMonster === ""){
            loadBestiary()
            return
        }
        const spells = await fetch(`http://localhost:5000/api/monsters/query?search=${searchMonster}`)
        const spellsJson = await spells.json()
        setBestiary(spellsJson)
        setPage(0)
    }

    function handleActiveMonster(id: string){
        setActiveMonster(id)
    }

    useEffect(()=>{
        if(!search){
            loadBestiary()
        }
    }, [page])
    return (
        <BestiaryContainer>
            <BestiaryHeight>
                <Search handleSearch={handleSearch} withComplete={true}/>
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
                            <tr key={monster.id}  onClick={()=>handleActiveMonster(monster.id)}>
                                <BestiaryListMonsterImage>
                                    <img src={monster.img_url} alt={monster.name}/>
                                </BestiaryListMonsterImage>
                                <td>{monster.name}</td>
                                <td>{monster.meta}</td>
                                <td>{monster.Challenge}</td>
                                <td>MM</td>
                            </tr>
                        ))}
                    </BestiaryListBody>
                </BestiaryList>
                <button onClick={()=>{handlePage()}}>See More</button>
            </BestiaryHeight>
            
            <BestiaryDetails id={activeMonster} />
            
        </BestiaryContainer>
    )
}