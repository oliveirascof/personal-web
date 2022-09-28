import React from 'react'
import { Avatar } from "@mui/material"
import { 
  AppBarStyled, 
  ToolBarStyled, 
  TitleStyle, 
  ButtonMenu,
  BoxStyled, 
} from './styles'

const Header = () => {
  return (
      <AppBarStyled position='static'>
        <ToolBarStyled >

          <BoxStyled >
            <Avatar 
              alt="myLogo" 
              src="/src/assets/images/Logo/myLogo.png"/>
            <TitleStyle > 
              Felipe's Portifolio
            </TitleStyle>
          </BoxStyled>

          <BoxStyled >
            <ButtonMenu variant="contained" size="large" color="info">My projects</ButtonMenu>
            <ButtonMenu variant="contained" size="large" color="info">Social networks</ButtonMenu>
            <ButtonMenu variant="contained" size="large" color="info">Contact</ButtonMenu>
            <ButtonMenu variant="contained" size="large" color="info">About</ButtonMenu>
          </BoxStyled>

        </ToolBarStyled>
      </AppBarStyled>
  )
}

export default Header