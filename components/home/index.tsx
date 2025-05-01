'use client';
import { Text, Stack, Flex } from "@chakra-ui/react";
import ExploreMeals from "./explore-meals";
import Category from "./meal-category";

const Home = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <Stack mt={4} w="full">
        <ExploreMeals />
        <Text
          fontSize={"5xl"}
          mt={10}
          fontWeight="bold"
          letterSpacing="tight"
          textAlign="center"
          fontStyle={'italic'} 
          color={'yellow.subtle'}
          bg={'seashell'}
        >
          Explore Category
        </Text>
        <Category />
      </Stack>
    </Flex>
  );
};

export default Home;