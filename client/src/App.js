//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'

//STYLE
//-Variables
const lightColor = "#F8F9F8"
//-Components
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  margin: 0 30px;
`
const Title = styled.h2`
  font-family: 'Graphik-Semibold';
  font-size: 18px;
  color: #000;
`
const ThemeBoxContainer = styled.div`
`
const ThemeBox = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(calc(-50% + 1px));
  width: 30px;
  height: 18px;
  border: 1px solid black;
  .cube{
    position: absolute;
    width: 10px;
    height: 10px;
    background: black;
    margin: 3px;
    right: 0;
    left: auto;
  }
`
const NavContainer = styled.div`
`

function App() {
  return (
    <>
      <Header>
        <Title>J. Enrique Gomez-Salas</Title>
        <ThemeBoxContainer>
          <ThemeBox>
            <div className="cube"/>
          </ThemeBox>
        </ThemeBoxContainer>
      </Header>

      <NavContainer>

      </NavContainer>
      
      
    </>
  )
}

export default App;
