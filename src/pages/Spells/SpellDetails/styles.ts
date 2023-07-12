import { styled } from "styled-components";

export const SpellDetailsContainer = styled.div`
    width: 40%;
    margin-left: 5rem;
    padding: 5rem 1rem;
    box-shadow: 1px 0px 10px ${props => props.theme.focusColor};
    color: ${props => props.theme.backgroudDefault};
    background-image: ${props => props.theme.paperColor};
    border-radius: 10px 50px;
`
interface SpellDetailsTitleProps {
    colorVariant: string;
}
export const SpellDetailsTitle = styled.div<SpellDetailsTitleProps>`
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
    span{
        color: ${props => props.colorVariant};
        font-size: 0.75rem;
        font-weight: bold;
        border-bottom: 1px solid ${props => props.colorVariant};
    }
    text-transform: uppercase;
    border-bottom: 1px solid ${props => props.theme.colorVariant};
`
export const SpellDetailsHeader = styled.div`
    margin-bottom: 1rem;
`

export const SpellDetailsBody = styled.div`
    p{
        margin-bottom: 0.5rem;
    }
`

export const SpellDetailsFooter = styled.div`
    margin-top: 1rem;
`