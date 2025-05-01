import { Flex, Stack } from "@chakra-ui/react";
import HeaderPage from "./header/page";
import HomePage from "./home/page";
import FooterPage from "./footer/page";

export default function Home() {
  return (
    <Flex bg={'gray.300'}>
      <Stack>
        <HeaderPage />
        <HomePage />
        <FooterPage />
      </Stack>
    </Flex>
  );
}
