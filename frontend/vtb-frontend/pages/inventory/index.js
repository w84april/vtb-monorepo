import React, { useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { Item } from "../../components/Inventory/Item";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSetRecoilState } from "recoil";
import { itemsState } from "../../recoil_state";

const Inventory = (props) => {
    const setListItems = useSetRecoilState(itemsState);
    const {data} = props;

    useEffect(() => {
        if (data) {
            setListItems(data);
        }
    }, [data])

    return (
        <Box
            h="100%"
            w="100%"
            boxShadow="md"
            p="15px 30px"
            backgroundColor="white"
            ml="30px"
            borderRadius="20px"
        >
            <PageTitle title="Инвентарь" fontSize="24px" />
            <SimpleGrid
                columns={5}
                spacing={6}
                mt="20px"
                height="calc(100vh - 150px)"
                overflow="auto"
            >
                {data.map(i => (
                    <Item key={i.tokenId} id={i.tokenId} img={i?.imageUrl} power={i.power} type={i.type} />
                ))}
            </SimpleGrid>
        </Box>
    )
}

export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions);
    const options = {
        method: 'GET',
        headers: {
            Authorization: session?.user?.accessToken,
        }
    }
    const res = await fetch('http://localhost:3014/items', options);
    const data = await res.json();
    console.log(data);

    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}

export default Inventory;