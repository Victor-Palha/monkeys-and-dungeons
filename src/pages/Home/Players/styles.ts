import { styled } from "styled-components";

export const PlayersContainer = styled.section`
    margin: 5.4rem;
    h1{
        font-size: 2rem;
        margin-bottom: 3rem;
        color: ${props => props.theme.textColorDefault};
        border-bottom: 1px solid ${props => props.theme.focusColor};
        padding-bottom: 0.25rem;
        text-shadow: 0px 2px 5px ${props => props.theme.focusColor};
    }
`

export const PlayersList = styled.div`
    display: flex;
`

export const PlayersBox = styled.div`
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
        svg{
            transition: 0.5s;
            color: ${props => props.theme.focusColor};
        }
    }
`