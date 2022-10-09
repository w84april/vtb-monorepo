import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { userState } from "../recoil_state";
import { useRecoilValue } from "recoil";

const navItems = [
  { icon: "/coat.svg", title: "Персонаж", link: "profile" },
  { icon: "/arch.svg", title: "Задания", link: "events" },
  { icon: "/case.svg", title: "Инвентарь", link: "inventory" },
  { icon: "/book.svg", title: "Достижения", link: "achievements" },
  { icon: "/cristal.svg", title: "Магазин", link: "shop" },
  { icon: "/lance.svg", title: "Торговля", link: "marketplace" },
  { icon: "/axe.svg", title: "Сражения", link: "buttles" },
];

const adminNavItems = [
  { icon: "/coat.svg", title: "Персонаж", link: "profile" },
  { icon: "/arch.svg", title: "Задания", link: "events" },
  { icon: "/case.svg", title: "Инвентарь", link: "inventory" },
  { icon: "/book.svg", title: "Достижения", link: "achievements" },
  { icon: "/cristal.svg", title: "Магазин", link: "shop" },
  { icon: "/lance.svg", title: "Торговля", link: "marketplace" },
  { icon: "/axe.svg", title: "Сражения", link: "buttles" },
  {
    icon: "/admin-shield.svg",
    title: "Панель администратора",
    link: "admin",
  },
];

export const SideMenu = () => {
  const [activeTab, setActiveTab] = useState({
    name: "Персонаж",
    link: "profile",
  });

  const user = useRecoilValue(userState);

  return (
    <>
      <Flex
        width="265px"
        minWidth="265px"
        height="800px"
        borderRadius="20px"
        flexDirection="column"
        alignItems="top"
        bgColor="#FFF"
        boxShadow="md"
        p="md"
      >
        <Flex justifyContent="center" mt="24px" mb="10px">
          <Image src="/logo.svg" width={190} height={50} alt="" />
        </Flex>
        <Image src="/underline.svg" width={233} height={1} alt="" />

        <Flex flexDirection="column" mt="22px" p="0 15px">
          {user.role === "admin"
            ? adminNavItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                  active={activeTab === item.title}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                />
              ))
            : navItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                  active={activeTab === item.title}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                />
              ))}
        </Flex>
      </Flex>
    </>
  );
};

const MenuItem = ({ icon, title, active, activeTab, setActiveTab, link }) => {
  return (
    <Link href={`/${link}`} _hover={{ textDecoration: "none" }}>
      <Flex
        cursor="pointer"
        width={220}
        height={54}
        alignItems="center"
        p="17px 0 17px 28px"
        _hover={{
          opacity: 0.7,
        }}
        boxShadow={`${active ? "md" : ""}`}
        borderRadius={8}
        onClick={() => {
          setActiveTab(title);
        }}
      >
        <Image
          src={icon}
          width={20}
          height={20}
          alt=""
          color={`${active ? "#3A83F1" : "#322659"}`}
        />
        <Text
          color={`${active ? "#3A83F1" : "#322659"}`}
          ml={17}
          fontSize={14}
          fontWeight={600}
        >
          {title}
        </Text>
      </Flex>
    </Link>
  );
};
