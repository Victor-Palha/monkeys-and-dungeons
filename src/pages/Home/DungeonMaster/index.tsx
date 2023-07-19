import { BoxIcons } from "../../../components/BoxIcons";
import { DMList, DungeonMasterContainer } from "./styles";
import {GiSpikedDragonHead, GiBookmarklet, GiBackstab} from 'react-icons/gi'

export function DungeonsMaster(){
    return (
        <DungeonMasterContainer>
        <h1>Dungeon Master</h1>
        <DMList>
            <BoxIcons icon={<GiSpikedDragonHead size={60}/>} text="Bestiary" color="dm" path="bestiary"/>
            <BoxIcons icon={<GiBookmarklet size={60}/>} text="Adventure" color="dm"/>
            <BoxIcons icon={<GiBackstab size={60}/>} text="Conditions" color="dm" path="conditions"/>
            {/* <BoxIcons icon={<GiOpenTreasureChest size={60}/>} text="Loot" color="dm"/> */}
        </DMList>
    </DungeonMasterContainer>
    )
}