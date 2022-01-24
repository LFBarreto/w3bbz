import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import defaultTheme from "./theme";

interface Props {
  children: React.ReactNode;
}

export const StyleProvider = ({ children }: Props): React.ReactElement => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
