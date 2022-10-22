import {
  Container,
  Text,
  Heading,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import FormModal from "./FormModal";
import SuccessModal from "./SuccessModal";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSuccessOpen,
    onClose: onSuccessClose,
    onOpen: onSuccessOpen,
  } = useDisclosure();

  const handleSuccess = () => {
    onSuccessOpen();
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <Image sx={{ maxWidth: "200px" }} src="./cute-broccoli.jpeg" />
      <Heading>
        A better way <br></br>
        to enjoy every day.
      </Heading>
      <Text>Be the first to know when we launch</Text>
      <Button onClick={onOpen}>Request an invite</Button>
      <FormModal isOpen={isOpen} onClose={onClose} successCB={handleSuccess} />
      <SuccessModal isOpen={isSuccessOpen} onClose={onSuccessClose} />
    </Container>
  );
};
export default Home;
