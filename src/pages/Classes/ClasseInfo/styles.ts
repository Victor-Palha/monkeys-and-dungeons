import { styled } from "styled-components";

export const ClasseInfoContainer = styled.section`
    display: grid;
    grid-template-columns: 20rem 50rem;
    gap: 20rem;
    padding: 3rem 10rem;
`
export const ClasseProficiency = styled.div`
    background-image: ${props => props.theme.paperColor};
    padding: 1rem;
    border-radius: 6px;
    height: 41rem;
h2{
    
    border-bottom: 1px solid ${props => props.theme.peperTitleColor};
}
h3{
    margin: 0.5rem;
} 
    p{
        margin-bottom: 0.25rem;
    }
    ul{
        margin-left: 1rem;
    }
`

export const ClasseAbilitys = styled.div`
    background-image: ${props => props.theme.paperColor};
    padding: 1rem;
    h2{
        border-bottom: 1px solid ${props => props.theme.peperTitleColor};
        margin: 1rem;
    }
    ul{
        margin-left: 1rem;
    }    
`