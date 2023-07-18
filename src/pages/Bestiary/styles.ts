import { styled } from "styled-components";

export const BestiaryContainer = styled.section`    
    margin: 5rem 10rem;
    display: flex;
`
export const BestiaryHeight = styled.div`
    height: 64.8vh;
    overflow: auto;
    width: 46%;
`
export const BestiaryList = styled.table`
    border-collapse: collapse;

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
 img{
    width: 10rem;
 }
`