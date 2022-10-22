import * as React from "react";
import { Box, ChakraProvider, Grid } from "@chakra-ui/react";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Box>
          <Grid templateRows={"auto 1fr auto"} h={"100vh"}>
            <Header />
            <Home />
            <Footer />
          </Grid>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
