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
  TextField,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {},
}))
const IndexComponent = () => {
  const classes = useStyles()

  const [generatedText, setGeneratedText] = useState("");

  const [inputText, setInputText] = useState('Callum is');

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


  const generateText = async () => {
    const response = fetch('https://text-gen-e7sfctcgkq-uc.a.run.app/generate', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        text: inputText,
        seed: inputSeed,
        max_length: inputMaxLength,
        num_return_sequences: 1
      }) // body data type must match "Content-Type" header
    });
    console.log(response)

    // setGeneratedText(response.json().data[0].generated_text)
}

  return (
    <Container maxWidth="sm">
       <Box mt={2} mb={3}>
        <Card variant="outlined">
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
          <Box mt={2} mb={1}>  <Button onClick={generateText} color="primary" variant="contained">Generate Future</Button></Box>
        
          </CardContent>
        </Card>
      </Box>
      <Box mt={2} mb={3}>
        <Card variant="outlined">
          <CardContent>
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
