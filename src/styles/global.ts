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

    input {
        border: none;
        background: none;
        color: ${theme.yellow.textColor}
    }

    input:focus {
        outline: none;
    }
`;

export default GlobalStyle;
