const { Container, Text } = require("@chakra-ui/react")

const Footer = () => {
    return (
        <Container sx={{borderTop: "2px solid black" }}>
            <Text>Made with 🥦 in Melbourne</Text>
            <Text>© 2022 Brocolli & Co. All rights reserved.</Text>
        </Container>
    )
}

export default Footer;