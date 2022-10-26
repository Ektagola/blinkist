import React from "react"
import Layout from "../components/layout"
import Brands from "../components/brands"
import Testimonial from "../sections/plan/testimonial"
import GetInTouch from "../sections/getInTouch"

export default function Demo() {
  return (
    <Layout>
      <GetInTouch />
      <Brands />
      <Testimonial />
    </Layout>
  )
}
