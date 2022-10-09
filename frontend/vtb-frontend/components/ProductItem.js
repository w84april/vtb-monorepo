import React from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

export const ProductItem = ({ icon, price, title, description }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bgColor="#FFF"
      p="20px 30px"
    >
      <Flex borderRadius="20px">
        <Image
          minWidth={200}
          minHeight={200}
          borderRadius="20px"
          src="/imgg.svg"
          alt=""
        />
      </Flex>

      <Text mt="10px" fontWeight={700} fontSize="18px">
        {title}
      </Text>
      <Text fontSize="14px" color="#A0AEC0">
        {description}
      </Text>

      <Button
        _hover="none"
        textAlign="center"
        mt="20px"
        color="#FFF"
        bgColor="#1A365D"
      >
        {price}&nbsp;
        <Image color="#FFF" src="/white-ruble.svg" alt="" />
      </Button>
    </Flex>
  );
};
