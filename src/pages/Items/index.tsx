import { useEffect, useState } from "react";
import { Search } from "../../components/Search";
import { ItemContainer, ItemHeight, ItemList, ItemListBody, ItemListHead, ItemListTdColor } from "./styles";
import { ItemDetails } from "./ItemDetails";

export interface ItemsListInterface{
    id: string,
    name: string,
    desc: string,
    type: string,
    rarity: string,
    requiresAttunement?: boolean,
}
export function Items(){
    const [itemList, setItemList] = useState<ItemsListInterface[]>([])
    const [activeItem, setActiveItem] = useState<string | null>(null)
    

    async function LoadItem(){
        const items = await fetch("http://localhost:8080/api/items")
        const itemsJson = await items.json()
        setItemList(itemsJson)
    }

    async function handleSearch(searchItem: string){
        const items = await fetch(`http://localhost:8080/api/items/query?search=${searchItem}`)
        const itemsJson = await items.json()
        setItemList(itemsJson)
    }

    function handleActiveItem(id: string){
        setActiveItem(id)
    }

    useEffect(()=>{
        LoadItem()
    }, [])
    return(
        <ItemContainer>
            <ItemHeight>
            <Search handleSearch={handleSearch}/>
            <ItemList>
                    <ItemListHead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rarity</th>
                            <th>Attunement</th>
                        </tr>
                    </ItemListHead>
                    {itemList.map((item)=>(
                        <ItemListBody key={item.id}>
                            <tr onClick={()=> handleActiveItem(item.id)}>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.rarity}</td>
                                <td>{item.requiresAttunement ? "Yes" : "No"}</td>
                            </tr>
                        </ItemListBody>
                    ))}
                    
            </ItemList>
            </ItemHeight>
            <ItemDetails itemId={activeItem}/>
        </ItemContainer>
    )
}