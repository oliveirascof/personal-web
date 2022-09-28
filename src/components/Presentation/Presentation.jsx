import React from "react";
import styled from "styled-components";
import { Typography, Button, Avatar, Box } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: center;
  margin: 40px 100px 40px 100px ;
`
const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Presentation = () => {
  return (
    <View>

      <Div>
        <Avatar sx={{width: "auto", height: "auto"}} alt="myLogo" src="/src/assets/images/Logo/myLogo.png"/>
      </Div>

      <Div >
        <Box >

          <Typography variant="h2" color="white" textAlign={"left"} fontWeight={"bold"} >
            Wellcome here!
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

