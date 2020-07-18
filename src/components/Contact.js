import React from 'react'
import styled from 'styled-components'

const ContactStyled= styled.div`
  color: #FFFAFA;
  i{
    font-size: 33px;
  }
`

const Contact =()=>{

return(
  <ContactStyled>
    <i className="fab fa-whatsapp"></i>
    <p>Contactanos por whatsapp</p>
  </ContactStyled>
)

}
export default Contact