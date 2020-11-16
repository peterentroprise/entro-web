import React from "react"

import LayoutComponent from "../components/LayoutComponent"
import SEO from "../components/seo"
import PointsComponent from "../components/PointsComponent"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {},
}))

const PointsPage = () => {
  const classes = useStyles()

  return (
    <LayoutComponent>
      <SEO title="Entroprise" />
      <PointsComponent />
    </LayoutComponent>
  )
}

export default PointsPage
