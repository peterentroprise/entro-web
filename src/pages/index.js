import React from "react"

import LayoutComponent from "../components/LayoutComponent"
import SEO from "../components/seo"
import IndexComponent from "../components/IndexComponent"
import ClientComponent from "../components/ClientComponent"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <LayoutComponent>
      <SEO title="Entroprise" />
      <IndexComponent />
      <ClientComponent />
    </LayoutComponent>
  )
}

export default IndexPage
