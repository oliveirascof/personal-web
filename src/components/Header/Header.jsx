import React from 'react'
import { Button } from '@mui/material'
import { 
  AppBarStyled, 
  ToolBarStyled, 
  TypographyText, 
  BoxStyled } from './style'

const Header = () => {
  return (
      <AppBarStyled position='absolute'>
        <ToolBarStyled >

          <TypographyText > 
            Felipe Portifolio
          </TypographyText>

          <BoxStyled >
            <Button variant="contained">My projects</Button>
            <Button variant="contained">Social networks</Button>
            <Button variant="contained">Contact me</Button>
          </BoxStyled>

        </ToolBarStyled>
      </AppBarStyled>
  )
}

export default Header