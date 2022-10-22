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
import { useState } from "react";

const formErrorsSchema = { confirmEmail: null };

const FormModal = ({ isOpen, onClose }) => {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    confirmEmail: "",
  });

  const [formErrors, setFormErrors] = useState(formErrorsSchema);

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    let updatedFields = { ...fields };
    updatedFields[name] = value;
    setFields(updatedFields);
  };

  const isSameEmail = (email, confirmEmail) => {
    return email === confirmEmail;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(formErrorsSchema);
    if (isSameEmail(fields.email, fields.confirmEmail)) {
      console.log(fields);
    } else {
      setFormErrors({ confirmEmail: "Email does not match" });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader sx={{ textAlign: "center" }}>
          Request an invite
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <VStack>
              <FormControl>
                {/* <FormLabel>First Name</FormLabel> */}
                <Input
                  onChange={handleChange}
                  name="fullName"
                  type="text"
                  placeholder="Full name"
                  minLength={3}
                />
              </FormControl>
              <FormControl>
                {/* <FormLabel>Email address</FormLabel> */}
                <Input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </FormControl>
              <FormControl isInvalid={formErrors.confirmEmail}>
                {/* <FormLabel>Confirm Email address</FormLabel> */}
                <Input
                  onChange={handleChange}
                  name="confirmEmail"
                  type="email"
                  placeholder="Confirm email"
                />
                <FormErrorMessage>{formErrors.confirmEmail}</FormErrorMessage>
              </FormControl>
            </VStack>
            <Button
              sx={{ width: "100%", mt: 5 }}
              colorScheme="teal"
              type="submit"
            >
              Send
            </Button>
          </form>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
