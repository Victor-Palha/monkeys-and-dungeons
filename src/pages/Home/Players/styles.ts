import { styled } from "styled-components";

export const PlayersContainer = styled.section`
    margin: 5.4rem;
    h1{
        font-size: 2rem;
        margin-bottom: 3rem;
        color: ${props => props.theme.textColorDefault};
        border-bottom: 2px solid ${props => props.theme.focusColor};
        padding-bottom: 0.25rem;
        text-shadow: 0px 2px 5px ${props => props.theme.focusColor};
    }
`

export const PlayersList = styled.div`
    display: flex;
    flex-wrap: wrap;
`