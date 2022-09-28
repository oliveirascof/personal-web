import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Box, Button, Avatar } from '@mui/material'

function MyAvatar () {
  return <Avatar alt="myLogo" src="/src/assets/images/Logo/myLogo.webp"/>
}

const Header = () => {
  return (
    <StyleAppBar position='absolute' >
        <StyleTooBar >

          <StyleBox >
            <MyAvatar />
          </StyleBox>

          <StyleBox >
            <StyleButton variant="contained" size="large" color="info"> My projects </StyleButton>
            <StyleButton variant="contained" size="large" color="info"> Social networks </StyleButton>
            <StyleButton variant="contained" size="large" color="info"> Contact </StyleButton>
            <StyleButton variant="contained" size="large" color="info"> About </StyleButton>
          </StyleBox>

        </StyleTooBar>
      </StyleAppBar>
  )
}

const StyleAppBar = styled(AppBar)`
  display: flex;
`
const StyleTooBar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 1rem;

`
const StyleTitle = styled.h1`
  font-style: italic;
  font-size: x-large;
  text-shadow: black 0 2px;
  padding-left: 10px;
  padding-right: 10px;
`
const StyleBox = styled(Box)`
  display: flex; 
  align-items: center;
  justify-content: center;
`
const StyleButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
  &&:hover {
    background-color: #0000ff;
  }
`

export default Header