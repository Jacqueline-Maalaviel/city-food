import {  Flex, Grid, Image, Button, Card, Text, Icon } from "@chakra-ui/react";
import { LiaHeartSolid } from "react-icons/lia";

const Favourites = () => {
    return (
        <Flex
            direction={["column", "column", "row"]}
            justifyContent="space-between"
            alignItems="center"
            mb={4}
        >
            <Grid
                templateColumns={[ "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(6, 1fr)" ]}
                gap={6}
                padding={6}
            >
                    <Card.Root maxW="xs" overflow="hidden"  size="sm" m="auto" p={1}>
                    <Image
                        // src={meal.strMealThumb}
                        // alt={meal.strMeal}
                        height="150px"
                        objectFit="cover"
                    />
                    <Card.Body gap="2">
                        <Card.Title></Card.Title>
                        <Card.Description>
                        Category: 
                        <br />
                        Area: 
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
                            <LiaHeartSolid />
                        </Icon>
                        </Button>
                    </Card.Footer>
                    </Card.Root>
                </Grid>
        </Flex>
        
    );
}
export default Favourites;