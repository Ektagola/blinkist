import React from "react"
import { Box, Heading, Link, List, ListItem } from "@chakra-ui/react"

export default function Widget ({ title, items }) {
  return (
    <Box>
      <Heading
        as="h3"
        fontSize={{ lg: "18px", sm: "17px"}}
        fontWeight={500}
        lineHeight={1.68}
        letterSpacing="heading"
        px={{sm: 2, lg: 5}}
        textAlign={{ sm: "start", base: "start"}}
      >
        {title}
      </Heading>
      <List listStyle="none" m="16px 0 0" padding={0}>
        {items.map(({ path, label}, i) => (
          <ListItem
            key={i}
            display="flex"
            alignItems="start"
          >
            <Link
              px= {{sm: 3, lg: 5}}
              fontSize={{ lg: "15px", sm: "14px"}}
              color="#929194"
              textDecoration="none"
              lineHeight={1.9}
              href={path}
              key={i}              
              variant="footer"
              _hover={{
                color: "blue",
                textDecoration:"none"
              }}
            >{label}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

