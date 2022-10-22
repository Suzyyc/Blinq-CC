import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
} from "@chakra-ui/react";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"}>All done!</ModalHeader>
        <ModalBody>
          <Text textAlign={"center"}>
            You will be one of the first to experience Brocolli & Co. when we
            launch.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button sx={{ width: "100%" }} colorScheme="teal" onClick={onClose}>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
