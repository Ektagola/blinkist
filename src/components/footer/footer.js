import React from "react"
import {
  Stack,
  HStack,
  Text,
  Icon,
  Divider,
  Container,
  SimpleGrid,
  chakra,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import Logo from "../../assets/logo.png"
import Widget from "./widget"
import { menuItems } from "./footerItems"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
import { GrLinkedinOption } from "react-icons/gr"
import { FaFacebookF } from "react-icons/fa"

export default function Footer() {
  return (
    <Box bgColor={"#f1f6f4"}>
      <Container maxW={"5xl"}>
        <Stack w="full" justify="space-between" py={10}>
          <Flex direction={{ lg: "row", sm: "column", base: "column" }}>
            <Box>
              <Image src={Logo} width="140px" />
              <chakra.h1
                pt={{ lg: 6, sm: 3, base: 3 }}
                color={"#0365f2"}
                fontSize={{ lg: "22px", sm: "18px" }}
                fontWeight={"bold"}
              >
                Powerful ideas
                <chakra.span display={"block"}>
                  —15 minutes at a time
                </chakra.span>
              </chakra.h1>
            </Box>
            <Box>
              <SimpleGrid
                columns={{ lg: 4, md: 2, sm: 1, base: 1 }}
                flex={1}
                justify="space-around"
                alignItems="start"
                fontSize={{
                  base: "12px",
                  md: "16px",
                }}
                textAlign={{
                  base: "center",
                  md: "left",
                }}
              >
                {menuItems.map(({ id, title, items }) => (
                  <Widget key={id} title={title} items={items} />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Stack>
        <Divider w="95%" mx="auto" h="1px" />
        <Stack
          justify="start"
          fontSize={{ lg: "15px", sm: "13px", base: "12px"}}
          p={{ lg: 10, sm: 5 }}
          color={"gray.500"}
          direction={{ lg: "row", sm: 'column', base: "column"}}
        >
          <Text textAlign="start">&copy; Blinkist 2022 </Text>
          <Link to="#">Sitemap</Link>
          <Link to="#">Legal Notice</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Privacy policies </Link>
          <HStack>
            <Link>
              <Icon
                p={1}
                w="30px"
                h="30px"
                rounded={"full"}
                color="white"
                bgColor={"gray"}
                as={FaFacebookF}
              />
            </Link>
            <Link>
              <Icon
                p={1}
                w="30px"
                h="30px"
                rounded={"full"}
                color="white"
                bgColor={"gray"}
                as={AiOutlineTwitter}
              />
            </Link>
            <Link>
              <Icon
                as={GrLinkedinOption}
                p={1}
                w="30px"
                h="30px"
                rounded={"full"}
                color="white"
                bgColor={"gray"}
              />
            </Link>
            <Link>
              <Icon
                p={1}
                w="30px"
                h="30px"
                rounded={"full"}
                color="white"
                bgColor={"gray"}
                as={AiOutlineInstagram}
              />
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}
