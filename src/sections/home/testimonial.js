import React from "react"
import {
  Avatar,
  Box,
  Container,
  Text,
  useColorModeValue,
  chakra,
  Image,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react"
import { Link } from "gatsby"

export default function Testimonial() {
  return (
    <Box bg={"#d7e9ff"}>
      <Container
        py={16}
        px={{ lg: 8, sm: 4}}
        maxW="5xl"
        align={"center"}
        direction={"column"}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          maxW={"3xl"}
        >
          We had an incredible experience working with Chakra Templates and were
          impressed they made such a big difference in only three weeks. Our
          team is so grateful for the wonderful improvements they made and their
          ability to get familiar with the product concept so quickly.
        </Text>
        <Box textAlign={"center"}>
          <Avatar
            src={
              "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            }
            alt={"Jenny Wilson"}
            mb={2}
          />

          <Text fontWeight={600}>Jenny Wilson</Text>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.400", "gray.400")}
          >
            Vice President
          </Text>
        </Box>
      </Container>
      <Box maxW={"full"} bgColor="#054966" my={0}>
        <Container
          maxW={{ lg: "4xl", sm: "2xl" }}
          justifyContent="center"
          justify="center"
        >
          <HStack>
            <VStack py={{ sm: 5, base: 10}}>
              <chakra.h1
                color={"white"}
                fontWeight="bold"
                fontSize={{ lg: "3xl", sm: "2xl"}}
                textAlign="center"
                pt={{ lg: 15, sm: 12}}
                pb={{ lg: 10, sm: 5}}
              >
                Start building a culture of lifelong
                <chakra.span display={"block"}>learning today</chakra.span>
              </chakra.h1>
              <Button
                w={"300px"}
                color={"#14394E"}
                alignItems="center"
                justifyContent="center"
                fontSize={{
                  base: "md",
                  md: "lg",
                }}
                bg="#2cde80"
                _hover={{
                  bg: "#27A763",
                }}
                px={{
                  base: 5,
                  md: 10,
                }}
                py={{
                  base: 3,
                  md: 4,
                }}
              >
                <Link to="/plan">See plans</Link>
              </Button>
            </VStack>
            <Image display={{ lg: "flex", sm: "none", base: "none"}} src="https://www.blinkist.com/packs/media/pages/business/images/earphones-8e053b5cf2d29715ffcd0b56e2dd905c.svg" />
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
