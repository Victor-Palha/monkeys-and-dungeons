import { styled } from "styled-components";

export const ItemsDetailsContainer = styled.div`
    width: 40%;
    margin-left: 5rem;
    padding: 5rem 1rem;
    box-shadow: 1px 0px 10px ${props => props.theme.focusColor};
    color: ${props => props.theme.backgroudDefault};
    background-image: ${props => props.theme.paperColor};
    border-radius: 10px 50px;
`

export const ItemsDetailsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    h3{
        font-size: 1.75rem;
        color: ${props => props.theme.peperTitleColor};
        font-family: "Roboto", monospace;
    }
    text-transform: uppercase;
    border-bottom: 1px solid ${props => props.theme.peperTitleColor};
`
export const ItemsDetailsHeader = styled.div`
    margin-bottom: 1rem;
    
`

export const ItemsDetailsBody = styled.div`
    overflow: auto;
    table{
        border-collapse: collapse;
        th{
            padding: 0.75rem;
            background-color: ${props => props.theme.boxColor};
            min-width: 5rem;
        }
        td{
            text-align: center;
            padding: 0.5rem 1rem;
            border: 1px solid ${props => props.theme.peperTitleColor};
            cursor: pointer;
        }
        border-radius: 0 0 5px 5px;
        padding: 1rem;
        background-color: ${props => props.theme.tableColor};
        color: ${props => props.theme.peperTitleColor};
    }
    p{
        margin-bottom: 0.5rem;
    }
`

export const ItemsDetailsFooter = styled.div`
    margin-top: 1rem;
`