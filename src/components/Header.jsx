const { Container, Text } = require("@chakra-ui/react")

const Header = () => {
    return (
        <Container>
            <Text sx={{borderBottom: "2px solid black" }}>Brocolli & Co</Text>
        </Container>
    )
}

export default Header;