import React from 'react'
import styled from 'styled-components'

const HeroStyled = styled.div`
  .title{
      margin: 0;
      color:#FFFAFA;
    }
    img{
      color: white;
    }
  p{
    color:#897A7A;
  }
`

const Main = ()=>{

  return(
    <HeroStyled>
      <img width="124" src='./images/innovation.svg' alt="rocket-icon"/>
      <h2 className="title">Estratosfera</h2>
      <p>El cine a tu casa, sencillo y sin</p>
        <p>complicaciones...</p>
      <h1 className="title">NETFLIX PREMIUM</h1>
    </HeroStyled>
  )
}
export default Main