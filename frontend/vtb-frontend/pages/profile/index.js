import React from "react";
import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { StatsWrapper } from "../../components/Profile/StatsWrapper";
import { PageTitle } from "../../components/PageTitle";
import { Character } from "../../components/Character";
import { useRecoilValue } from "recoil";
import { equippedState, userState } from "../../recoil_state";

const ProfilePage = () => {
  const user = useRecoilValue(userState);
  const equipped = useRecoilValue(equippedState);

  const totalCount = equipped.reduce((acc, curr) => acc + curr.power, 0);

  return (
    <Grid h="100%" w="100%" templateColumns="auto 500px" gap={10}>
      <GridItem w="100%" h="100%">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pl="20px"
        >
          <PageTitle fontSize="36px" title={`Приветствую, ${user?.firstName + ' ' + user?.lastName}`} />
          <Character power={totalCount} />
        </Box>
      </GridItem>
      <GridItem w="400px" h="100%">
        <StatsWrapper />
      </GridItem>
    </Grid>
  );
};

export default ProfilePage;
