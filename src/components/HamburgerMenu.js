import React from 'react'
import styled from 'styled-components'

const HamburgerMenuStyled= styled.div`
  text-align: left;
`

const HamburgerMenu= ()=>{

  return(
    <HamburgerMenuStyled>
      <img width="25" src='./images/menu-icon.svg'/>
    </HamburgerMenuStyled>
  )
}
export default HamburgerMenu