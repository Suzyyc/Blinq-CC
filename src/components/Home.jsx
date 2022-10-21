const { Container, Text, Heading, Button, Center } = require("@chakra-ui/react")

const Home = () => {
    return (
        <Container>
            <Heading>A better way <br></br>
            to enjoy every day.</Heading>
            <Text>Be the first to know when we launch</Text>
            <Button>Request an invite</Button>
        </Container>
    )
}
export default Home;