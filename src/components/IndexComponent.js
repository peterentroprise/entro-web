import React, { useState } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardContent,
  Container,
  CardHeader,
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
}))
const IndexComponent = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(false);

  const [generatedText, setGeneratedText] = useState("");

  const [inputText, setInputText] = useState('Entroprise is a company that');

  const [inputMaxLength, setInputMaxLength] = useState(100);

  const [inputSeed, setInputSeed] = useState(32);

  const handleChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleChangeInputMaxLength = (event) => {
    setInputMaxLength(event.target.value);
  };

  const handleChangeInputSeed = (event) => {
    setInputSeed(event.target.value);
  };

  const restClient = axios.create({
    baseURL: "https://text-gen-e7sfctcgkq-uc.a.run.app/",
    headers: {
      "Content-type": "application/json",
      'Access-Control-Allow-Origin': '*',
    },
  });

  const generateText = () => {
    setIsLoading(true)
    setGeneratedText("")
    restClient.post('/generate/', {
      text: inputText,
      seed: inputSeed,
      max_length: inputMaxLength,
      num_return_sequences: 1
    })
    .then(function (response) {
      console.log(response);
      setIsLoading(false)
      setGeneratedText(response.data[0].generated_text)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Container maxWidth="sm">
       <Box mt={2} mb={3}>
        <Card variant="outlined">
        <CardHeader
        title="Text Generation"
        subheader="ML Model: gpt2"
      />
          <CardContent>
          <Box mt={2} mb={1}>
          <TextField fullWidth label="Max Length" value={inputMaxLength}
          onChange={handleChangeInputMaxLength} />
          </Box>
          <Box mt={2} mb={1}>
          <TextField fullWidth label="Randomization Seed" value={inputSeed}
          onChange={handleChangeInputSeed} />
          </Box>
          
          <Box mt={2} mb={1}> <TextField fullWidth label="Input Text" value={inputText}
          onChange={handleChangeInputText} /></Box>
          <Box mt={2} mb={1}>  <Button onClick={generateText} color="primary" variant="contained">Generate Text</Button></Box>
          {isLoading && <CircularProgress />}
          </CardContent>
        </Card>
      </Box>
      
      {generatedText &&  <Box mt={2} mb={3}>
        <Card variant="outlined">
          <CardContent>
            
            <Typography>
             {generatedText}
            </Typography>
          </CardContent>
        </Card>
      </Box>}
     
    </Container>
  )
}

export default IndexComponent
