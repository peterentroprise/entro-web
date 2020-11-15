import React from "react"

import LayoutComponent from "../components/LayoutComponent"
import SEO from "../components/seo"
import GenerationComponent from "../components/GenerationComponent"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <LayoutComponent>
      <SEO title="Entroprise" />
      <GenerationComponent />
    </LayoutComponent>
  )
}

export default IndexPage
