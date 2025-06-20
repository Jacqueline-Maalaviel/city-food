"use client";
import {
  Button,
  Card,
  Image,
  useMediaQuery,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const scroll = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
`;

const Category = () => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);
  const [category, setCategory] = useState<Category[]>([]);

  const fetchCategory = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await response.json();
    setCategory(data.categories);
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  
  const maxWidth = isMobile 
    ? "100vw"
    : "98.9vw";

  return (
    <Box
      overflow="hidden"
      maxWidth={maxWidth}
      py={4}
      css={{
        "&:hover > div": {
          animationPlayState: "paused",
        },
      }}
    >
      <HStack
        as="div"
        animation={`${scroll} 15s linear infinite`}
        gap={4}
        whiteSpace={"nowrap"}
      >
        {[...category, ...category].map((cat, idx) => (
          <Card.Root
            key={idx}
            maxW="250px"
            minW="250px"
            overflow="hidden"
            p={1}
            shadow="md"
          >
            <Image
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              bg="gray.200"
            />
            <Card.Body>
              <Card.Title>{cat.strCategory}</Card.Title>
              {/* <Card.Description>
                {cat.strCategoryDescription.slice(0, 100)}...
              </Card.Description> */}
            </Card.Body>
            <Card.Footer gap="2">
              <Button variant="solid" color={"gray.600"} fontWeight={"bold"}>
                Explore
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </HStack>
    </Box>
  );
};

export default Category;