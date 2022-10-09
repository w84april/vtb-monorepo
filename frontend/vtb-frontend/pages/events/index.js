import { PageTitle } from "../../components/PageTitle";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Flex, RadioGroup, Radio, Stack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

import { Event } from "../../components/Event";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil_state";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const session = useSession();
  const user = useRecoilValue(userState);
  const [filter, setFilter] = useState("all");

  const filteredEvents = useMemo(() => {
    const newEvents = [...events];
    switch (filter) {
      case "all":
        return newEvents;
      case "taken":
        return newEvents.filter((event) => event.take === true);
      case "done":
        return newEvents.filter(
          (event) => event?.take === true && event?.done === true
        );
    }
  }, [events, filter]);

  const completeEvent = (eventId) => {
    axios
      .post("http://localhost:3014/event/complete", {
        eventId: eventId,
        userId: user?.id
      })
      .then(() => {
        setFilter("all");
      });
  };

  const takeEvent = (eventId) => {
    axios
      .post("http://localhost:3014/event/take", {
        eventId: eventId,
        userId: user.id,
      })
      .then(() => {
        setFilter("all");
      });
  };

  useEffect(() => {
    if (!session?.data?.user?.accessToken) return;

    axios
      .get("http://localhost:3014/events", {
        headers: {
          Authorization: session?.data?.user?.accessToken,
        },
      })
      .then((res) => {
        if (!res || !res.data) {
          return;
        }

        const events = res.data;

        setEvents(events);
      });
  }, [session?.data?.user?.accessToken, filter]);

  console.log(filteredEvents);
  return (
    <>
      <Flex flexDirection="column" ml="57px">
        <PageTitle
          icon="/arch.svg"
          iconWidth={53}
          iconHeight={53}
          title="Задания"
          fontSize="18px"
        />
        <RadioGroup value={filter} onChange={setFilter}>
          <Stack direction="row">
            <Radio value="all">Все</Radio>
            <Radio value="taken">В процессе</Radio>
            <Radio value="done">Выполнено</Radio>
          </Stack>
        </RadioGroup>

        {filteredEvents.sort((a,b) => new Date(b?.createdAt) - new Date(a?.createdAt)).map((event, index) => (
          <Event
            key={index}
            title={event.name}
            description={event.description}
            onTake={takeEvent}
            onComplete={completeEvent}
            event={event}
            taken={event.taken}
          />
        ))}
      </Flex>
    </>
  );
};

export default EventsPage;
