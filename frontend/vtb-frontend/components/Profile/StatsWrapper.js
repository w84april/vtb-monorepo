import React from "react";
import { Box } from "@chakra-ui/react";
import { Balance } from "./Balance";
import { Inventory } from "./Inventory";
import { RateTable } from "./RateTable";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil_state";

export const StatsWrapper = () => {
    const user = useRecoilValue(userState);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box
                w='380px'
            >
                <Balance id={user?.publicKey} rub={user?.currency} />
                <Inventory />
                <RateTable />
            </Box>
        </Box>
    )
}