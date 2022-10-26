import React from "react"
import {
  Box,
  SimpleGrid,
  chakra,
  Button,
  Container,
  Image,
  Stack,
} from "@chakra-ui/react"
import { Link } from "gatsby"

export default function OtherFeatures() {
  return (
    <Container p={{ lg: 20, sm: 10}} maxW={"5xl"} justifyContent="center" alignItems="center">
      <chakra.h1
        color={"#03314b"}
        fontSize={{ lg: "3xl", sm: "2xl", base: "2xl"}}
        fontWeight={"bold"}
        textAlign={"center"}
        px={{ lg: 10, sm: 4}}
        letterSpacing="wide"
      >
        Make it easy to create a learning habit in your workplace with Blinkist
      </chakra.h1>
      <Box px={8} py={10} mx="auto">
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={10}
          spacing={10}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{
                base: "xl",
                md: "2xl",
              }}
              fontWeight="bold"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="#0365f2"
              lineHeight={{
                md: "shorter",
              }}
            >
              Fast access to ideas and inspiration for work and life
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              fontSize={{
                md: "xl",
              }}
            >
              Give your team instant access to key insights from
              <chakra.span fontWeight={"bold"} color="blackAlpha.700">
                {" "}
                5,500+ books
              </chakra.span>{" "}
              and podcasts across{" "}
              <chakra.span fontWeight={"bold"} color="blackAlpha.700">
                {" "}
                27 categories.
              </chakra.span>
            </chakra.p>
          </Box>
          <Box>
            <Image src="https://www.blinkist.com/packs/media/pages/business/images/benefits/access-image-en-20dd4c597d1c50aeb149437a8c9ba858.png" />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={24}
          spacing={0}
        >
          <Box
            order={{
              base: "initial",
              md: 2,
            }}
          >
            <chakra.h2
              mb={4}
              fontSize={{
                base: "xl",
                md: "2xl",
              }}
              fontWeight="bold"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="#0365f2"
              lineHeight={{
                md: "shorter",
              }}
            >
              Learning that fits your team
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "xl",
              }}
            >
              Help your team learn wherever and whenever they have{" "}
              <chakra.span fontWeight={"bold"} color="blackAlpha.700">
                {" "}
                15 minutes
              </chakra.span>{" "}
              spare, with our
              <chakra.span fontWeight={"bold"} color="blackAlpha.700">
                {" "}
                mobile-first, audio-first app.
              </chakra.span>
            </chakra.p>
          </Box>
          <Box>
            <Image src="https://www.blinkist.com/packs/media/pages/business/images/benefits/learning-image-206ee5fc7dcbddf4198f8e27b6c23a05.jpg" />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={10}
          spacing={10}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{
                base: "xl",
                md: "2xl",
              }}
              fontWeight="bold"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="#0365f2"
              lineHeight={{
                md: "shorter",
              }}
            >
              Get detailed insights into your team’s learning
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              fontSize={{
                md: "xl",
              }}
            >
              See how your team learns, and what's important to them with your
              <chakra.span fontWeight={"bold"} color="blackAlpha.700">
                {" "}
                user analytics dashboard—
              </chakra.span>{" "}
              so you can make data-led decisions.
            </chakra.p>
          </Box>
          <Box>
            <Image src="https://www.blinkist.com/packs/media/pages/business/images/benefits/insights-image-6dc6155c715f6857c8e78d96b887b9e1.jpg" />
          </Box>
        </SimpleGrid>
      </Box>
      <Stack alignItems={'center'}>
      <Button
        bgColor={"#2cde80"}
        borderRadius={"5px"}
        w="300px"
        _hover={{ bgColor: "#27A763" }}
      >
       <Link to="/demo"> Get in touch</Link>
      </Button>
      </Stack>
    </Container>
  )
}
