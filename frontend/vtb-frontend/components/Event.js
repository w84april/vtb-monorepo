import { Button, Flex, Image, Text } from "@chakra-ui/react";

export const Event = ({ title, description, onTake, onComplete, event }) => {
  return (
    <Flex
      bgColor="#FFF"
      borderRadius="20px"
      height={290}
      p="30px 21px"
      mt="24px"
      justifyContent="space-between"
    >
      <Flex flexDirection="column" justifyContent="space-between">
        <Flex flexDirection="column">
          <Text fontWeight={700}>{title}</Text>
          <Text mr="10px" color="#A0AEC0" fontSize="14px">
            {description}
          </Text>
        </Flex>
        {!event.take && (
            <Button
                borderRadius="15px"
                bgColor="#1A365D"
                color="#FFF"
                height={57}
                width={222}
                _hover="none"
                onClick={() => {
                  onTake(event.id);
                }}
            >
              Принять
            </Button>
        )}
        {(!!event.take && !event.done) && (
            <Button
                borderRadius="15px"
                bgColor="#1A365D"
                color="#FFF"
                height={57}
                width={222}
                _hover="none"
                onClick={() => {
                  onComplete(event.id);
                }}
            >
              Завершить
            </Button>
        )}
      </Flex>
      <Flex>
        <Image src="/meetup.png" alt="" ml="30px" />
      </Flex>
    </Flex>
  );
};
