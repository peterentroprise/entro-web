import React, { useState } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
}))
const IndexComponent = () => {
  const classes = useStyles()

  const [generatedText, setGeneratedText] = useState("");

  const restClient = axios.create({
    baseURL: "https://text-gen-e7sfctcgkq-uc.a.run.app",
    headers: {
      "Content-type": "application/json",
    },
  });

  const generateText = () => {
    restClient.post('/generate', {
      text: 'Callum is',
      seed: 32,
      max_length: 100,
      num_return_sequences: 1
    })
    .then(function (response) {
      console.log(response);
      setGeneratedText(response.generated_text)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Container maxWidth="sm">
      <Box mt={2} mb={3}>
        <Card variant="outlined">
          <CardContent>
            <Button onClick={generateText} color="primary" variant="contained">Generate Future</Button>
            <Typography>
             {generatedText}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default IndexComponent
