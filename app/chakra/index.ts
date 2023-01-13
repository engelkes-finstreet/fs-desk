import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import * as components from "./components";
import * as foundations from "./foundations";

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...components },
  colors: { ...baseTheme.colors, brand: baseTheme.colors.red },
  space: {
    "4.5": "1.125rem",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
});
