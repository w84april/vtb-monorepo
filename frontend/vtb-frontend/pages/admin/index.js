import React, { useState } from "react";
import {
  Flex,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { UsersContiner } from "../../components/UsersContainer";
import { ApproveContainer } from "../../components/ApproveContainer";
import axios from "axios";

const AdminPage = () => {
  //   const [events, setEvents] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [awardPower, setAwardPower] = useState(0);
  const createEvent = () => {
    axios
      .post("http://localhost:3014/event/create", {
        name: eventName,
        description: eventDescription,
        type: "Какой то типок",
        middleAwardPower: awardPower,
      })
      .then(() => {
        onClose();
      });
  };

  return (
    <>
      <Flex flexDirection="column" ml="57px" width="100%">
        <Flex justifyContent="space-between">
          <PageTitle
            icon="/admin-shield.svg"
            iconWidth={53}
            iconHeight={53}
            title="Панель администратора"
            fontSize="18px"
          />
          <Flex columnGap="12px">
            <Button
              borederRadius="12px"
              _hover="none"
              color="#FFF"
              bgColor="#1A365D"
              onClick={onOpen}
            >
              Создать мероприятие
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Создание мероприятие</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Название"
                    type="text"
                    border="none"
                    borderRadius="12px"
                    bgColor="#EDF2F7"
                    height="60px"
                    color="#718096"
                    fontSize="16px"
                    mb="16px"
                  />
                  <Input
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    placeholder="Описание"
                    type="text"
                    border="none"
                    borderRadius="12px"
                    bgColor="#EDF2F7"
                    height="60px"
                    color="#718096"
                    fontSize="16px"
                    mb="16px"
                  />
                  <Input
                    value={awardPower}
                    onChange={(e) => setAwardPower(e.target.value)}
                    placeholder="Значимость"
                    type="text"
                    border="none"
                    borderRadius="12px"
                    bgColor="#EDF2F7"
                    height="60px"
                    color="#718096"
                    fontSize="16px"
                    mb="16px"
                  />
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => createEvent()}
                  >
                    Создать
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    Отмена
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button
              color="#FFF"
              _hover="none"
              borederRadius="12px"
              bgColor="#1A365D"
            >
              Отправить&nbsp;
              <Image src="/white-ruble.svg" alt="" />
            </Button>
          </Flex>
        </Flex>
        <UsersContiner />
        <ApproveContainer />
      </Flex>
    </>
  );
};

export default AdminPage;
