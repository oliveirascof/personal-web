import React from "react";
import styled from "styled-components";
import { Typography, Button, Avatar, Box } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Div = styled.div`
  display: flex;
  align-items: center;
	justify-content: center;
  margin: 10rem;

`
const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Gradient = styled.h1`
  font-size: 5rem;
  
  /* Set the background of
  the text  */
  background:
      linear-gradient(to right,
          #fcc133,
          #334efc);
  display: inline-block;

  /* Clip the background upto
  the text  */
  -webkit-background-clip: text;
  background-clip: text;

  /* Set the color of the text
  to transparent  */
  color: transparent;
`

const Presentation = () => {
  return (
    <View>

      <Div>
        <Avatar sx={{width: "auto", height: "auto"}} alt="myLogo" src="/src/assets/images/Logo/myLogo.webp"/>
      </Div>

      <Div >
        <Box >

          
            <Typography variant="h1" color="white" textAlign={"left"} fontWeight={"bold"} >
            <Gradient>
              Wellcome here!
            </Gradient>
            </Typography>
          
          

          <Typography sx={{marginTop: 2}} textAlign={"left"} variant="h5" color="white" >
            Always learning
          </Typography>

          <Typography>
            <Button 
              startIcon={ <FileDownloadIcon /> } 
              size="large" 
              sx={{marginTop: 5}} 
              variant="contained" >My Resume</Button>
          </Typography>

        </Box>
      </Div>

    </View>
  )
}

export default Presentation

