import {
  Container,
  Text,
  Heading,
  Button,
  Input,
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
  FormHelperText,
  Box,
  VStack,
} from "@chakra-ui/react";

const Modal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader sx={{ textAlign: "center" }}>
          Request an invite
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <FormControl>
              {/* <FormLabel>First Name</FormLabel> */}
              <Input type="text" placeholder="Full name" min={3} />
            </FormControl>
            <FormControl>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl>
              {/* <FormLabel>Confirm Email address</FormLabel> */}
              <Input type="email" placeholder="Confirm email" />
            </FormControl>
          </VStack>
          <Button
            sx={{ width: "100%", mt: 5 }}
            colorScheme="teal"
            onClick={handleClick}
          >
            Send
          </Button>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Modal;
