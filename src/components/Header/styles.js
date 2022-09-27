import styled from 'styled-components'
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button,
} from '@mui/material'


export const AppBarStyled = styled(AppBar)`
  height: auto;
  display: flex;
`
export const ToolBarStyled = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
export const TitleStyle = styled.h1`
  font-style: italic;
  font-size: x-large;
  text-shadow: black 0 2px;
  padding-left: 10px;
  padding-right: 10px;
`

export const BoxStyled = styled(Box)`
  display: flex; 
  align-items: center;
  justify-content: center;
`

export const ButtonMenu = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
  &&:hover {
    background-color: #0000ff;
  }
`