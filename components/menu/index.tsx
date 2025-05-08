'use client'
import { HStack, Skeleton } from "@chakra-ui/react";
import MenuCard from "./card";
import { useState, useEffect } from "react";

interface ExploreMealsProps {
  meals: { 
    idMeal: string; 
    strMeal: string; 
    strCategory: string; 
    strArea: string; 
    strMealThumb: string; 
  }[];
}

export default function Menu() {
  const [meals, setMeals] = useState<ExploreMealsProps["meals"]>([]);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = async () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const allMeals: ExploreMealsProps["meals"] = [];
  
    for (const letter of alphabet) {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
      const data = await response.json();
      if (data.meals) {
        allMeals.push(
          ...data.meals
            .slice(0, 4)
        );
      }
    }
  
    setMeals(allMeals);
    setIsLoading(false);
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
      <MenuCard 
        meals={meals} 
        showScrollButton={showScrollButton} 
        scrollToTop={scrollToTop}
      />
      {isLoading && (
        <HStack
          width="full"
          justifyContent="space-between"
          flexWrap="wrap" 
          padding={5}
        >
          {[...Array(6)].map((_, i) => (
            <Skeleton
              key={i}
              height={"400px"} 
              width={["100%", "150px", "200px"]} 
            />
          ))}
        </HStack>
      )}
    </>
  );
}