import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,

  fonts: {
    heading: `'Work Sans', sans-serif`,
    body: `'Work Sans', sans-serif`,
  },
});

export default theme;
