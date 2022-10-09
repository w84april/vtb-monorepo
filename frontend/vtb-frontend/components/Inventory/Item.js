import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { equippedState, itemsState, userState } from "../../recoil_state";
import { axiosInstance } from "../../utils/axios";
import { useSession } from "next-auth/react";

export const Item = ({ id, power, type, img }) => {
  const session = useSession();
  const items = useRecoilValue(itemsState);
  const [equippedItems, setEquippedItems] = useRecoilState(equippedState);
  const [user, setUser] = useRecoilState(userState);

  const isEquip = equippedItems.some(e => e.tokenId === id);

  const getUser = () => {
    axiosInstance.get('/user', {
      headers: {
        Authorization: session?.data?.user?.accessToken,
      }
    }).then(res => {
      setUser(res.data);
    }).catch(err => console.log(error))
  }

  const handleEquipItem = () => {
      if (session?.data?.user?.accessToken) {
        const suffix = type === 'weapon' ? 'firstWeapon' : type;
        axiosInstance.post('/update', {
          [suffix]: isEquip ? null : id
        }, {
          headers: {
            Authorization: session?.data?.user?.accessToken,
          },
        }).then(() => {
          getUser();
          if (!isEquip) {
            const currentItem = items?.find(i => i.tokenId === id);
            return setEquippedItems((prevState) => [...prevState, currentItem]);
          }

          return setEquippedItems((prevState) => [...prevState.filter(i => i.tokenId !== id)]);
        })
      }
  };

  return (
    <Box
      backgroundColor="#EDF2F7"
      borderRadius="8px"
      padding="10px 40px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      flexBasis="230px"
      maxWidth="230px"
      maxHeight="390"
    >
      <img src={img} height={140} width={140} />
      <Text fontSize="18px" fontWeight="bold" color="#718096">
        {type}
      </Text>
      <Text fontSize="14px" fontWeight="bold" color="#A0AEC0" mb="15px">
        +{power} к силе
      </Text>
      <CustomButton colorScheme="facebook" variant={isEquip ? 'outline' : 'solid'} onClick={handleEquipItem}>
        {isEquip ? 'Снять' : 'Надеть'}
      </CustomButton>
      <CustomButton colorScheme="facebook" variant="solid">
        Продать
      </CustomButton>
      <CustomButton colorScheme="facebook" variant="solid">
        Отправить
      </CustomButton>
    </Box>
  );
};

function CustomButton({ colorScheme, variant, children, onClick }) {
  return (
    <Button
        onClick={onClick}
      colorScheme={colorScheme}
      variant={variant}
      width="100%"
      borderRadius="8px"
      fontSize="12px"
      height="30px"
      mb="6px"
    >
      {children}
    </Button>
  );
}
