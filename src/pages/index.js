import React from "react"
import Layout from '../components/layout'
import Banner from "../sections/home/banner"
import Seo from '../components/seo'
import Brands from "../components/brands"
import Testimonial from "../sections/home/testimonial"
import Progress from "../sections/home/progress"
import Features from "../sections/home/features"
import OtherFeatures from "../sections/home/otherFeatures"

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Banner/>
      <Brands/>
      <OtherFeatures/>
      <Features/>
      <Progress/>
      <Testimonial/>
    </Layout>
  )
}
