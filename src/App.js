import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Container>
          <Header />
          <Home />
          <Footer />
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
