import React from "react"

import LayoutComponent from "../components/LayoutComponent"
import SEO from "../components/seo"
import ReportsComponent from "../components/ReportsComponent"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  root: {},
}))

const ReportsPage = () => {
  const classes = useStyles()

  return (
    <LayoutComponent>
      <SEO title="Entroprise" />
      <ReportsComponent />
    </LayoutComponent>
  )
}

export default ReportsPage
