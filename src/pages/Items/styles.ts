import { styled } from "styled-components";

export const ItemContainer = styled.section`
    margin: 5rem 10rem;
    display: flex;
`

export const ItemHeight = styled.div`
    height: 64.8vh;
    overflow: auto;
    width: 60%;
`
export const ItemList = styled.table`
    border-collapse: collapse;
    
`
export const ItemListHead = styled.thead`
    th{
        padding: 0.5rem 1rem;
    }
    background-color: ${props => props.theme.boxColor};
    color: ${props => props.theme.textColorDefault};
`

export const ItemListBody = styled.tbody`
    td{
        padding: 0.5rem 1rem;
        color: ${props => props.theme.tableColor};
        border-bottom: 1px solid ${props => props.theme.tableColor};
        cursor: pointer;
    }
`
interface ItemListBodyProps {
    colorVariant: string;
}
export const ItemListTdColor = styled.td<ItemListBodyProps>`
    color: ${props => props.colorVariant}!important;
`