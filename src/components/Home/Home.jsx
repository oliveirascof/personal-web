import * as React from 'react'
import { useState } from "react";
import styled from "styled-components";
import { Typography, Button, Avatar, Box, Modal } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';



const MyAvatar = () => {
  return (
    <Avatar 
      alt="myLogo" 
      src="/src/assets/images/Logo/myLogo.png" 
      sx={{ width: "auto", height: "auto"}}
    />
  )
}

const Home = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }
  const handleDownload = () => { alert("Download") }

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

        <Button 
          onClick={ () => handleOpen() } 
          size="large" 
          sx={{marginTop: 5}} 
          variant="contained" >My Resume
        </Button>

        <MyModal open={ open } onClose={ () => handleClose() }>
            <MyBoxModal>
              <Box>
                
              </Box>
              <Typography variant="h5">
                Sou Felipe Oliveira
              </Typography>
              <Typography>
                Apaixonado por tecnologia e 5+ anos 
                de experiência profissional e sólidos 
                conhecimentos em TI, atualmente estudo 
                desenvolvimento de software e estou 
                focado na experiência do usuário.
              </Typography>
              <Typography>
                Linguagens: JS, Python
                Frameworks: Bootstrap, Next
                Libs: React, React Native 
                Design: Figma, MarvelApp 
                DataBase: SQL Server, Oracle SQL 
                Controle de versões: Git, Vercel
              </Typography>
              <ButtonBoxModal>
                <MyButtonBoxModal 
                  onClick={ () => handleDownload() }
                  startIcon={ <FileDownloadIcon /> } 
                  size="medium" 
                  variant="contained" > my resume
                </MyButtonBoxModal>
              </ButtonBoxModal>
              
            </MyBoxModal>
        </MyModal>

        </Box>
      </Div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
	justify-content: center;
  margin-top: 60px;
`
const Div = styled.div`
  display: flex;
  align-items: center;
	justify-content: flex-start;
  flex: 1;
  margin: 3rem;
`
const GradientTitle = styled.h1`
  font-size: 5rem;
  background: linear-gradient( to right,#fcc133,#334fff);
  display: flex;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`
const MyBoxModal = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 600px;
  height: 400px;
  position: absolute;
  border-radius: 10px;
  border: 2px solid #000;
  flex-direction: column;
  padding: 30px;

`
const MyModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const ButtonBoxModal = styled(Box)`
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-direction: row;
`

const MyButtonBoxModal = styled(Button)`
  margin: 20px;
`

export default Home

