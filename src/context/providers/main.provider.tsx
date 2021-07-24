import React, {ComponentProps} from "react";
import CustomThemeProvider from "./theme_provider/theme.provider";

export default function Provider({children}: ComponentProps<any>){
  return(
      <CustomThemeProvider>
        {children}
      </CustomThemeProvider>
  )
}