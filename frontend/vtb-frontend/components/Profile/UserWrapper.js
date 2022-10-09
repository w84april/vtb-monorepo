import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import { axiosInstance } from "../../utils/axios";
import { equippedState, userState } from "../../recoil_state";

export const UserWrapper = ({ children }) => {
  const session = useSession();
  const setUser = useSetRecoilState(userState);
  const setEquippedItems = useSetRecoilState(equippedState);

  useEffect(() => {
    if (!session?.data?.user?.accessToken) return;

    axiosInstance
      .get("/user", {
        headers: {
          Authorization: session?.data?.user?.accessToken,
        },
      })
      .then((res) => {
        setUser(res.data);
        axiosInstance
          .get("/items/equipped", {
            headers: {
              Authorization: session?.data?.user?.accessToken,
            },
          })
          .then((res) => {
            setEquippedItems(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [session]);

  return (
    <Box backgroundColor="#F7FAFC" height="100%">
      {children}
    </Box>
  );
};
