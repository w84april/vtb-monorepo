import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ProductItem } from "./ProductItem";

export const MarketContainer = ({ title, description }) => {
  return (
    <Flex
      flexDirection="column"
      bgColor="#FFF"
      borderRadius="20px"
      p="20px 30px"
      boxShadow="md"
      mt="30px"
    >
      <Text fontWeight={700} fontSize="18px">
        {title}
      </Text>
      <Text fontSize="14px" color="#A0AEC0">
        {description}
      </Text>

      <Flex flexWrap="wrap">
        <ProductItem title="Купон Яндекс Еды" price={200} />
        <ProductItem title="Купон Яндекс Еды" price={200} />
        <ProductItem title="Купон Яндекс Еды" price={200} />
        <ProductItem title="Купон Яндекс Еды" price={200} />
      </Flex>
    </Flex>
  );
};
