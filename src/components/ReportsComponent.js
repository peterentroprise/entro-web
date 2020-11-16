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
const PointsComponent = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(false)

  const [generatedText, setGeneratedText] = useState("")

  const [inputText, setInputText] = useState("Read this customer response then answer the following questions:\n\n\"\"\"\nOn March 22 I bought a copy of your game World War Mice. While I enjoyed the beginning of the game I thought the later levels weren't that exciting and the game play was either too easy or impossible. I also thought the graphics were really subpar compared to what was in the video game trailer. I think you can do better and fix it with an update.\n\"\"\"\n\nQuestions:\n1. What product was this about?\n2. Did the customer have complaints?\n3. What as their main comment about the product?\n4. If they were unsatisfied, what can we do to fix this problem?\n5. Was the customer polite?\n\nAnswers:\n1.")

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
      .post("/curie/report", {
        text: inputText,
        max_tokens: inputMaxLength,
        temperature: 0.2,
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
            title="Reports Generation"
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
                    Generate Report
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
