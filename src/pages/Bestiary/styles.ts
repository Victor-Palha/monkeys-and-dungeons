import { styled } from "styled-components";

export const BestiaryContainer = styled.section`    
    margin: 5rem 10rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const BestiaryHeight = styled.div`
    height: 64.8vh;
    overflow: auto;
    button{
        margin: 2rem 0;
        text-align: center;
        width: 100%;
        background-color: transparent;
        border: none;
        color: ${props => props.theme.dungeonsMasterColor};
        font-size: 1.6rem;
        font-weight: bold;
        cursor: pointer;
    }
`
export const BestiaryList = styled.table`
    border-collapse: collapse;
    width: 100%;
    text-align: center
`

export const BestiaryListHead = styled.thead`
    th{
        padding: 0.5rem 1rem;
    }
    background-color: ${props => props.theme.boxColor};
    color: ${props => props.theme.textColorDefault};
`

export const BestiaryListBody = styled.tbody`
    td{
        padding: 0.5rem 1rem;
        color: ${props => props.theme.tableColor};
        border-bottom: 1px solid ${props => props.theme.tableColor};
        cursor: pointer;
    }

`

export const BestiaryListMonsterImage = styled.td`
width: 20rem;
 img{
    width: 10rem;
    height: 10rem;
    transition: 0.3s;
    &:hover{
        transform: scale(1.3);
        box-shadow: 0px 0px 10px #fff;
        border-radius: 50%;
    }
 }
`