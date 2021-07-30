// Components
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

const DialogDisplay = ({
  isOpen,
  onClose,
  title,
  children,
  size,
  buttonText,
  buttonAction,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>

      <ModalFooter>
        <Button mr={3} onClick={onClose}>
          Close
        </Button>
        <Button colorScheme='teal' onClick={buttonAction}>
          {buttonText}
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default DialogDisplay;
