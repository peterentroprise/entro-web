import React, { useState } from "react"
import PropTypes from "prop-types"
import { navigate, Link } from "gatsby"

import { fade, makeStyles } from "@material-ui/core/styles"
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  AppBar,
  Toolbar,
  Drawer,
  useScrollTrigger,
  Slide,
  IconButton,
  Chip,
  Avatar,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
} from "@material-ui/core"
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 600,
  },
  chip: {
    color: theme.palette.text.primary,
    fontWeight: 500,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: theme.palette.text.primary,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  appBarPaper: {
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {},
  grow: {
    flexGrow: 1,
  },
  searchbutton: {
    width: 300,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: 340,
    },
  },
  autoComplete: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}))

function Scroll(props) {
  const { children } = props
  const classes = useStyles()

  const trigger1 = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const trigger2 = useScrollTrigger({})

  return (
    <Slide appear={false} direction="down" in={!trigger2}>
      {React.cloneElement(children, {
        elevation: trigger1 ? 4 : 0,
        className: trigger1 ? classes.appBarPaper : classes.appBar,
      })}
    </Slide>
  )
}

const Header = ({ siteTitle, props }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const [status, setStatus] = useState("Available")

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleChange = event => {
    setStatus(event.target.value)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    console.info("You clicked the delete icon.")
  }

  const open = Boolean(anchorEl)

  return (
    <header>
      <Scroll {...props}>
        <AppBar className={classes.appBar} positon="sticky" color="inherit">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="home"
              onClick={() => navigate("/")}
            >
              <HomeOutlinedIcon />
            </IconButton>
            <div className={classes.grow} />
            <IconButton
              onClick={() => navigate("/about")}
              aria-label="about"
              edge="end"
              color="inherit"
            >
              <HelpOutlineOutlinedIcon />
            </IconButton>
          </Toolbar>
          <Drawer anchor="top" open={open} onClose={handleClose}>
            <Container maxWidth="sm">
              <Box mt={2} mb={1}>
                <Card variant="outlined">
                  <CardHeader title="Search" />
                  <CardContent>
                    <Typography>Search Drawer</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Container>
          </Drawer>
        </AppBar>
      </Scroll>
      <Toolbar className={classes.toolbar}></Toolbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
