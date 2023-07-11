import { Header } from "../../components/Header";
import { Players } from "./Players";
import { HomeContainer } from "./styles";

export function Home() {

    return (
        <HomeContainer>
            <Header/>
            <Players/>
        </HomeContainer>
    )
}