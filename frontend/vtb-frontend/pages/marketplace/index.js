import React from "react";
import { Flex } from "@chakra-ui/react";
import { MarketContainer } from "../../components/MarketContainer";
import { TransactionHistory } from "../../components/TransactionHistory";
import { MarketHeader } from "../../components/MarketHeader";

const MarketPlacePage = () => {
  return (
    <Flex width="100%">
      <Flex flexDirection="column" width="100%" ml="56px" mr="24px">
        <MarketHeader />

        <MarketContainer
          title="Торговая площадка"
          description="Обменивай свои предметы!"
        />
      </Flex>
      <TransactionHistory mt="40px" title="История транзакций" />
    </Flex>
  );
};

export default MarketPlacePage;
