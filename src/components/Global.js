import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Space Mono', monospace;
        background-color: ${({theme}) => theme.colors.mainBg};
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        text-align: center;
    }

`

export default GlobalStyles