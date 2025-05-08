'use client'
import { Button, Card, Flex, Grid, Stack, Text, Image, Icon, Input, InputGroup, NativeSelect } from "@chakra-ui/react";
import { LiaHeart } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";

interface MenuCardProps {
  meals: { idMeal: string; strMeal: string; strCategory: string; strArea: string; strMealThumb: string; }[];
  showScrollButton: boolean;
  scrollToTop: () => void;
}
const MenuCard: React.FC<MenuCardProps> = ({ meals, showScrollButton, scrollToTop }) => {
  return (
    <>
      <Flex
        direction={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Stack mt={4} w="full">
          <Flex justifyContent="space-between" mx={6} alignItems="center" mt={4}>
            <NativeSelect.Root size="sm" maxWidth="250px" variant={'subtle'}>
              <NativeSelect.Field placeholder="Select category" color="white"  borderRadius={"3xl"}>
                {meals.map((meal) => (
                  <option key={meal.idMeal} value={meal.strCategory}>
                    {meal.strCategory}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
            <InputGroup endElement={<LuSearch />} maxWidth={"250px"} fontSize="lg">
              <Input
                placeholder="Search food..."
                variant={"subtle"}
                color="white"
                size={'sm'}
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
export default MenuCard;