import React from "react"

import LayoutComponent from "../components/LayoutComponent"
import SEO from "../components/seo"
import AboutComponent from "../components/AboutComponent"

const AboutPage = () => (
  <LayoutComponent>
    <SEO title="Entroprise - About" />
    <AboutComponent />
  </LayoutComponent>
)

export default AboutPage
