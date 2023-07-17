import { styled } from "styled-components";

export const FeatsContainer = styled.section`
    margin: 5rem 15rem;
    display: flex;
`
export const FeatsHeight = styled.div`
    height: 64.8vh;
    overflow: auto;
`

export const FeatsList = styled.table`
`
export const FeatsListHead = styled.thead`
    th{
        padding: 1rem 0.5rem;
    }
    background-color: ${props => props.theme.boxColor};
    color: ${props => props.theme.textColorDefault};
`

export const FeatsListBody = styled.tbody`
    td{
        padding: 0.5rem 5rem;
        color: ${props => props.theme.tableColor};
        border-bottom: 1px solid ${props => props.theme.tableColor};
        cursor: pointer;
    }
`