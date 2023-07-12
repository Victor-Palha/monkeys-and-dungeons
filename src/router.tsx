import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Spells } from "./pages/Spells";
import { Items } from "./pages/Items";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/spells" element={<Spells/>}/>
                <Route path="/items" element={<Items/>}/>
            </Route>
        </Routes>
    )
}