import React, { useState } from "react";
import axios from "axios";
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';

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
  CircularProgress
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))
const IndexComponent = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(false);

  const [generatedText, setGeneratedText] = useState("");

  const [inputText, setInputText] = useState('Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24–10 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levis Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the golden anniversary with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as Super Bowl L), so that the logo could prominently feature the Arabic numerals 50.');

  const [inputMaxLength, setInputMaxLength] = useState(100);

  const [inputMinLength, setInputMinLength] = useState(10);

  const handleChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleChangeInputMaxLength = (event) => {
    setInputMaxLength(event.target.value);
  };

  const handleChangeInputMinLength = (event) => {
    setInputMinLength(event.target.value);
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
    restClient.post('/sumarize/', {
      text: inputText,
      min_length: inputMinLength,
      max_length: inputMaxLength,
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
      <Box mt={3} mb={3}>
        <Card variant="outlined">
          <CardContent>
            
            <Typography variant="caption" display="block">
             Note: Application while take a while to initialize on first load, due to cold startup on Google Cloud Run.
            </Typography>
          </CardContent>
        </Card>
      </Box>
       <Box mt={2} mb={3}>
        <Card variant="outlined">
        <CardHeader
        title="Text Sumarization"
        subheader="ML Model: facebook-bart-large-cnn"
      />
          <CardContent>
          <Box mt={1} mb={1}>
          <TextField fullWidth label="Min Length" value={inputMinLength}
          onChange={handleChangeInputMinLength} />
          </Box>
          <Box mt={2} mb={1}>
          <TextField fullWidth label="Max Length" value={inputMaxLength}
          onChange={handleChangeInputMaxLength} />
          </Box>
  
          
          <Box mt={2} mb={1}> <TextField multiline rowsMax={4} fullWidth label="Input Text" value={inputText}
          onChange={handleChangeInputText} /></Box>
          <Box mt={2} mb={1}> 
          <div className={classes.root}>
          <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={isLoading}
          onClick={generateText}
        >
          Sumarize Text
        </Button>
        {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
      </div>
          </Box>
          </CardContent>
        </Card>
      </Box>
     
      {generatedText &&       <Box mt={2} mb={3}>
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
