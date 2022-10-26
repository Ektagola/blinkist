import React from "react"
import { Flex, Box, chakra } from "@chakra-ui/react"

export default function FeatureCard(props) {
  return (
    <Flex>
      <Box my={5}>
        <chakra.span
          fontSize="lg"
          fontWeight="bold"
          lineHeight="6"
          color={'#0B4464'}
        >
          {props.title}
        </chakra.span>
        <chakra.p
          mt={3}
          color="blackAlpha.700"
        >
          {props.children}
        </chakra.p>
      </Box>
    </Flex>
  )
}
