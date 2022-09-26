import styled from 'styled-components'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button 
} from '@mui/material'


export const AppBarStyled = styled(AppBar)`
  height: 60px;
  display: flex;
`

export const ToolBarStyled = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center
`

export const TypographyText = styled(Typography)`
  font-weight: bold;
`

export const BoxStyled = styled(Box)`
  display: "flex"; 
  margin-left: 10px; 
  margin-right: 10px;
`