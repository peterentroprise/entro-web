import React, { useState } from "react"
import axios from "axios"
import clsx from "clsx"
import { green } from "@material-ui/core/colors"

import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Box,
  Button,
  Slider,
  Grid,
  Typography,
  TextField,
  CircularProgress,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}))
const PointsComponent = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(false)

  const [generatedText, setGeneratedText] = useState("")

  const [inputText, setInputText] = useState(
    'What are the key points from this text:\n\n"""\nPluto (minor planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered.\n\nPluto was discovered by Clyde Tombaugh in 1930 and declared to be the ninth planet from the Sun. After 1992, its status as a planet was questioned following the discovery of several objects of similar size in the Kuiper belt. In 2005, Eris, a dwarf planet in the scattered disc which is 27% more massive than Pluto, was discovered. This led the International Astronomical Union (IAU) to define the term "planet" formally in 2006, during their 26th General Assembly. That definition excluded Pluto and reclassified it as a dwarf planet.\n\nPluto is the ninth-largest and tenth-most-massive known object directly orbiting the Sun. It is the largest known trans-Neptunian object by volume but is less massive than Eris. Like other Kuiper belt objects, Pluto is primarily made of ice and rock and is relatively small—one-sixth the mass of the Moon and one-third its volume. It has a moderately eccentric and inclined orbit during which it ranges from 30 to 49 astronomical units or AU (4.4–7.4 billion km) from the Sun. This means that Pluto periodically comes closer to the Sun than Neptune, but a stable orbital resonance with Neptune prevents them from colliding. Light from the Sun takes 5.5 hours to reach Pluto at its average distance (39.5 AU).\n\nPluto has five known moons: Charon (the largest, with a diameter just over half that of Pluto), Styx, Nix, Kerberos, and Hydra. Pluto and Charon are sometimes considered a binary system because the barycenter of their orbits does not lie within either body.\n"""\n\nThe eight key points are:\n\n1.'
  )

  const [inputMaxLength, setInputMaxLength] = useState(233)

  const [inputTemperature, setInputTemperature] = useState(0.5)

  const handleChangeInputText = event => {
    setInputText(event.target.value)
    console.log(event.target.value)
  }

  const handleChangeInputMaxLength = event => {
    setInputMaxLength(event.target.value)
  }

  const handleChangeInputTemperature = event => {
    setInputTemperature(
      event.target.value === "" ? "" : Number(event.target.value)
    )
  }

  const handleChangeInputTemperatureSlider = (event, newValue) => {
    setInputTemperature(newValue)
  }

  const handleBlur = () => {
    if (inputTemperature < 0) {
      setInputTemperature(0)
    } else if (inputTemperature > 1) {
      setInputTemperature(1)
    }
  }

  const restClient = axios.create({
    baseURL: "https://entro-open-ai-e7sfctcgkq-uc.a.run.app/",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })

  const generateText = () => {
    setIsLoading(true)
    setGeneratedText("")
    restClient
      .post("/curie/points", {
        prompt: inputText,
        max_tokens: inputMaxLength,
        temperature: inputTemperature,
        top_p: 1,
      })
      .then(function (response) {
        console.log(response)
        setIsLoading(false)
        setGeneratedText(response.data.choices[0].text)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Container maxWidth="sm">
      <Box mt={3} mb={3}>
        <Card variant="outlined">
          <CardHeader
            title="Bullet Point Generation"
            subheader="ML Model: open-ai/GPT3: curie"
          />
          <CardContent>
            <Box mt={2} mb={1}>
              <TextField
                fullWidth
                label="Max Tokens"
                value={inputMaxLength}
                onChange={handleChangeInputMaxLength}
              />
            </Box>
            <Grid container spacing={2} alignItems="center">
              {" "}
              <Grid item>
                {" "}
                <TextField
                  value={inputTemperature}
                  label="Temperature"
                  onChange={handleChangeInputTemperature}
                  onBlur={handleBlur}
                  inputProps={{
                    step: 0.01,
                    min: 0,
                    max: 1,
                    type: "number",
                  }}
                />
              </Grid>{" "}
              <Grid item xs>
                {" "}
                <Slider
                  marks
                  value={
                    typeof inputTemperature === "number" ? inputTemperature : 0
                  }
                  onChange={handleChangeInputTemperatureSlider}
                  step={0.01}
                  min={0}
                  max={1}
                />
              </Grid>
            </Grid>

            <Box mt={2} mb={1}>
              {" "}
              <TextField
                multiline
                rowsMax={12}
                fullWidth
                label="Input Text"
                value={inputText}
                onChange={handleChangeInputText}
              />
            </Box>
            <Box mt={2}>
              <div className={classes.root}>
                <div className={classes.wrapper}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    disabled={isLoading}
                    onClick={generateText}
                  >
                    Generate Bullet Points
                  </Button>
                  {isLoading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {generatedText && (
        <Box mt={2} mb={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography>{generatedText}</Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  )
}

export default PointsComponent
