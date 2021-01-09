import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Theme from "styles/theme";
import Router from "routes";
import globalStyleFactory from "styles/global";
import { BooksProvider } from "context/books";

const App = (): JSX.Element => {
  const theme = Theme.getInstance().getTheme("yellow");
  const GlobalStyle = globalStyleFactory(theme);

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
