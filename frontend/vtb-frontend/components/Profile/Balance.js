import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export const Balance = ({ id, rub}) => {

    return (
        <SimpleGrid
            columns={2}
            spacing={10}
        >
            <Box
               padding="8px"
               backgroundColor="white"
               boxShadow="md"
               borderRadius="20px"
               textAlign="center"
               fontWeight="bold"
            >
                <Text
                    fontSize='sm'
                    color="#A0AEC0"
                >
                    ID
                </Text>
                <Text
                    fontSize='lg'
                    color="#2D3748"
                >
                    {id}
                </Text>
            </Box>
            <Box
                padding="8px"
                backgroundColor="white"
                boxShadow="md"
                borderRadius="20px"
                textAlign="center"
                fontWeight="bold"
            >
                <Text
                    fontSize='sm'
                    color="#A0AEC0"
                >
                    Баланс
                </Text>
                <Text
                    fontSize='lg'
                    color="#2D3748"
                >
                    {rub} Р
                </Text>
            </Box>
        </SimpleGrid>
    )
}