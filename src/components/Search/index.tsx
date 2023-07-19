import { SearchContainer } from "./styles";
import {useState, useEffect} from "react"

interface SearchInterface{
    handleSearch: (search: string) => void;
    withComplete?: boolean
}
export function Search({handleSearch, withComplete = false}: SearchInterface){
    const [search, setSearch] = useState("")
    useEffect(()=>{
        handleSearch(search)
    }, [search])
    return(
        <SearchContainer withComplete={withComplete}>
            <input 
            type="text" 
            placeholder="Search..." 
            value={search}
            onChange={(e)=> {setSearch(e.target.value)}}
            />
        </SearchContainer>
    )
}