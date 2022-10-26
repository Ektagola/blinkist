import React from "react"
import {
  Flex,
  Box,
  chakra,
  SimpleGrid,
  Container,
  Button,
} from "@chakra-ui/react"

export default function PriceShort() {
  return (
    <Flex bgColor={"#0B4464"} maxW="full" pb={24}>
      <Container maxW={"4xl"} justifyContent="center" textAlign={"center"}>
        <Box pt={20} rounded="md">
          <SimpleGrid columns={{lg: 2, md: 1}} gap="30px" rounded="md" mx={[5, 10]}>
            <Box
              bg="#f1f6f4"
              pt={8}
              boxShadow={"8px 8px #0365f2"}
              rounded="md"
            >
                <Box px={6} textAlign="center">
                  <chakra.span
                    fontSize="18px"
                    fontWeight={"bold"}
                    color="#0365f2"
                    textAlign={"center"}
                    alignItems="center"
                  >
                    Teams
                  </chakra.span>
                  <chakra.span
                    my={5}
                    display={"block"}
                    textAlign={"center"}
                    fontSize="3xl"
                    color="#051937"
                    fontWeight={"bold"}
                  >
                    5 – 50 people
                  </chakra.span>
                </Box>
                  <Button
                    w={"300px"}
                    color={"#14394E"}
                    alignItems="center"
                    justifyContent="center"
                    mt={5}
                    fontSize={{
                      base: "sm",
                      md: "md",
                    }}
                    bg="#2cde80"
                    _hover={{
                      bg: "#27A763",
                    }}
                    px={{
                      base: 8,
                      md: 10,
                    }}
                    py={{
                      base: 3,
                      md: 4,
                    }}
                    cursor="pointer"
                  >
                    Let's do this
                  </Button>
            </Box>
            <Box
              bg="#f1f6f4"
              py={10}
              boxShadow={"8px 8px #0365f2"}
              rounded="md"
            >
                <Box px={6} textAlign="center">
                  <chakra.span
                    fontSize="18px"
                    fontWeight={"bold"}
                    color="#0365f2"
                    textAlign={"center"}
                    alignItems="center"
                  >
                    Enterprise
                  </chakra.span>
                  <chakra.span
                    my={5}
                    display={"block"}
                    textAlign={"center"}
                    fontSize="3xl"
                    color="#051937"
                    fontWeight={"bold"}
                  >
                    50+ people
                  </chakra.span>
                </Box>
                  <Button
                    w={"300px"}
                    color={"#14394E"}
                    alignItems="center"
                    justifyContent="center"
                    mt={5}
                    fontSize={{
                      base: "sm",
                      md: "md",
                    }}
                    bg="#2cde80"
                    _hover={{
                      bg: "#27A763",
                    }}
                    px={{
                      base: 8,
                      md: 10,
                    }}
                    py={{
                      base: 3,
                      md: 4,
                    }}
                    cursor="pointer"
                  >
                   Let's Chat
                  </Button>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Flex>
  )
}
