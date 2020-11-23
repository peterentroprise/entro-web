import React, { useRef, useState } from "react"

import IframeResizer from "iframe-resizer-react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  frame: {},
}))
const ClientComponent = () => {
  const classes = useStyles()

  const ref = useRef(null)

  return (
    <div className={classes.frame}>
      <IframeResizer
        log
        forwardRef={ref}
        heightCalculationMethod="lowestElement"
        checkOrigin="false"
        inPageLinks
        frameBorder="none"
        src="https://entro-client-e7sfctcgkq-uc.a.run.app/"
        // src="http://localhost:3000/"
        style={{
          position: "fixed",
          width: "1px",
          top: "0px",
          right: "0px",
          minWidth: "100%",
          maxHeight: "100%",
          zIndex: 2147483639,
        }}
      />
    </div>
  )
}

export default ClientComponent
