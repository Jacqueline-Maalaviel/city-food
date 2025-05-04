import { Flex, Stack } from "@chakra-ui/react";
import HeaderPage from "@/app/(client)/header/page";
import FooterPage from "@/app/(client)/footer/page";

export default function ContentLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
    return (
        <Flex bg={'gray.300'}>
            <Stack>
                <HeaderPage />
                    {children}
                <FooterPage />
            </Stack>
        </Flex>
    );
}
