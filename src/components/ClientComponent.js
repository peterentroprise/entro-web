import React, { useRef, useState } from "react"

import IframeResizer from "iframe-resizer-react"

import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import FilterHdrOutlinedIcon from "@material-ui/icons/FilterHdrOutlined"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(0),
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const ClientComponent = () => {
  const classes = useStyles()

  const ref = useRef(null)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.frame}>
      {open && (
        <Fab
          className={classes.fab}
          variant="extended"
          aria-label="add"
          onClick={handleClick}
        >
          <CloseIcon className={classes.extendedIcon} />
          Close
        </Fab>
      )}
      {!open && (
        <Fab
          className={classes.fab}
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={handleClick}
        >
          <FilterHdrOutlinedIcon className={classes.extendedIcon} />
          Take Me There
        </Fab>
      )}
      {open && (
        <iframe
          inPageLinks
          frameBorder="none"
          src="https://entro-client-e7sfctcgkq-uc.a.run.app/"
          src="http://localhost:3000/"
          style={{
            position: "fixed",
            width: "384px",
            height: "640px",
            bottom: "80px",
            right: "0px",
          }}
        />
      )}
    </div>
  )
}

export default ClientComponent
