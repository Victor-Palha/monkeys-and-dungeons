import { SearchContainer } from "./styles";
import {useState, useEffect} from "react"

interface SearchInterface{
    handleSearch: (search: string) => void;
}
export function Search({handleSearch}: SearchInterface){
    const [search, setSearch] = useState("")
    useEffect(()=>{
        handleSearch(search)
    }, [search])
    return(
        <SearchContainer>
            <input 
            type="text" 
            placeholder="Search..." 
            value={search}
            onChange={(e)=> {setSearch(e.target.value)}}
            />
        </SearchContainer>
    )
}