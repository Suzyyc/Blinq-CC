const { Container, Text, Heading, Button, 
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,} = require("@chakra-ui/react")


const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
            <Heading>A better way <br></br>
            to enjoy every day.</Heading>
            <Text>Be the first to know when we launch</Text>
            <Button onClick={onOpen}>Request an invite</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request an invite</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* form */}
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <input type='text' />
                <FormLabel>Email address</FormLabel>
                <input type='email' />
                <FormLabel>Confirm Email address</FormLabel>
                <input type='email' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Container>
    )
}
export default Home;