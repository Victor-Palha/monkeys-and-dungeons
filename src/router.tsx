import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Spells } from "./pages/Spells";
import { Items } from "./pages/Items";
import { Classes } from "./pages/Classes";
import { Feats } from "./pages/Feats";
import { Backgrounds } from "./pages/Backgrounds";
import { Bestiary } from "./pages/Bestiary";
import { Conditions } from "./pages/Conditions";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/spells" element={<Spells/>}/>
                <Route path="/items" element={<Items/>}/>
                <Route path="/classes" element={<Classes/>}/>
                <Route path="/feats" element={<Feats/>}/>
                <Route path="/backgrounds" element={<Backgrounds/>}/>
                <Route path="/bestiary" element={<Bestiary/>}/>
                <Route path="/conditions" element={<Conditions/>}/>
            </Route>
        </Routes>
    )
}