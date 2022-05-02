import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import ExLogo from '../Card/logo192.png'
import {Link} from 'react-router-dom';

const HomeLogo = styled.img`
  height: 40px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffcc99;
`

function Header() {
    return (
        <NavContainer>
          <Link to="/">
            <HomeLogo src={ExLogo} />
          </Link>
          <NavLink exact activeClassName="active" to="/">
            Initial
          </NavLink>
          <NavLink activeClassName="active" to="/">
            Freelances
          </NavLink>
        </NavContainer>
      );
}

export default Header