import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: ${theme.yellow.colorBg};
    }

    #root {
        min-height: 100vh;
        background-color: purple;
    }

    h1, h2, h3 {
        color: ${theme.yellow.textColor}
    }

    button {
        padding: 0;
        border: none;
        background: none;
        opacity: 0.85;
        transition: opacity 300ms ease;
        transition: transform 100ms linear;
    }

    button:active {
        opacity: 1;
        transform: translate(0, 1px)
    }

    button:hover{
        opacity: 1;
    }

    button:disabled{
        opacity: 1;
    }

    button:focus {
        outline:0;
    }

    input {
        border: none;
        background: none;
        color: ${theme.yellow.textColor}
    }

    input:focus {
        outline: none;
    }

    li {
        text-decoration: dashed;
        margin-left: 32px;
    }

`;

export default GlobalStyle;
