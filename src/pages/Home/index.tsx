import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DungeonsMaster } from "./DungeonMaster";
import { Players } from "./Players";
import { HomeContainer } from "./styles";

export function Home() {

    return (
        <HomeContainer>
            <Header/>
            <Players/>
            <DungeonsMaster/>
            <Footer/>
        </HomeContainer>
    )
}