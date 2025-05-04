'use client'
import { Button, Card, Flex, Grid, Stack, Text, Image, Icon, Input, InputGroup } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { LiaHeart } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";

interface ExploreMealsProps {
  meals: { idMeal: string; [key: string]: string; }[];
}

export default function MenuCard() {
  const [meals, setMeals] = useState<ExploreMealsProps["meals"]>([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const fetchMeals = async () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const allMeals: ExploreMealsProps["meals"] = [];
  
    for (const letter of alphabet) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
      const data = await response.json();
      if (data.meals) {
        allMeals.push(...data.meals.slice(0, 5));
      }
    }
  
    setMeals(allMeals);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchMeals();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Flex
        direction={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Stack mt={4} w="full">
          <Flex justifyContent="center" alignItems="center" mt={4}>
            <InputGroup endElement={<LuSearch />} maxWidth={"300px"} fontSize="lg">
              <Input
                placeholder="Search food..."
                variant={"subtle"}
                color="white"
                bg={"blackAlpha.900"}
                borderRadius={"3xl"}
              />
            </InputGroup>
          </Flex>
          <Grid
            templateColumns={[ "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(6, 1fr)" ]}
            gap={6}
            padding={6}
          >
            {meals.map((meal) => (
              <Card.Root maxW="xs" overflow="hidden" key={meal.idMeal} size="sm" m="auto" p={1}>
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  height="150px"
                  objectFit="cover"
                />
                <Card.Body gap="2">
                  <Card.Title>{meal.strMeal}</Card.Title>
                  <Card.Description>
                    Category: {meal.strCategory}
                    <br />
                    Area: {meal.strArea}
                    <br />
                    <br />
                  </Card.Description>
                  <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    $302
                  </Text>
                </Card.Body>
                <Card.Footer gap="2">
                  <Button variant="solid">Add to cart</Button>
                  <Button variant="outline">
                    <Icon
                      colorPalette={"red"}
                      color={"red.600"}
                      size="sm"
                      aria-label="Add to favorites"
                    >
                      <LiaHeart />
                    </Icon>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))}
          </Grid>
        </Stack>
      </Flex>

      {showScrollButton && (
        <Button
          position="fixed"
          bottom="50px"
          right="20px"
          zIndex="10"
          colorScheme="teal"
          onClick={scrollToTop}
          borderRadius="full"
          boxShadow="md" 
          size={'xs'}
        >
          <Icon size={'sm'} color={'gray.700'}><FaArrowUp /></Icon>
        </Button>
      )}
    </>
  );
}