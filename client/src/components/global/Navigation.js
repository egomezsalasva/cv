//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'


//STYLE
//-Components
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px auto;
  padding: 0 70px;
  font-family: 'SpaceMono-Regular';
  font-size: 14px;
  color: #000;
  text-align: center;
  text-transform: lowercase;
  .activeNav{
    font-weight: 700;
  }
`


//MAIN COMPONENT
function Navigation() {
  return (
    <NavContainer>
        <div className="activeNav">C.V.</div>
        <div>Portfolio</div>
        <div>Library</div>
    </NavContainer>
  )
}
export default Navigation;
