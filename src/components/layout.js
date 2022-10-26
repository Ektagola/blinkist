import { Box } from "@chakra-ui/react"
import React from "react"
import Footer from "./footer/footer"
import Navbar from "./navbar/navbar"

export default function Layout({ children }) {
  return (
    <Box bgColor={'white'} fontFamily="sans-serif">
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}
