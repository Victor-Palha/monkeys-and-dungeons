import { styled } from "styled-components";

export const BackgroundsContainer = styled.div`
    margin: 5rem 10rem;
    display: flex;
`

export const BackgroundHeight = styled.div`
    height: 64.8vh;
    overflow: auto;
    width: 60%;
`
export const BackgroundList = styled.table`
    border-collapse: collapse;
    
`
export const BackgroundListHead = styled.thead`
    th{
        padding: 0.5rem 1rem;
    }
    background-color: ${props => props.theme.boxColor};
    color: ${props => props.theme.textColorDefault};
`

export const BackgroundListBody = styled.tbody`
    td{
        padding: 0.5rem 1rem;
        color: ${props => props.theme.tableColor};
        border-bottom: 1px solid ${props => props.theme.tableColor};
        cursor: pointer;
    }
`