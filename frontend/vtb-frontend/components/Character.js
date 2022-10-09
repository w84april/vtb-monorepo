import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";

export const Character = ({ power }) => {
  return (
    <Flex flexDirection="column" mt="30px">
      <Flex
        height="700px"
        borderRadius="20px"
        position="relative"
        justifyContent="center"
      >
        <Flex justifyContent="center">
          <Image
              w="306px"
              h="448px"
              src="/character.png"
              alt=""
          />
        </Flex>
        <Image
          src="/sword.svg"
          alt=""
          position="absolute"
          bottom="170px"
          left="-80px"
          width={164}
          height={164}
        />
        <Image src="" alt="" />
        <Flex
          position="absolute"
          bottom="-70px"
          right="50px"
          alignItems="center"
        >
          <Text fontSize="40px" lineHeight="56px">
            Сила:&nbsp;
          </Text>

          <Text color="#C53030" fontSize="50px" fontWeight="900">
            {power ? power : 0}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
