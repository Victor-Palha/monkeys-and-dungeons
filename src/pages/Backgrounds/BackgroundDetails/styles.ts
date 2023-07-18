import { styled } from "styled-components";

export const BackgroundContainer = styled.div`
width: 70%;
margin-left: 5rem;
padding: 5rem 1rem;
box-shadow: 1px 0px 10px ${props => props.theme.focusColor};
color: ${props => props.theme.backgroudDefault};
background-image: ${props => props.theme.paperColor};
border-radius: 10px 50px;
`

export const BackgroundHeader = styled.div`
margin-bottom: 2rem;
`

export const BackgroundDescription = styled.div`
margin-top: 1rem;
padding-bottom: 2rem;
display: block;
p{
    margin: 0.5rem;
}
border-bottom: 1px solid ${props => props.theme.peperTitleColor};
`

export const BackgroundTitle = styled.div`
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

export const BackgroundBody = styled.div`
p{
    margin-bottom: 0.5rem;
}
`