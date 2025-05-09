import { Flex, Icon, Table } from "@chakra-ui/react";
import { TiDeleteOutline } from "react-icons/ti";

export default function Cart() {
    return (
        <Flex
            direction={["column", "column", "row"]}
            justifyContent="start" 
            padding={6}
            alignItems="center"
            mb={4}
        >
            <Table.Root size="sm" variant="outline" m={4} interactive padding={4} borderRadius="md" boxShadow="sm">
                <Table.Header>
                    <Table.Row bg={'gray.800'}>
                    <Table.ColumnHeader>Meal</Table.ColumnHeader>
                    <Table.ColumnHeader>Unit Price</Table.ColumnHeader>
                    <Table.ColumnHeader>Quantity</Table.ColumnHeader>
                    <Table.ColumnHeader></Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">Total Price</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body color={'gray.800'} _hover={{color: 'white'}}>
                    {items.map((item) => (
                    <Table.Row key={item.id}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.unitPrice}</Table.Cell>
                        <Table.Cell pl={6}>{item.quantity}</Table.Cell>
                        <Table.Cell><Icon size={'md'} color={'red.500'}><TiDeleteOutline /></Icon></Table.Cell>
                        <Table.Cell textAlign="end">{item.totalPrice}</Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                    <Table.Row bg={'gray.800'}>
                    <Table.Cell colSpan={4}>Total Amount to be paid</Table.Cell>
                    <Table.Cell textAlign="end">$1,499.97</Table.Cell>
                    </Table.Row>
                </Table.Footer>
            </Table.Root>
        </Flex>
    );
}
const items = [
  { id: 1, name: "Provençal Omelette Cake", unitPrice: 999.99, quantity: 1, totalPrice: 999.99 },
  { id: 2, name: "Apam balik", unitPrice: 49.99, quantity: 1, totalPrice: 49.99 },
  { id: 3, name: "Eton Mess", unitPrice: 150.0, quantity: 1, totalPrice: 150.0 },
  { id: 4, name: "French Lentils With Garlic and Thyme", unitPrice: 799.99, quantity: 1, totalPrice: 799.99 },
  { id: 5, name: "Fish Pie", unitPrice: 199.99, quantity: 1, totalPrice: 199.99 },
];