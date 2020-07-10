import React from "react"
import { Link } from "gatsby"
import Iframe from 'react-iframe'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Entroprise" />
    <Iframe url="https://entroprise.app"
        width="100%"
        height="450px"
        id="entroprise-app-id"
        className="entroprise-app"
        display="initial"
        position="relative"
        frameBorder="0"
    />
    <Link to="/about/">About</Link> <br />
  </Layout>
)

export default IndexPage
