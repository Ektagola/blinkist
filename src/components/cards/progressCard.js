import React from "react"
import { Flex, chakra, Stack, Box } from "@chakra-ui/react"

export default function ProgressCard(props) {
  const { number, text, icon } = props
  return (
    <Stack px={10} py={"5"} alignItems={"center"}>
      <Flex
        bgColor={"#054966"}
        color="#F6C812"
        fontWeight={"bold"}
        fontSize={{ lg: "5xl", sm: "4xl", base: "3xl"}}
        width={{ lg: "200px", sm: "150px", base: "100px"}}
        height={{ lg: "200px", sm: "150px", base: "100px"}}
        justifyContent={"center"}
        borderRadius={"50%"}
        p={{ lg: 16, sm: 10, base: 6}}
      >
        {number}
      </Flex>
      <chakra.span
        py={5}
        fontSize={"xl"}
        textAlign="center"
        color={"blackAlpha.800"}
      >
        {text}
      </chakra.span>
      <Box color={'#0365f2'} fontSize="12px" justifyItems={"center"}>
        <Flex>{icon}{icon}{icon}{icon}{icon}</Flex>
      </Box>
    </Stack>
  )
}
