import React from 'react';
import { Box, Divider, Text } from "@chakra-ui/react";

export const RateTable = () => {
    const user = [
        {id: 1, name: "Даниил Корпусев", power: 25},
        {id: 2, name: "Даниил Корпусев", power: 25},
        {id: 3, name: "Даниил Корпусев", power: 25},
        {id: 4, name: "Даниил Корпусев", power: 25},
        {id: 5, name: "Даниил Корпусев", power: 25},
    ]
    return (
        <Box
            mt="30px"
            p="20px 20px 15px 20px"
            boxShadow="md"
            borderRadius="20px"
            backgroundColor="white"
        >
            <Text
                fontSize="lg"
                mb="10px"
                fontWeight="bold"
            >
                Рейтинг
            </Text>
            {user.map((u, index) => (
                <Row key={u.id} position={index} name={u.name} power={u.power} />
            ))}
        </Box>
    )
}

function Row({ name, position, power}) {
    return (
        <>
            <Divider />
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p="15px 10px"
            >
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Text
                        fontSize="12px"
                        fontWeight="700"
                        mr="17px"
                        color="#A0AEC0"
                    >
                        {position}
                    </Text>
                    <Text
                        fontSize="md"
                        fontWeight="700"
                    >
                        {name}
                    </Text>
                </Box>
                <Text
                    fontSize="md"
                    color="#718096"
                    fontWeight="700"
                >
                    {power}
                </Text>
            </Box>
        </>
    )
}