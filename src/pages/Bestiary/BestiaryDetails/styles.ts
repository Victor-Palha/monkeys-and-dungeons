import { styled } from "styled-components";

export const BestiaryDetailsContainer = styled.section`
    border: 1px solid ${props => props.theme.boxColor};
    color: ${props => props.theme.tableColor};
    margin: 5rem 10rem;
    padding: 2rem;
    border-radius: 5rem 1rem;
`

export const BestiaryDetailsHeader = styled.header`

`

export const BestiaryDetailsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    h1{
        font-size: 2rem;
        color: ${props => props.theme.monsterColorTitle};
    }
    span {
        font-size: 1.5rem;
        color: ${props => props.theme.monsterColorTitle};
    }
`
export const BestiaryDetailsInfo = styled.div`
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: 2px solid ${props => props.theme.monsterColorTitle};
    border-bottom: 2px solid ${props => props.theme.monsterColorTitle};
    p{
        margin: 0.5rem 0;
    }
`
export const BestiaryDetailsStats = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`