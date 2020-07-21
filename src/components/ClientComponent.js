import React from "react"

import Iframe from "react-iframe"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  frame: {
    zIndex: 3000,
    position: "fixed",
    top: 0,
    width: "100%",
    height: "100%",
    // left: "50%",
    // transform: "translateX(-50%)",
  },
}))
const ClientComponent = () => {
  const classes = useStyles()

  return (
    <div className={classes.frame}>
      <Iframe
        url="https://app.entroprise.com"
        // url="http://127.0.0.1:3000"
        height="100%"
        width="100%"
        id="entroprise-app-id"
        className="entroprise-app"
        display="initial"
        frameBorder="0"
      />
    </div>
  )
}

export default ClientComponent
