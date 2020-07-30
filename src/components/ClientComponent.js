import React, { useRef, useState } from "react"

import IframeResizer from "iframe-resizer-react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  frame: {
    zIndex: 2147483639,
    position: "fixed",
    top: 0,
    left: 0,
  },
}))
const ClientComponent = () => {
  const classes = useStyles()

  const ref = useRef(null)

  return (
    <div className={classes.frame}>
      <IframeResizer
        forwardRef={ref}
        heightCalculationMethod="lowestElement"
        inPageLinks
        frameBorder="none"
        log
        src="https://app.entroprise.com"
        // width="100%"
        style={{
          position: "fixed",
          width: "1px",
          minWidth: "100%",
          zIndex: 2147483639,
        }}
      />
    </div>
  )
}

export default ClientComponent
