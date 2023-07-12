import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: ${props => props.theme.backgroudDefault};
    display: flex;
    padding: 1.7rem 2.9rem;
    justify-content: space-between;
`
export const HeaderLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    svg{
        margin-right: 0.75rem;
        color: ${props => props.theme.focusColor};
        transition: 0.5s;
    }
    svg:hover{
        transform: scale(1.1);
    }
    h1{
        font-size: 2.5rem;
        font-weight: bold;
        color: ${props => props.theme.textColorDefault};
        border-bottom: 2px solid ${props => props.theme.dungeonsMasterColor};
    }
`

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        text-decoration: none;
        color: ${props => props.theme.textColorDefault};
        font-size: 1.5rem;
        font-weight: bold;
        margin-left: 2rem;
        &&:last-child{
            margin-right: 0;
        }
    }
`