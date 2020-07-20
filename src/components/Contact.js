import React from 'react'
import styled from 'styled-components'

const ContactStyled= styled.div`
  color: #FFFAFA;
  position: fixed;
  bottom: 30px;
  right: 30px;
  i{
    font-size: 40px;
  }
`

const Contact =()=>{

return(
  <ContactStyled>
    <i className="fab fa-whatsapp"></i>
  </ContactStyled>
)

}
export default Contact