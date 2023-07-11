import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    padding: 1.25rem;
    background-color: ${props => props.theme.backgroudDefault};
    text-align: center;
    border: 0;
    p{
        color: ${props => props.theme.textColorDefault};
    }
`