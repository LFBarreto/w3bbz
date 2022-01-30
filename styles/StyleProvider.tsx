import React, { memo } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./theme";

interface Props {
  children: React.ReactNode;
}

export const StyleProvider = memo(({ children }: Props): React.ReactElement => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
});

StyleProvider.displayName = "StyleProvider";
