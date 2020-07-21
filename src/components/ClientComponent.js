import React, { useRef, useState } from "react"

import IframeResizer from "iframe-resizer-react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  frame: {
    zIndex: 2147483639,
    position: "fixed",
    top: 8,
    left: 11,
    // left: 24,
    // width: "100px",
    // height: "100px",
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
        src="http://127.0.0.1:3000/"
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
