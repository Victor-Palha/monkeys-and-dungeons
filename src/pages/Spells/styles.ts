import { styled } from "styled-components";

export const SpellsContainer = styled.section`
    margin: 5rem 10rem;
    display: flex;
`
export const SpellHeight = styled.div`
    height: 70vh;
    overflow: auto;
    width: 80%;
`
export const SpellList = styled.table`
    border-collapse: collapse;
    
`
export const SpellListHead = styled.thead`
    th{
        padding: 0.5rem 1rem;
    }
    background-color: ${props => props.theme.boxColor};
    color: ${props => props.theme.textColorDefault};
`

export const SpellListBody = styled.tbody`
    td{
        padding: 0.5rem 1rem;
        color: ${props => props.theme.tableColor};
        border-bottom: 1px solid ${props => props.theme.tableColor};
        cursor: pointer;
    }
`
interface SpellListBodyProps {
    colorVariant: string;
}
export const SpellListTdColor = styled.td<SpellListBodyProps>`
    color: ${props => props.colorVariant}!important;
`