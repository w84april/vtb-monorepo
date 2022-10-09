import React from "react";
import { SideMenu } from "./SideMenu";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export const SideMenuWrapper = ({ children }) => {
    const router = useRouter();
    const isShowSidebar = !(router.pathname === '/login') && !(router.pathname === '/register');

    return isShowSidebar ? (
        <Box
            display="flex"
            alignItems="start"
            h='100%'
            p='25px 20px 0 20px'
        >
            <SideMenu />
            {children}
        </Box> ) : (
            <>
                {children}
            </>
    )
}