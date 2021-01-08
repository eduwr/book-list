import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import theme from "styles/theme";
import Router from "routes";
import GlobalStyle from "styles/global";
import { BooksProvider } from "context/books";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <BooksProvider>
        <Router />
      </BooksProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
