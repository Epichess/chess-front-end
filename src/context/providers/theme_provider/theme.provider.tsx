import { createTheme, ThemeProvider } from "@material-ui/core";
import {ComponentProps} from "react";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#EC1722',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function CustomThemeProvider({children}: ComponentProps<any>){
  return(
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
  )
}