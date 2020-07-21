import React from "react"

import LayoutComponent from "../components/LayoutComponent"
import SEO from "../components/seo"

import { Typography } from "@material-ui/core"

const NotFoundPage = () => (
  <LayoutComponent>
    <SEO title="404: Not found" />
    <Typography variant="h4">NOT FOUND</Typography>
    <Typography variant="body1">
      You just hit a route that does not exist... the sadness.
    </Typography>
  </LayoutComponent>
)

export default NotFoundPage
