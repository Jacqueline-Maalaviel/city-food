import { Image, Flex, HStack, Text, Stack } from "@chakra-ui/react";
import HeaderPage from "./header/page";
import HomePage from "./home/page";

export default function Home() {
  return (
    <Flex bg={'gray.300'}>
      <Stack>
        <HStack 
          align="center" 
          justify="center" 
          flexWrap="wrap" 
          bg={'seashell'} 
          color={'blackAlpha.900'} 
          p={2}  
          boxShadow="sm"
        >
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
            <Text
              fontSize={["3xl", "4xl", "5xl"]} 
              fontWeight="bold"
              letterSpacing="tight"
              fontStyle="italic"
              textAlign="center"
            >
              City Food
            </Text>
              <HeaderPage />
          </HStack>
        <HomePage />
      </Stack>
    </Flex>
  );
}
