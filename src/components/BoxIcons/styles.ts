import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface BoxIconsContainerProps {
    colorVariant: "player" | "dm"
}
export const BoxIconsContainer = styled(Link)<BoxIconsContainerProps>`
    text-decoration: none;
    color: ${props => props.theme.textColorDefault};
    background-color: ${props => props.theme.boxColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5625rem 2.4rem;
    border-radius: 8px;
    transition: 0.5s;
    cursor: pointer;
    p{
        margin-top: 0.75rem;
        font-size: 1.25rem;
    }
    &&:hover{
        transform: scale(1.1);
        box-shadow: 0px 0px 10px ${props => props.colorVariant === "player" ? props.theme.focusColor : props.theme.dungeonsMasterColor};
        svg{
            transition: 0.5s;
            color: ${props => props.colorVariant === "player" ? props.theme.focusColor : props.theme.dungeonsMasterColor};
        }
    }
    margin: 2.75rem;
    &&:first-child{
        margin-left: 0;
    }
    &&:last-child{
        margin-right: 0;
    }
`