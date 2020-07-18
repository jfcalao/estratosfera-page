import React from 'react'
import styled from 'styled-components'

const MainStyled = styled.div`
  
  .title{

      
      margin: 0;
      color:#FFFAFA;
    }
  
`

const Main = ()=>{

  return(
    <MainStyled>
      <h2 className="title">Estratosfera</h2>
      <h1 className="title">NETFLIX PREMIUM</h1>
    </MainStyled>
  )
}
export default Main