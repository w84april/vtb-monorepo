import React from "react";
import { Image, Flex, Text, Button } from "@chakra-ui/react";

export const MarketHeader = () => {
  return (
    <Flex width="100%">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bgColor="#FFF"
        p="9px 30px 9px 18px"
        borderRadius="20px"
        boxShadow="md"
        width="100%"
      >
        <Flex>
          <Image src="/flask.svg" alt="" />
          <Flex flexDirection="column" ml="36px">
            <Text color="#A0AEC0" fontSize="14px" fontWeight={600}>
              Баланс
            </Text>
            <Flex>
              <Text fontSize="20px" fontWeight={700}>
                123 &nbsp;
              </Text>

              <Image src="/ruble.svg" alt="" />
            </Flex>
          </Flex>
        </Flex>
        <Flex columnGap={30}>
          <Button
            bgColor="#1A365D"
            _hover="none"
            color="#FFF"
            borderRadius="12px"
          >
            Вывод
          </Button>
          <Button
            border="1px solid #1A365D"
            borderRadius="12px"
            _hover="none"
            bgColor="#FFF"
          >
            Отправить
          </Button>
          <Button
            border="1px solid #1A365D"
            borderRadius="12px"
            _hover="none"
            bgColor="#FFF"
          >
            История
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
