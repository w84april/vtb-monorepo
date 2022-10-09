import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";

export const TransactionHistory = ({ title, description }) => {
  const [transactions, setTransactions] = useState([]);

  const getData = () => {
    axios
      .post(`https://hackathon.lsp.team/hk/v1/wallets/${address}/history`, {})
      .then((res) => {
        if (!res?.data) {
          return;
        }

        setTransactions(res.data);
      });
  };

  useEffect(() => {
    // getData();
  }, []);
  return (
    <Flex
      flexDirection="column"
      bgColor="#FFF"
      borderRadius="20px"
      p="20px 30px"
      boxShadow="md"
      minWidth="330px"
      mt="100px"
    >
      <Text fontWeight={700} fontSize="18px" mb="20px">
        {title}
      </Text>
      <Flex width="100%" justifyContent="space-between" pr="50px">
        <Text
          pl="10px"
          mb="10px"
          color="#A0AEC0"
          fontSize="10px"
          fontWeight={700}
        >
          ID
        </Text>
        <Text
          pl="10px"
          mb="10px"
          color="#A0AEC0"
          fontSize="10px"
          fontWeight={700}
        >
          From
        </Text>
        <Text
          pl="10px"
          mb="10px"
          color="#A0AEC0"
          fontSize="10px"
          fontWeight={700}
        >
          To
        </Text>
      </Flex>
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={index}
          tokenId={transaction.tokenId}
          from={transaction.from}
          to={transaction.to}
        />
      ))}
      <TransactionItem
        tokenId={12}
        from={"0x7b1274e406e4b4479adf6939d65aef262bb1f3c6"}
        to={"0x7b1274e406e4b4479adf6939d65aef262bb1f3c6"}
      />
      <TransactionItem
        tokenId={12}
        from={"0x7b1274e406e4b4479adf6939d65aef262bb1f3c6"}
        to={"0x7b1274e406e4b4479adf6939d65aef262bb1f3c6"}
      />
      <TransactionItem
        tokenId={12}
        from={"0x7b1274e406e4b4479adf6939d65aef262bb1f3c6"}
        to={"0x7b1274e406e4b4479adf6939d65aef262bb1f3c6"}
      />
      <TransactionItem
        tokenId={12}
        from={"0x7b1274e406e4b4479adf6939d65aef262bb1f3c6"}
        to={"0x7b1274e406e4b4479adf6939d65aef262bb1f3c6"}
      />
    </Flex>
  );
};

const TransactionItem = ({ tokenId, from, to }) => {
  return (
    <Flex borderTop="1px solid #E2E8F0" height="60px" alignItems="center">
      <Flex p="0 10px" width="100%" justifyContent="space-between">
        <Text color="#A0AEC0" fontSize="10px" fontWeight={700}>
          {tokenId}
        </Text>
        <Text color="#718096" fontSize="14px" fontWeight={700}>
          {from.toString().substring(0, 6)}
          {"..."}
        </Text>
        <Text fontSize="14px" fontWeight={700} color="#718096">
          {to.toString().substring(0, 6)}
          {"..."}
        </Text>
      </Flex>
    </Flex>
  );
};
