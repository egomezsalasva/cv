//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


//STYLE
//-Components
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px auto;
  padding: 0 70px;
  .activeNav{
    font-weight: 700;
  }
`
const NavOption = styled(NavLink)`
  font-family: 'SpaceMono-Regular';
  font-size: 14px;
  color: #000;
  text-align: center;
  text-transform: lowercase;
  text-decoration: none;
`


//MAIN COMPONENT
function Navigation() {
  return (
    <NavContainer>
        <NavOption to="/" activeClassName="activeNav">C.V.</NavOption>
        <NavOption to="/portfolio" activeClassName="activeNav">Portfolio</NavOption>
        <NavOption to="/library" activeClassName="activeNav">Library</NavOption>
    </NavContainer>
  )
}
export default Navigation;
