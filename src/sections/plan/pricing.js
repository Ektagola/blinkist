import React from "react"
import {
  Flex,
  Box,
  chakra,
  SimpleGrid,
  Stack,
  Container,
  Button,
} from "@chakra-ui/react"
import PricingCard from "../../components/cards/pricingCard"

export default function Pricing() {
  return (
    <Flex bgColor={"#0B4464"} maxW="full" pb={{ lg: 24, sm: 16, base: 10 }}>
      <Container maxW={"4xl"} textAlign={"center"}>
        <Box pt={{ lg: 20, sm: 10, base: 7 }} rounded="md">
          <Box w="full" px={{ lg: 10, base: 4}}>
            <chakra.span
              fontSize={{ lg: "5xl", md: "4xl", base: "3xl" }}
              color="white"
              fontWeight="bold"
            >
              Our plans
            </chakra.span>
            <chakra.span
              my={{ lg: 10, sm: 7 }}
              fontSize={"20px"}
              color="white"
              display={"block"}
            >
              Brilliant minds need brilliant ideas. Choose one of our plans
              below{" "}
              <chakra.span display={"block"}>
                {" "}
                and start cultivating curiosity and innovation in your team
                today.
              </chakra.span>
            </chakra.span>
          </Box>
          <SimpleGrid
            columns={{ lg: 2, md: 1 }}
            gap={{ lg: "28px", base: 10 }}
            rounded="md"
            mx={{ base: 5, lg: 10 }}
          >
            <Box
              bg="#f1f6f4"
              pt={10}
              boxShadow={"8px 8px #0365f2"}
              rounded="md"
            >
              <Flex direction="column">
                <Box px={6} pb={5} textAlign="center">
                  <chakra.span
                    fontSize={{ lg: "18px", base: "16px" }}
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
                    fontSize={{ lg: "3xl", base: "20px" }}
                    color="#051937"
                    fontWeight={"bold"}
                  >
                    5 – 50 people
                  </chakra.span>
                  <chakra.p mb={6} fontSize="md" color="blackAlpha.800">
                    This self-serve plan is perfect for companies with up to 50
                    employees, and small teams who want to get started with
                    Blinkist in minutes—at a discount.
                  </chakra.p>
                </Box>
                <Flex
                  px={10}
                  pt={5}
                  pb={10}
                  direction="column"
                  roundedBottom="md"
                >
                  <Stack mb={5} spacing={4}>
                    <PricingCard>Blinkist Premium access</PricingCard>
                    <PricingCard>Engagement resources</PricingCard>
                    <PricingCard>Partner Portal for account</PricingCard>
                    <PricingCard>User analytics dashboard</PricingCard>
                    <PricingCard>Curated learning paths</PricingCard>
                    <PricingCard>Customizable home screen</PricingCard>
                    <PricingCard>Single sign-on</PricingCard>
                    <PricingCard>LMS integration</PricingCard>
                  </Stack>
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
                    Learn more
                  </Button>
                </Flex>
              </Flex>
            </Box>
            <Box
              bg="#f1f6f4"
              pt={10}
              boxShadow={"8px 8px #0365f2"}
              rounded="md"
            >
              <Flex direction="column">
                <Box px={6} pb={5} textAlign="center">
                  <chakra.span
                    fontSize={{ lg: "18px", base: "16px" }}
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
                    fontSize={{ lg: "3xl", base: "20px" }}
                    color="#051937"
                    fontWeight={"bold"}
                  >
                    50+ people
                  </chakra.span>
                  <chakra.span mb={6} fontSize="md" color="blackAlpha.800">
                    For organizations with 1,000+ employees, or teams of 50+
                    people, request a demo to see how Blinkist can help your
                    organization achieve its learning goals.
                  </chakra.span>
                </Box>
                <Flex
                  px={10}
                  pt={5}
                  pb={10}
                  direction="column"
                  roundedBottom="md"
                >
                  <Stack mb={5} spacing={4}>
                    <PricingCard>Blinkist Premium access</PricingCard>
                    <PricingCard>Engagement resources</PricingCard>
                    <PricingCard>
                      Partner Portal for account management
                    </PricingCard>
                    <PricingCard>User analytics dashboard</PricingCard>
                    <PricingCard>Curated learning paths</PricingCard>
                    <PricingCard>Customizable home screen</PricingCard>
                    <PricingCard>Single sign-on</PricingCard>
                    <PricingCard>LMS integration</PricingCard>
                  </Stack>
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
                    Get in touch
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Flex>
  )
}
