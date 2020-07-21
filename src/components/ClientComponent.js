import React from "react"

import Iframe from "react-iframe"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  frame: {
    height: "100vh",
  },
}))
const ClientComponent = () => {
  const classes = useStyles()

  return (
    <div className={classes.frame}>
      <Iframe
        // url="https://app.entroprise.com"
        url="http://127.0.0.1:3000"
        width="100%"
        height="100%"
        id="entroprise-app-id"
        className="entroprise-app"
        display="initial"
        frameBorder="0"
      />
    </div>
  )
}

export default ClientComponent
