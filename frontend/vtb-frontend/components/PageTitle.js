import React from "react";
import { Text } from "@chakra-ui/react";
import { Image, Flex } from "@chakra-ui/react";

export const PageTitle = ({ icon, title, iconWidth, iconHeight, fontSize }) => {
  return (
    <Flex position="relative" alignItems="center" height={iconHeight}>
      <Image
        src={icon}
        alt=""
        width={iconWidth}
        height={iconHeight}
        position="absolute"
        left="0"
        color="#000"
        opacity={0.1}
      />
      <Text fontSize={fontSize} fontWeight={700} zIndex={3}>
        {title}
      </Text>
    </Flex>
  );
};
