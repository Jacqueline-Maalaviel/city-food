'use client';
import { Text, HStack, Image } from "@chakra-ui/react";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <HStack 
      align="center" 
      justify="center" 
      flexWrap="wrap" 
      bg={'seashell'} 
      color={'blackAlpha.900'} 
      p={2}  
      boxShadow="sm"
      position={"sticky"}
      top={0}
      zIndex={10}
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
        color={'#4B2E19'}
      >
        City Food
      </Text>
      <NavBar />
    </HStack>
  );
}