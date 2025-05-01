import { Box, Flex, IconButton, Text, Link, HStack, Stack } from "@chakra-ui/react"
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa"

const currentYear = new Date().getFullYear()

const socialMediaLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: <FaInstagram /> },
  { href: "https://wa.me/233XXXXXXXXX", label: "WhatsApp", icon: <FaWhatsapp /> },
  { href: "https://youtube.com", label: "YouTube", icon: <FaYoutube /> },
  { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter /> },
  { href: "mailto:example@gmail.com", label: "Email", icon: <FaEnvelope /> },
];

export function SocialLinks() {
  return (
    <HStack>
      {socialMediaLinks.map(({ href, label, icon }) => (
        <Link key={label} href={href}>
          <IconButton
            aria-label={label}
            variant="ghost"
            color={'yellow.subtle'}
            _hover={{ color: "white" }}
          >
            {icon}
          </IconButton>
        </Link>
      ))}
    </HStack>
  );
}

export default function Footer() {
  return (
    <Box
      as="footer"
      p={4}
      bg="seashell"
      boxShadow="sm" 
      colorPalette={'yellow'}
      mt="auto"
    >
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
        <Stack>
          <SocialLinks />
          <Text fontWeight="semibold" pl={7} fontSize={'xs'} color={'yellow.subtle'}>Locate Us: Ashongman Estate</Text>
        </Stack>
        <Text mt={{ base: 8, md: 11 }} fontSize="xs" fontStyle={'italic'} color={'grey'}>
          © {currentYear} City Food. All rights reserved.
        </Text>
      </Flex>
    </Box>
  )
}
