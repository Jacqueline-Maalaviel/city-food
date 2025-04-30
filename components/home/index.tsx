'use client';
import { Text, Stack, HStack, Flex } from "@chakra-ui/react";
import ExploreMeals from "./explore-meals";
import Category from "./meal-category";

const Home = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      mb={4}
      pt={4}
    >
      <Stack mt={10} w="full">
        <HStack 
          align="center" 
          justify="center" 
          mb={4} 
          flexWrap="wrap" 
          bg={'seashell'} 
          color={'blackAlpha.900'} 
          p={2}  
          boxShadow="sm"
        >
          <Text
            fontSize={["3xl", "4xl", "5xl"]} 
            fontWeight="bold"
            letterSpacing="tight"
            fontStyle="italic"
            textAlign="center"
          >
            Welcome,
          </Text>
          <Text
            fontSize={["lg", "xl", "2xl"]}
            mt={[3, 3, 5]}
            fontWeight="bold"
            letterSpacing="tight"
            textAlign="center"
            
          >
            Explore Our Meals
          </Text>
        </HStack>
        <ExploreMeals />
        <Text
          fontSize={"5xl"}
          mt={10}
          fontWeight="bold"
          letterSpacing="tight"
          textAlign="center"
          fontStyle={'italic'} color={'blackAlpha.900'}
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