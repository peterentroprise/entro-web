import React from "react"

import LayoutComponent from "../components/LayoutComponent"
import SEO from "../components/seo"
import IndexComponent from "../components/IndexComponent"
import AboutComponent from "../components/AboutComponent"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <LayoutComponent>
      <SEO title="Entroprise" />
      {/* <AboutComponent /> */}
      <IndexComponent />
    </LayoutComponent>
  )
}

export default IndexPage
