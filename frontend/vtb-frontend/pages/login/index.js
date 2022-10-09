import React from "react";

import {
  FormControl,
  FormErrorMessage,
  Flex,
  Text,
  Input,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";

import "@chakra-ui/react";
import { signIn } from "next-auth/react";

import { useState } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { callbackUrl } = useRouter().query;
  const [privateKeyInput, setPrivateKeyInput] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn("credentials", {
        privateKey: privateKeyInput,
        callbackUrl: callbackUrl || "/",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex
      bgImage="url('https://i.yapx.cc/UMjIy.png')"
      alignItems="center"
      width="100%"
      justifyContent="center"
      height="100vh"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Image
        position="absolute"
        left={0}
        bottom={0}
        src="https://i.yapx.cc/UMjzA.png"
        alt=""
      />

      <Image
        position="absolute"
        top="135px"
        right="484px"
        src="https://i.yapx.cc/UMqdP.png"
        alt=""
      />

      <Flex
        position="absolute"
        bgColor="#F7FAFC"
        right={360}
        padding="40px"
        borderRadius="16px"
        width={560}
        flexDirection="column"
      >
        <Text
          color="#0A2896"
          fontSize="48px"
          lineHeight="120%"
          fontWeight={700}
          margin="0"
        >
          Войти
        </Text>

        <Text
          color="#718096"
          fontWeight={500}
          fontSize="16px"
          lineHeight="150%"
          m="16px 0 25px 0"
        >
          Выполняй задания, сражайся и получай награды!
        </Text>

        <Flex flexDirection="column">
          <FormControl>
            <Input
              value={privateKeyInput}
              onChange={(e) => setPrivateKeyInput(e.target.value)}
              placeholder="Твой персональный ключ"
              type="text"
              border="none"
              borderRadius="12px"
              bgColor="#EDF2F7"
              //   width={480}
              height="60px"
              color="#718096"
              fontSize="16px"
              mb="16px"
            />
            {privateKeyInput === "" ? (
              <FormErrorMessage>Введите ключ</FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>

        <Button
          border="none"
          cursor="pointer"
          bgGradient="linear(to-r, blue.600, purple.400 )"
          padding="18px"
          borderRadius="12px"
          color="#FFF"
          height={57}
          fontSize="16px"
          fontWeight={700}
          _hover="none"
          onClick={handleSignIn}
        >
          Войти
        </Button>
        <Link href="/register">
          <Flex width="100%" justifyContent="center">
            <Text bgColor="transparent" _hover="none" color="#4299E1" mt="15px">
              У меня нет аккаунта
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
