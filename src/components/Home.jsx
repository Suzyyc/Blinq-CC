import {
  Container,
  Text,
  Heading,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import FormModal from "./FormModal";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Button onClick={onOpen}>Request an invite</Button>
      <FormModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};
export default Home;
