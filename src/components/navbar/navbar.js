import React from "react"
import {
  Flex,
  HStack,
  VStack,
  Button,
  Box,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Image,
  Container,
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import { CloseButton } from "@chakra-ui/react"
import BusinessLogo from "../../assets/business-logo.png"
import { Link } from "gatsby"

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800")
  const mobileNav = useDisclosure()
  return (
    <Container bg={"transparent"} maxW="5xl" py={4}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <Link
            to="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            <Image
              src={BusinessLogo}
              width={{ lg: "250px", sm: "200px", base: "140px" }}
              height={{ lg: "27px", sm: "24px", base: "18px" }}
            />
          </Link>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={5}
            mr={2}
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Button
              variant={"link"}
              color="black"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "25%",
                textDecorationColor: "#2cde80",
              }}
            >
              <Link to="/blog">Blog</Link>
            </Button>
            <Button
              variant={"link"}
              color="black"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "25%",
                textDecorationColor: "#2cde80",
              }}
            >
              <Link to="/plan">Plan</Link>
            </Button>
            <Button
              bgColor={"#2cde80"}
              borderRadius={"5px"}
              _hover={{ bgColor: "#27A763" }}
            >
              <Link to="/demo">Get in touch</Link>
            </Button>
          </HStack>
          <Box
            display={{
              base: "inline-flex",
              md: "none",
            }}
          >
            <IconButton
              display={{
                base: "flex",
                md: "none",
              }}
              aria-label="Open menu"
              fontSize="20px"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />
              <Button
              variant={"link"}
              color="black"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "25%",
                textDecorationColor: "#2cde80",
              }}
            >
              <Link to="/blog">Blog</Link>
            </Button>
            <Button
              variant={"link"}
              color="black"
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "25%",
                textDecorationColor: "#2cde80",
              }}
            >
              <Link to="/plan">Plan</Link>
            </Button>
            <Button
              bgColor={"#2cde80"}
              borderRadius={"5px"}
              _hover={{ bgColor: "#27A763" }}
            >
              <Link to="/demo">Get in touch</Link>
            </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Container>
  )
}
