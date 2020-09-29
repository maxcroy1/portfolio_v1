import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from '../components/about'
import Experience from '../components/experience'
import Work from '../components/work'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    {/* <Experience />
    <Work />
    <Contact /> */}
  </Layout>
)

export default IndexPage
