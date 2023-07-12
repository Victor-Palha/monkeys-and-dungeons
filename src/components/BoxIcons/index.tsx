import { ReactNode } from "react";
import { BoxIconsContainer } from "./styles";

interface BoxIconsProps{
    icon: ReactNode;
    text: string;
    color: "player" | "dm";
    path?: string;
}
export function BoxIcons({icon, text, color, path = "#"}: BoxIconsProps){
    return (
        <BoxIconsContainer colorVariant={color} to={path}>
            {icon}
            <p>{text}</p>
        </BoxIconsContainer>
    )
}