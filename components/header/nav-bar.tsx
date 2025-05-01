'use client';
import { CloseButton, Drawer, Icon, Portal, Image, useMediaQuery } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import NavLink from "@/components/header/nav-link";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/my-favourites", label: "My Favourites" },
    { href: "/meal-generator", label: "Meal Generator" },
    { href: "/about-me", label: "About Me" },
  ];

  return (
    <>
      <Drawer.Root placement={isMobile ? "end" : "top"}>
        <Drawer.Trigger asChild>
          <Icon position={"absolute"} top={4} right={6} size="xl" color={"black"}>
            <AiOutlineMenu />
          </Icon>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg={'seashell'} colorPalette={"gray"} p={4}>
              <Drawer.Body alignSelf={"center"}>
                <Image
                  position="absolute"
                  top={6}
                  left={4}
                  src="/download.png"
                  boxSize="50px"
                  borderRadius="full"
                  fit="cover"
                  alt="City Food"
                />
                {isMobile ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      position: "absolute",
                      top: isMobile ? "90px" : "auto",
                      left: isMobile ? "0" : "auto",
                    }}
                  >
                    {navItems.map((item) => (
                      <NavLink
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        isActive={pathname === item.href}
                      />
                    ))}
                  </div>
                ) : (
                  <div>
                    {navItems.map((item) => (
                      <NavLink
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        isActive={pathname === item.href}
                      />
                    ))}
                  </div>
                )}
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}