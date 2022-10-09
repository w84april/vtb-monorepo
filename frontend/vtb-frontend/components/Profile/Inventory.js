import React, { useMemo } from "react";
import Image from "next/image";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { equippedState } from "../../recoil_state";

export const Inventory = () => {
    const equippedItems = useRecoilValue(equippedState);

    const items = [
        {img: '/empty-weapon.png', title: 'Шлем\n(Отсутствует)', type: 'helmet'},
        {img: '/empty-weapon.png', title: 'Броня\n(Отсутствует)', type: 'armor'},
        {img: '/empty-weapon.png', title: 'Оружие\n(Отсутствует)', type: 'weapon'},
        {img: '/empty-weapon.png', title: 'Оружие\n(Отсутствует)', type: 'weapon'}
    ];

    const currentItems = useMemo(() => {
        return items.map(i => {
            const toReplaceItem = equippedItems.find(o => o.type === i.type);
            if (toReplaceItem) {
                return {
                    ...i,
                    title: i.title.split('\n')[0],
                    img:  toReplaceItem.imageUrl,
                    power: toReplaceItem.power
                }
            }

            return i;
        });
    }, [equippedItems]);

    console.log(currentItems);

    return (
        <Box mt="25px">
            <Text
                fontSize="lg"
                fontWeight="700"
                color="#2D3748"
                mb="15px"
                ml="15px"
            >
                Инвентарь
            </Text>
            <Box
                boxShadow="md"
                borderRadius="20px"
                p="25px 35px"
                backgroundColor="white"
            >
                <SimpleGrid
                    columns={2}
                    spacing={20}
                    gridRowGap="20px"
                >
                    {currentItems.map(i => (
                        <Box
                            key={i.title}
                            textAlign="center"
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <img
                                    src={i.img}
                                    width={80}
                                    height={80}
                                />
                            </Box>
                            <Text
                                fontSize="sm"
                                fontWeight="500"
                                mb="3px"
                            >
                                {i.title}
                            </Text>
                            <Text
                                fontSize="sm"
                                fontWeight="500"
                                color="#C53030"
                            >
                                {i.power && `+${i.power} к силе`}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    )
}