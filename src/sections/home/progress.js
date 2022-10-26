import React from "react"
import { chakra, Container, SimpleGrid } from "@chakra-ui/react"
import { AiFillStar } from "react-icons/ai"
import ProgressCard from "../../components/cards/progressCard"

export default function Progress() {
  return (
    <Container maxW="5xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }} pb={16}>
      <chakra.h1
        textAlign={"center"}
        fontSize={{ lg: "3xl", base: "2xl"}}
        py={10}
        fontWeight={"bold"}
      >
        Blinkist in numbers
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={0}>
        <ProgressCard
          number={"91%"}
          text={"of Blinkist members create a better reading habit*"}
        />
        <ProgressCard
          number={"87%"}
          text={"have made positive changes in their lives thanks to Blinkist*"}
        />
        <ProgressCard
          number={"224k+"}
          text={"5-star app reviews from happy learners"}
          icon={<AiFillStar size={"3em"} />}
        />
      </SimpleGrid>
      <chakra.p color={"gray"} textAlign="center" fontSize={{ lg: "12px", base: "10px"}}>
        * Based on internal study using survey data from general Blinkist
        customers
      </chakra.p>
    </Container>
  )
}
