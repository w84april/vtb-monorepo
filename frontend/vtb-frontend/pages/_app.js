import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import { SideMenuWrapper } from "../components/SideMenuWrapper";
import { UserWrapper } from "../components/Profile/UserWrapper";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <RecoilRoot>
            <UserWrapper>
                <SideMenuWrapper>
                    <Component {...pageProps} />
                </SideMenuWrapper>
            </UserWrapper>
        </RecoilRoot>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
