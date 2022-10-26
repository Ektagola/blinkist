import {
  Box,
  Container,
  chakra,
  SimpleGrid,
  Stack,
  Image,
} from "@chakra-ui/react"
import React from "react"

export default function Brands() {
  return (
    <Box maxW={"full"} bgColor="#f1f6f4" py={14}>
      <Container maxW={{ lg: "5xl", sm: "3xl"}}>
        <chakra.h1 fontWeight={"bold"} textAlign="center" fontSize={{ lg: "2xl", sm: "xl", base: "22px"}}>
          Join the 1,500+ organizations growing with Blinkist
        </chakra.h1>
        <SimpleGrid px={10} columns={{ lg: 4, md: 4, sm: 2, base: 1 }} spacing="0" py={10}>
          <Stack pt={5} px={{ base: 5}}>
            <Image w={{ lg: '160px', sm: "100px", base: "150px"}} src="https://www.blinkist.com/packs/media/pages/business/images/companies-logos/tiktok-96a42d43058cc3e6d25c3a1a69f97d7a.svg" />
          </Stack>
          <Stack pt={5} px={{ base: 5}}>
            <Image w={{ lg: '160px', sm: "100px", base: "150px"}} src="https://www.blinkist.com/packs/media/pages/business/images/companies-logos/mhp-564fb61711c727a194760c5acf967b37.svg" />
          </Stack>
          <Stack pt={5} px={{ base: 5}}>
            <Image w={{ lg: '160px', sm: "100px", base: "150px"}} src="https://www.blinkist.com/packs/media/pages/business/images/companies-logos/booking-03e21218284c64f8b162bc80c3497822.svg" />
          </Stack>
          <Stack pt={5} px={{ base: 5}}>
            <Image w={{ lg: '160px', sm: "100px", base: "150px"}} src="https://www.blinkist.com/packs/media/pages/business/images/companies-logos/babbel-811e8a7581a7fc6eafa7261250c720a7.svg" />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
