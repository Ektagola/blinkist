import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Brands from "../components/brands"
import Features from "../sections/plan/features"
import Pricing from "../sections/plan/pricing"
import Testimonial from "../sections/plan/testimonial"
import Faq from "../sections/plan/faq"
import PriceShort from "../components/priceShort"

export default function Plan() {
  return (
    <Layout>
      <Seo />
      <Pricing />
      <Features/>
      <Testimonial/>
      <Brands/>
      <PriceShort/>
      <Faq/>
    </Layout>
  )
}
