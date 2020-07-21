import React from "react"

import SEO from "../components/seo"
import LayoutComponent from "../components/LayoutComponent"
import AboutComponent from "../components/AboutComponent"

const AboutPage = () => (
  <LayoutComponent>
    <SEO title="Entroprise - About" />
    <AboutComponent />
  </LayoutComponent>
)

export default AboutPage
