import { styled } from "styled-components";

export const ClasseContainer = styled.section`

`

export const ClasseHeader = styled.div`
    display: grid;
    grid-template-columns: 15rem 1fr;
    gap: 20rem;
    padding: 3rem 10rem;
`

export const ClasseOptions = styled.ul`
    list-style: none;
    background-image: ${props => props.theme.paperColor};
    color: ${props => props.theme.peperTitleColor};
    height: 35rem;
    padding: 1rem;
    border-radius: 2px 50px;
    h1{
        margin-bottom: 1rem;
        border-bottom: 1px solid ${props => props.theme.peperTitleColor};
    }
    li{
        cursor: pointer;
        margin-bottom: 0.75rem;
        padding: 0.25rem;
        border-bottom:1px solid transparent;
        transition: 0.2s;
        &:hover{
            border-bottom:1px solid ${props => props.theme.peperTitleColor};
        }
    }
    box-shadow: -5px 2px 10px ${props => props.theme.backgroudDefault};
`



export const ClasseBody = styled.div``

