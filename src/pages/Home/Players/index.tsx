import { PlayersBox, PlayersContainer, PlayersList } from "./styles";
import {GiSpellBook} from 'react-icons/gi'

export function Players(){
    return (
        <PlayersContainer>
            <h1>Players</h1>
            <PlayersList>
                <PlayersBox>
                    <GiSpellBook size={60}/>
                    <p>Spells</p>
                </PlayersBox>
            </PlayersList>
        </PlayersContainer>
    )
}