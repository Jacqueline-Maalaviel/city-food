'use client'
import { useState } from "react"
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Heading,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Image,
  VStack,
  HStack,
  Separator,
} from "@chakra-ui/react"
import { LuMinus, LuPlus, LuShoppingBag, LuMapPin } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export default function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", name: "Provençal Omelette Cake", price: 999.99, quantity: 1 },
    { id: "2", name: "Apam balik", price: 49.99, quantity: 1 },
    { id: "3", name: "Eton Mess", price: 150, quantity: 1 },
    { id: "4", name: "French Lentils With Garlic and Thyme", price: 799.99, quantity: 1 },
    { id: "5", name: "Fish Pie", price: 199.99, quantity: 1 },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal: number = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax: number = subtotal * 0.1
  const total: number = subtotal + tax

    return (
        <Flex
            direction={["column", "column", "column"]}
            justifyContent="start" 
            padding={6}
            alignItems="center"
            mb={4}
        >
            <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
                {/* Cart Items */}
                <GridItem>
                    <Card.Root bg={"white"} boxShadow="md">
                        <CardHeader>
                            <HStack color="gray.800" fontWeight="semibold">
                                <LuShoppingBag size={24} />
                                <Heading size="md">Your Cart</Heading>
                                <Badge colorScheme="orange" ml={2}>
                                    {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                                </Badge>
                            </HStack>
                        </CardHeader>
                        <CardBody>
                            <VStack w={"full"} p={4} align="stretch">
                                {cartItems.map((item, index) => (
                                    <Box key={item.id}>
                                        <Flex
                                            align="center"
                                            p={4}
                                            rounded="lg"
                                            _hover={{ bg: "gray.50" }}
                                            transition="background-color 0.2s"
                                        >
                                            {/* Product Image */}
                                            <Box flexShrink={0}>
                                                <Image
                                                    src="/download.png"
                                                    alt={item.name}
                                                    w={16}
                                                    h={16}
                                                    rounded="lg"
                                                    objectFit="cover"
                                                    bg="white"
                                                />
                                            </Box>

                                            {/* Product Details */}
                                            <Box flex={1} minW={0} ml={4}>
                                                <Text fontWeight="medium" color={"gray.600"}>
                                                    {item.name}
                                                </Text>
                                                <Text fontSize="sm" color={"gray.400"}>
                                                    ${item.price.toFixed(2)} each
                                                </Text>
                                            </Box>

                                            {/* Quantity Controls */}
                                            <HStack ml={4}>
                                                <IconButton
                                                    aria-label="Decrease quantity"
                                                    size="sm" color="gray.500"
                                                    variant="outline"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <LuMinus />
                                                </IconButton>
                                                <Text w={8} textAlign="center" color={'gray.700'} fontWeight="medium">
                                                    {item.quantity}
                                                </Text>
                                                <IconButton
                                                    aria-label="Increase quantity"
                                                    size="sm" color="gray.500"
                                                    variant="outline"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <LuPlus />
                                                </IconButton>
                                            </HStack>

                                            {/* Price and Remove */}
                                            <HStack  ml={4}>
                                                <Text fontWeight="semibold" color={'gray.500'} fontSize="lg">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </Text>
                                                <IconButton
                                                    aria-label="Remove item"
                                                    size="lg" color={'red.400'}
                                                    variant="ghost"
                                                    colorScheme="red"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <MdOutlineDeleteForever />
                                                </IconButton>
                                            </HStack>
                                        </Flex>
                                        {index < cartItems.length - 1 && <Separator my={2} />}
                                    </Box>
                                ))}
                            </VStack>
                        </CardBody>
                    </Card.Root>
                </GridItem>

                {/* Order Summary */}
                <GridItem>
                    <Card.Root bg={"white"} position="sticky" top={8}>
                        <CardHeader>
                            <Heading size="md" color="gray.600">Order Summary</Heading>
                        </CardHeader>
                        <CardBody>
                            <VStack>
                                <VStack color="gray.600">
                                    <Flex justify="space-between" fontSize="sm"  w="full">
                                        <Text>Subtotal</Text>
                                        <Text>${subtotal.toFixed(2)}</Text>
                                    </Flex>
                                    <Flex justify="space-between" fontSize="sm">
                                        <Text>Tax (10%)</Text>
                                        <Text>${tax.toFixed(2)}</Text>
                                    </Flex>
                                    <Separator />
                                    <Flex justify="space-between" fontWeight="semibold" fontSize="lg">
                                        <Text>Total</Text>
                                        <Text>${total.toFixed(2)}</Text>
                                    </Flex>
                                </VStack>
                                <Button w="full" bg="gray.600" color="white" _hover={{ bg: "gray.700", color: 'white' }}>
                                    Proceed to Checkout
                                </Button>
                                <Button variant="outline" _hover={{ color: 'white', bg: "gray.700"}} color={'gray.500'} w="full">
                                    Continue Shopping
                                </Button>

                                {/* Delivery Info */}
                                <Box mt={6} p={4} bg="gray.50" rounded="lg" w="full">
                                    <HStack fontSize="sm" color="gray.800">
                                        <LuMapPin />
                                        <Text fontWeight="medium">Delivery to:</Text>
                                    </HStack>
                                    <Text fontSize="sm" color="gray.700" mt={1}>
                                        Ashongman Estate
                                    </Text>
                                    <Text fontSize="xs" color="gray.600" mt={2}>
                                        Estimated delivery: 30-45 minutes
                                    </Text>
                                </Box>
                            </VStack>
                        </CardBody>
                    </Card.Root>
                </GridItem>
            </Grid>
        </Flex>
    );
}