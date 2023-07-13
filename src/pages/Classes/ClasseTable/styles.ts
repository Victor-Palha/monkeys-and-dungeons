import { styled } from "styled-components";

export const ClasseTableInfo = styled.table`
    border-collapse: collapse;
    background-image: ${props => props.theme.paperColor};
    border-radius: 8px;
    font-weight: lighter;
    thead{
        th{
            padding: 0.25rem;
        }
    }
    tbody{
        tr:nth-of-type(odd){
            background-color: ${props => props.theme.tableColor};
        }
        tr td{
            text-align: center;
            padding: 0.25rem;
        }
        tr td li{
            list-style: none;
        }
    }
`