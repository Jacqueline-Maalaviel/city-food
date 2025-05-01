import { Button } from "@chakra-ui/react";
import CustomLink from "../utilities";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

export default function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <CustomLink href={href} textDecor={'none'}>
      <Button
        m={2}
        _hover={{ bg: "gray.950", color: "white" }}
        bg={isActive ? "gray.950" : "transparent"}
        color={isActive ? "yellow.500" : "black"}
        borderRadius="full"
        fontWeight={"bold"}
      >
        {label}
      </Button>
    </CustomLink>
  );
}