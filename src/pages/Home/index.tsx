import { DungeonsMaster } from "./DungeonMaster";
import { Players } from "./Players";
import { HomeContainer } from "./styles";

export function Home() {

    return (
        <HomeContainer>
            <Players/>
            <DungeonsMaster/>
        </HomeContainer>
    )
}