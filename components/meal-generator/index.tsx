'use client';
import { Flex, Stack, Card, Button, Icon, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { LiaHeartSolid } from "react-icons/lia";

interface MealGeneratorProps {
    meals: { idMeal: string; [key: string]: string; }[];
}

export default function MealGenerator() {
    const [meals, setMeals] = useState<MealGeneratorProps['meals']>([]);

    const fetchRandomMeal = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
            setMeals(data.meals);
    };

    useEffect(() => {
        fetchRandomMeal();
    }, []);

    return (
        <Flex
            direction={["column", "column", "row"]}
            justifyContent="center"
            alignItems="center"
            mb={4}
        >
            <Stack
                gap={6}
                padding={6}
            >
                {meals.map((meal) => (
                    <Card.Root  overflow="hidden" key={meal.idMeal} maxW={'xs'} m="auto" p={1}>
                        <Image
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            height="200px"
                            objectFit="cover"
                        />
                        <Card.Body gap="2">
                            <Card.Title>{meal.strMeal}</Card.Title>
                            <Card.Description>
                                Category: {meal.strCategory}
                                <br />
                                Area: {meal.strArea}
                                <br />
                                Youtube: {meal.strYoutube}
                                <br />
                                # {meal.strTags}
                                <br />
                            </Card.Description>
                            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                            $452
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
                                <LiaHeartSolid />
                            </Icon>
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
                    <Button 
                        variant={'outline'} 
                        color={'black'} 
                        onClick={() => fetchRandomMeal()}
                        _hover={{ color: 'white' }}
                    >
                        Generate Meal
                    </Button>
                </Stack>
        </Flex>
    );
}