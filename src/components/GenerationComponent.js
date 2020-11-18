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
const IndexComponent = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(false)

  const [generatedText, setGeneratedText] = useState("")

  const [inputText, setInputText] = useState("Ideas involving education and virtual reality\n\n1. Virtual Mars\nStudents get to explore Mars via virtual reality and go on missions to collect and catalog what they see.\n\n2.")

  const [inputMaxLength, setInputMaxLength] = useState(64)

  const [inputMinLength, setInputMinLength] = useState(10)

  const handleChangeInputText = event => {
    setInputText(event.target.value)
  }

  const handleChangeInputMaxLength = event => {
    setInputMaxLength(event.target.value)
  }

  const handleChangeInputMinLength = event => {
    setInputMinLength(event.target.value)
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
      .post("/davinci/", {
        prompt: inputText,
        max_tokens: inputMaxLength,
        temperature: 0.7,
        top_p: 1
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
            title="Text Generation"
            subheader="ML Model: open-ai/GPT3: davinci"
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

            <Box mt={2} mb={1}>
              {" "}
              <TextField
                multiline
                rowsMax={4}
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
                    Generate Text
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

export default IndexComponent
