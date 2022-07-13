import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body };
        color: ${({ theme }) => theme.text };
        font-family: 'Roboto', sans-serif;
        transition: all o.50s linear;
    }
`;