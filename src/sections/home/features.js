import React from "react"
import {
  Flex,
  Box,
  SimpleGrid,
  VStack,
  Image,
  chakra,
  Container,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react"

export default function Features() {
  return (
    <Flex
      bg="#f1f6f4"
      p={{ lg: 10, base: 5}}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW={"5xl"} px={{ lg: 8, base: 4}} py={10} mx="auto">
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            lg: 2,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 24,
          }}
        >
          <Box>
            <Image
              width={"380px"}
              src="https://www.blinkist.com/packs/media/pages/business/images/phone-mockup/phone-mockup-en-2d8d969cbe0e7176a85ed48f31da404b.png"
            />
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <chakra.h1 fontSize={{ lg: "3xl", sm: "2xl", base: "3xl"}} fontWeight="bold">
              Build your team’s learning habit with these features
            </chakra.h1>
            <UnorderedList fontSize={{ lg: "xl", sm: "16px"}} color="gray.600" pt={5}>
              <ListItem pt={5}>
                Award-winning,{" "}
                <chakra.span color={"blackAlpha.700"} fontWeight="bold">
                  {" "}
                  mobile-first microlearning—{" "}
                </chakra.span>
                let your team take control of how, when, and where they learn.
              </ListItem>
              <ListItem pt={5}>
                Key ideas from{" "}
                <chakra.span color={"blackAlpha.700"} fontWeight="bold">
                  5,500+ bestselling nonfiction books and podcasts{" "}
                </chakra.span>
                that your team can read or listen to in 15-mins.
              </ListItem>
              <ListItem pt={5}>
                27 categories for
                <chakra.span color={"blackAlpha.700"} fontWeight="bold">
                  {" "}
                  personal and professional growth—
                </chakra.span>{" "}
                give your team the knowledge to develop in every facet of life,
                not just work.
              </ListItem>
              <ListItem pt={5}>
                Curated collections and
                <chakra.span color={"blackAlpha.700"} fontWeight="bold">
                  {" "}
                  personalized recommendations
                </chakra.span>{" "}
                to keep your team engaged.
              </ListItem>
              <ListItem pt={5}>
                <chakra.span color={"blackAlpha.700"} fontWeight="bold">
                  {" "}
                  40 new titles
                </chakra.span>{" "}
                added each month, plus learning reminders so your curious minds
                stay satisfied.
              </ListItem>
            </UnorderedList>
          </VStack>
        </SimpleGrid>
      </Container>
    </Flex>
  )
}
