const { Container, Text, Heading, Button } = require("@chakra-ui/react");

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Heading>
        A better way <br></br>
        to enjoy every day.
      </Heading>
      <Text>Be the first to know when we launch</Text>
      {/* <Button onClick={onOpen}>Request an invite</Button> */}
    </Container>
  );
};
export default Home;
