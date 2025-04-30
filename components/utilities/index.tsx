import type { FC } from 'react';
import {
  Link as ChakraLink, LinkProps as ChakraLinkProps
} from "@chakra-ui/react"
import NextLink from "next/link";

type CustomLinkProps = ChakraLinkProps

const CustomLink: FC<CustomLinkProps> = (props) => {
  const { href, children, ...rest } = props
  return (
    <ChakraLink asChild {...rest}>
      <NextLink href={href as string}>{children}</NextLink>
    </ChakraLink>
  )
}
export default CustomLink;