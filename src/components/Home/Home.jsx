import React from "react";
import styled from "styled-components";
import { Typography, Button, Avatar, Box } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';


function MyAvatar () {
  return (
    <Avatar 
      alt="myLogo" 
      src="/src/assets/images/Logo/myLogo.webp" 
      sx={{ width: "auto", height: "auto" }}
    />
  )
}

const Home = () => {
  return (
    <Container>

      <Div>
        <MyAvatar />
      </Div>

      <Div >
        <Box>
        <Typography variant="h1" color="white" textAlign={"left"} fontWeight={"bold"}>
          <GradientTitle>
            Wellcome here!
          </GradientTitle>
        </Typography>
        <Typography variant="h5" color="white" textAlign={"left"} sx={{marginTop: 2}}>
          I'm always learning
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

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
	justify-content: center;
`
const Div = styled.div`
  display: flex;
  align-items: center;
	justify-content: center;
  flex: 1;
  padding: 10rem 0rem 10rem 0rem;
`
const GradientTitle = styled.h1`
  font-size: 5rem;
  background: linear-gradient( to right,#fcc133,#334fff);
  display: flex;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

export default Home

