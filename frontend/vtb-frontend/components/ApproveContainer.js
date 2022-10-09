import { Flex, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil_state";
import { useSession } from "next-auth/react";

export const ApproveContainer = () => {
  const session = useSession();
  const [events, setEvents] = useState([]);

  const getApprove = () => {
    if (!session?.data?.user?.accessToken) return;

    axios
        .get("http://localhost:3014/user-events", {
          headers: {
            Authorization: session?.data?.user?.accessToken,
          },
        })
        .then((res) => {
          setEvents(res.data);
        }).catch(err => {
          console.log(err);
    });
  }

  const handleApprove = (userId, eventId, approve) => {
    axios
        .post("http://localhost:3014/event/approve", {
          userId: userId,
          eventId: eventId,
          approve:  approve,
        }, {
          headers: {
            Authorization: session?.data?.user?.accessToken,
          },
        })
        .then((res) => {
          getApprove();
        }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getApprove();
  }, [session])

  return (
    <Flex
      flexDirection="column"
      bgColor="#FFF"
      borderRadius="20px"
      p="20px 30px"
      boxShadow="md"
      width="100%"
      mt="24px"
    >
      <Text fontWeight={700} fontSize="18px" mb="20px">
        Апрув заданий
      </Text>
      <Flex justifyContent="space-between">
        <Flex>
          <Text color="#718096" fontSize="11px" minWidth="160px">
            Имя пользователя
          </Text>
          <Text color="#718096" fontSize="11px" minWidth="100px">
            ID
          </Text>
          <Text color="#718096" fontSize="11px" minWidth="100px">
            Задание
          </Text>
        </Flex>
        <Flex></Flex>
      </Flex>

      {events?.map(e => (
          <UserRow
              key={e.userId}
              name={"Danil Polienko"}
              id={12}
              balance={424}
              power={32}
              history=""
              event={e}
              handleApprove={handleApprove}
          />
      ))}
    </Flex>
  );
};

const UserRow = ({ event, handleApprove }) => {
  console.log(event);
  return (
    <>
      <Flex
        borderTop="1px solid #E2E8F0"
        justifyContent="space-between"
        mt="10px"
      >
        <Flex>
          <Text
            color="#2D3748"
            fontSize="14px"
            fontWeight={700}
            minWidth="160px"
            mt="10px"
          >
            {event?.user?.firstName + ' ' + event?.user?.lastName}
          </Text>
          <Text color="#718096" minWidth="100px" mt="10px">
            {event?.event?.name}
          </Text>
          <Text color="#718096" minWidth="100px" mt="10px">
            {event?.event?.description}
          </Text>
        </Flex>
        <Flex columnGap="30px">
          <Button
            bgColor="#1A365D"
            height="24px"
            color="#FFF"
            minWidth="100px"
            fontSize="14px"
            _hover="none"
            mt="10px"
            onClick={() => handleApprove(event?.UserId, event?.EventId, 'accepted')}
          >
            Подтвердить
          </Button>
          <Button
            bgColor="#FFF"
            height="24px"
            color="#1A365D"
            minWidth="100px"
            border="1px solid #1A365D"
            fontSize="14px"
            _hover="none"
            mt="10px"
            onClick={() => handleApprove(event?.UserId, event?.EventId, 'reject')}
          >
            Отклонить
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
