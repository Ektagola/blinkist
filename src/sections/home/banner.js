import React from "react"
import {
  Box,
  Icon,
  chakra,
  Image,
  useColorModeValue,
  Button,
  Container,
} from "@chakra-ui/react"
import { Link } from "gatsby"

export default function Banner() {
  const bg = useColorModeValue("#0B4464")
  return (
    <Box
      pos={{ lg: "relative", sm: "none"}}
      overflow="hidden"
      bg={bg}
      color="white"
      height={{ lg:"85vh", sm: "full"}}
    >
      <Box maxW="7xl" ml={{ lg: 20, sm: 5, base: 3}}>
        <Box
          pos={{ lg: "relative", sm: "none"}}
          pb={{
            base: 8,
            sm: 16,
            md: 20,
            lg: 28,
            xl: 32,
          }}
          maxW={{
            lg: "2xl",
          }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{
              base: "none",
              lg: "block",
            }}
            position={{ lg: "absolute", sm: "none"}}
            right={0}
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            borderRadius={"25%"}
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{
              base: "7xl",
            }}
            px={{
              base: 2,
              sm: 6,
              lg: 8,
            }}
            mt={{
              base: 10,
              sm: 12,
              md: 16,
              lg: 16,
            }}
          >
            <Container
              maxW={{lg: "3xl", sm: "xl"}}
              textAlign={{
                sm: "center",
                lg: "left",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{
                  base: "3xl",
                  sm: "3xl",
                  md: "5xl",
                }}
                lineHeight="short"
                fontWeight="bold"
              >
                The secret to innovative teams? They’re always learning.
              </chakra.h1>
              <chakra.p
                mt={{
                  base: 3,
                  sm: 5,
                  md: 5,
                }}
                fontSize={{
                  sm: "md",
                  md: "xl",
                }}
                maxW={{
                  sm: "xl",
                }}
                mx={{
                  sm: "auto",
                  lg: 0,
                }}
              >
                Turn ordinary moments into extraordinary learning opportunities
                with the world's #1 microlearning app!
              </chakra.p>
              <Button
                w={"300px"}
                color={"#14394E"}
                alignItems="center"
                justifyContent="center"
                mt={10}
                fontSize={{
                  base: "md",
                  md: "lg",
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
                <Link to="/plan">Get started</Link>
              </Button>
            </Container>
          </Box>
        </Box>
      </Box>
      <Box
        position={{
          lg: "absolute",
        }}
        top={{
          lg: 0,
        }}
        bottom={{
          lg: 0,
        }}
        right={{
          lg: 0,
        }}
        w={{
          lg: "50%",
        }}
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src="https://www.blinkist.com/packs/media/pages/business/images/hero/hero-8a60692788c30f076704c7fbbce3d231.jpg"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  )
}
