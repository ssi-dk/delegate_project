import React from "react";
import { Global } from "@emotion/react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import appTheme from "app/app.theme";
import Analysis from "./analysis/analysis";
import { globalCss } from "./app.styles";
import "./i18n";

export default function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <Global styles={globalCss} />
      <Box p={6}>
        <Analysis />
      </Box>
    </ChakraProvider>
  );
}
