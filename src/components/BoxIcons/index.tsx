import { ReactNode } from "react";
import { BoxIconsContainer } from "./styles";

interface BoxIconsProps{
    icon: ReactNode;
    text: string;
    color: "player" | "dm";
}
export function BoxIcons({icon, text, color}: BoxIconsProps){
    return (
        <BoxIconsContainer colorVariant={color}>
            {icon}
            <p>{text}</p>
        </BoxIconsContainer>
    )
}