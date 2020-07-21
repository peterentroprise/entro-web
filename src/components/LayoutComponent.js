import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import Header from "./header"
import ClientComponent from "./ClientComponent"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#219a49",
      },
      secondary: {
        main: "#219a49",
      },
      error: {
        main: "#219a49",
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
      overline: {
        textTransform: "none",
      },
      fontFamily: [
        "Muli",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  })

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ClientComponent />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
