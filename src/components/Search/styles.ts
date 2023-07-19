import { styled } from "styled-components";

interface SearchContainerProps {
    withComplete?: boolean;
}
export const SearchContainer = styled.form<SearchContainerProps>`
    margin-bottom: 1rem;
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    input[type=text]{
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        outline: 0;
    }
`