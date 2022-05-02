import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  background-color: #add8e6;
  justify-content:center;
   align-items:center;
  height: 70px;
`

function Footer() {
  return (
      <FooterContainer>
        Footer
      </FooterContainer>
  )
}

export default Footer