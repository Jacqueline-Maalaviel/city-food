import { Flex, Stack } from "@chakra-ui/react";
import HeaderPage from "@/app/(client)/header/page";
import FooterPage from "@/app/(client)/footer/page";

export default function ContentLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Flex direction="column" bg="gray.300" minH="100vh">
            <HeaderPage />
            <Stack flex="1" overflowY="auto">{children}</Stack>
            <FooterPage />
        </Flex>
    );
}
