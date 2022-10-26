import React from "react"
import FeatureCard from "../../components/cards/featureCard"
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Image,
} from "@chakra-ui/react"

export default function FeatureCards() {
  return (
    <Box
      bg="#f1f6f4"
      p={{ lg: 20, sm: 10, base: 7}}
      pb={0}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        maxW="5xl"
        mx="auto"
        px={{
          base: 4,
          lg: 8,
        }}
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <chakra.p
            fontSize={{
              base: "2xl",
              sm: "3xl",
            }}
            textAlign="center"
            fontWeight="bold"
          >
            Features in your plan
          </chakra.p>
        </Box>

        <Box mt={{ lg: 10, base: 5}}>
          <SimpleGrid
            spacing={{
              base: 10,
              md: 5,
            }}
            columns={{ lg: 3, md: 1, sm: 1, base: 1 }}
          >
            <FeatureCard title="Blinkist Premium access">
              Access our entire library of 5,500+ nonfiction Blinks and Shorcast
              titles on web and mobile, available in audio and text.
            </FeatureCard>

            <FeatureCard title="Engagement resources">
              Receive customizable and easy-to-use marketing assets to promote
              Blinkist and drive ongoing engagement in your team.
            </FeatureCard>

            <FeatureCard title="Partner Portal for managing your team">
              Quickly see who’s on your team and how many seats you have
              left—and easily invite or remove people.
            </FeatureCard>

            <FeatureCard title="User analytics dashboard">
              Unlock valuable insights into what and how your team learns—so you
              can make data-led decisions.
            </FeatureCard>

            <FeatureCard title="Dedicated customer success partner">
              Reliable and dedicated account managers are available to support
              your learning strategy, every step of the way.
            </FeatureCard>

            <FeatureCard title="Curated learning paths">
              Work with your account manager to create bespoke reading lists for
              your team, specific to the current learning goals of your
              organization.
            </FeatureCard>

            <FeatureCard title="Customizable home screen">
              Adapt the home screen to show your organization’s recommended
              titles, preferred learning paths, and topics.
            </FeatureCard>

            <FeatureCard title="Single sign-on">
              Enable your team to quickly, easily, and securely log in without
              having to create an account.
            </FeatureCard>

            <FeatureCard title="LMS integration">
              Help drive engagement by surfacing relevant Blinkist content in
              your existing learning management system (LMS) platform.
            </FeatureCard>
          </SimpleGrid>
        </Box>
      </Container>
      <Image mt={{ lg: 10, sm: 8, base: 5}} src="https://www.blinkist.com/packs/media/pages/business/images/full-image/full-image-cd788fc33bd5c6aade08be060718cbe4.jpg" />
    </Box>
  )
}
