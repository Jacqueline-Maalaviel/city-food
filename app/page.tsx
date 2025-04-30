import { Image, Flex } from "@chakra-ui/react";
import HeaderPage from "./header/page";
import HomePage from "./home/page";

export default function Home() {
  return (
    <Flex bg={'gray.300'} padding={6}>
      <Image
        position="absolute"
        top={3}
        left={6}
        src="/download.png"
        boxSize="40px"
        borderRadius="full"
        fit="cover"
        alt="City Food"
      />
      <HeaderPage />
      <HomePage />
    </Flex>
  );
}
