import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import theme from "styles/theme";
import Router from "routes";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
