'use client';
import { Button, Card, Image, Text, Grid, Icon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { LiaHeart } from "react-icons/lia";

interface ExploreMealsProps {
  meals: { idMeal: string; [key: string]: string; }[];
}

const ExploreMeals = () => {
  const [meals, setMeals] = useState<ExploreMealsProps["meals"]>([]);

  const fetchMeals = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=p");
    const data = await response.json();
    setMeals(data.meals.slice(0, 15));
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Grid
      templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]} 
      gap={4}
      padding={6}
    >
      {meals.map((meal) => (
        <Card.Root maxW="xs" size={'sm'} overflow="hidden" key={meal.idMeal} m="auto" p={1}>
          <Image 
            src={meal.strMealThumb} 
            alt={meal.strMeal}
            objectFit={"cover"}
            width={'250px'}
          />
          <Card.Body gap="2">
            <Card.Title>{meal.strMeal}</Card.Title>
            <Card.Description >
              Category: {meal.strCategory}
              <br />
              Area: {meal.strArea}
              <br />
              <br />
            </Card.Description>
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
              $450
            </Text>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">Add to cart</Button>
            <Button variant="surface">
              <Icon colorPalette={'red'} color={'red.600'} size="sm" aria-label="Add to favorites">
                <LiaHeart />
              </Icon>
            </Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </Grid>
  );
};

export default ExploreMeals;