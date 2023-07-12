import { BoxIcons } from "../../../components/BoxIcons";
import { PlayersContainer, PlayersList } from "./styles";
import {GiSpellBook, GiShardSword, GiBowman, GiWomanElfFace, GiAbstract008, GiBlackBook} from 'react-icons/gi'

export function Players(){
    return (
        <PlayersContainer>
            <h1>Players</h1>
            <PlayersList>
                <BoxIcons icon={<GiSpellBook size={60}/>} text="Spells" color="player" path="/spells"/>
                <BoxIcons icon={<GiShardSword size={60}/>} text="Items" color="player" path="/items"/>
                <BoxIcons icon={<GiBowman size={60}/>} text="Classes" color="player"/>
                <BoxIcons icon={<GiWomanElfFace size={60}/>} text="Races" color="player"/>
                <BoxIcons icon={<GiAbstract008 size={60}/>} text="Feats" color="player"/>
                <BoxIcons icon={<GiBlackBook size={60}/>} text="Background" color="player"/>
            </PlayersList>
        </PlayersContainer>
    )
}