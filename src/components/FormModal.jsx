import {
  Text,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const formErrorsSchema = { confirmEmail: null };

export const isSameEmail = (email, confirmEmail) => {
  return email === confirmEmail;
};

const FormModal = ({ isOpen, onClose, successCB }) => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    confirmEmail: "",
  });

  const [formErrors, setFormErrors] = useState(formErrorsSchema);

  const [serverError, setServerError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let updatedFields = { ...fields };
    updatedFields[name] = value;
    setFields(updatedFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormErrors(formErrorsSchema);
    if (isSameEmail(fields.email, fields.confirmEmail)) {
      setLoading(true);
      const res = await fetch(
        "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: fields.email, name: fields.name }),
        }
      );

      if (res.ok) {
        onClose();
        successCB();
      } else {
        const error = await res.json();
        setServerError(error.errorMessage);
      }
      setLoading(false);
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
                  name="name"
                  type="text"
                  placeholder="Full name"
                  minLength={3}
                  required
                />
              </FormControl>
              <FormControl>
                {/* <FormLabel>Email address</FormLabel> */}
                <Input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="email"
                  required
                />
              </FormControl>
              <FormControl isInvalid={formErrors.confirmEmail}>
                {/* <FormLabel>Confirm Email address</FormLabel> */}
                <Input
                  onChange={handleChange}
                  name="confirmEmail"
                  type="email"
                  placeholder="Confirm email"
                  label="confirmEmail"
                  required
                />
                <FormErrorMessage>{formErrors.confirmEmail}</FormErrorMessage>
              </FormControl>
            </VStack>
            <Button
              sx={{ width: "100%", mt: 5 }}
              colorScheme="teal"
              type="submit"
              isLoading={loading}
              loadingText="Sending, please wait..."
            >
              Send
            </Button>
          </form>
          {serverError && (
            <Text color="tomato" textAlign="center" mt={2}>
              {serverError}
            </Text>
          )}
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
