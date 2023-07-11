import { styled } from "styled-components";

export const DungeonMasterContainer = styled.section`
    margin: 5.4rem;
    h1{
        font-size: 2rem;
        margin-bottom: 3rem;
        color: ${props => props.theme.textColorDefault};
        border-bottom: 1px solid ${props => props.theme.dungeonsMasterColor};
        padding-bottom: 0.25rem;
        text-shadow: 0px 2px 5px ${props => props.theme.dungeonsMasterColor};
    }
`

export const DMList = styled.div`
    display: flex;
`