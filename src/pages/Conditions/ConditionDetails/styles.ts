import { styled } from "styled-components";

export const ConditionsDetailsContainer = styled.div`
    width: 60%;
    margin-left: 5rem;
    padding: 5rem 1rem;
    box-shadow: 1px 0px 10px ${props => props.theme.focusColor};
    color: ${props => props.theme.backgroudDefault};
    background-image: ${props => props.theme.paperColor};
    border-radius: 10px 50px;
`

export const ConditionsHeader = styled.div`
    margin-bottom: 2rem;
`

export const ConditionsDescription = styled.div`
    margin: 1rem;
    h1, h2{
        margin: 1rem 0;
        font-size: 1.25rem;
    }
    table{
        width: 100%;
        border-collapse: collapse;
        margin: 1rem;
        border-radius: 10px;
        tr{
            border: 1px solid ${props => props.theme.backgroudDefault};
            td{
                padding: 1rem;
            }
            td:first-child{
                text-align: center;
            }
        }
        th{
            color: ${props => props.theme.backgroudDefault};
            padding: 1rem;
            text-align: center;
        }
    }
`

export const ConditionsTitle = styled.div`
    h3{
        font-size: 1.75rem;
        color: ${props => props.theme.peperTitleColor};
        font-family: "Roboto", monospace;
    }
    span{
        color: ${props => props.theme.peperTitleColor};
        font-size: 1.5rem;
        font-weight: bold;
    }
    display: flex;
    justify-content: space-between;
`

export const ConditionsBody = styled.div`
    li{
        margin: 1rem;
    }
`