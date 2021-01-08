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
        background-color: blue;
    }

    #root {
        min-height: 100vh;
        background-color: purple;
    }

    h1, h2, h3, li {
        color: ${theme.yellow.textColor}
    }

    button {
        padding: 0;
        border: none;
        background: none;
    }

    button:focus {
        outline:0;
    }
`;

export default GlobalStyle;
