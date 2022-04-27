import styled from "styled-components";

export const StyledContainer = styled.main`
    border: 1px solid blue;
    width: 23rem;
    background-color: ${({theme}) => theme.colors.cardBg};
    border-radius: 1rem;
    padding: 1.5rem;
    margin-top: 2rem;

    @media (min-width: 1440px) {
        width: 54rem;
        height: 28rem;
        display: flex;
    }
`