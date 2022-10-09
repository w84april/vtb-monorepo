import React from "react";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
} from "@chakra-ui/react";

export const CustomAlertDialog = ({ children, keys, isOpen, onClose }) => {
  const cancelRef = React.useRef();

  return (
    <>
      {children}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Ваш секретный ключ</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Ваш публичный ключ: <strong>{keys.publicKey}</strong>
            <br />
            Ваш секретный ключ: <strong>{keys.privateKey}</strong>
            <br />
            Ключи выдаются один раз, поэтому необходимо их сохранить!
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="red" ml={3} onClick={onClose}>
              Да
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
