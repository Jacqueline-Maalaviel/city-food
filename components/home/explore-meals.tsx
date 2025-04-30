'use client';
import { Button, Card, Image, Text, Grid } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface ExploreMealsProps {
  meals: { idMeal: string; [key: string]: string; }[];
}

const ExploreMeals = () => {
  const [meals, setMeals] = useState<ExploreMealsProps["meals"]>([]);

  const fetchMeals = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const data = await response.json();
    setMeals(data.meals);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <Grid
      templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} 
      gap={4}
      padding={6}
    >
      {meals.map((meal) => (
        <Card.Root maxW="xs" overflow="hidden" key={meal.idMeal} m="auto" p={1}>
          <Image src={meal.strMealThumb} alt={meal.strMeal} />
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
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </Grid>
  );
};

export default ExploreMeals;