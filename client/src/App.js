//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import Header from './components/global/Header'

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
const SummaryButtonContainer = styled.div`
  margin-top: 30px;
  text-align: center;
  .summaryButton{
    display: inline-block;
    padding: 14px 20px 10px;
    border: 1px solid #000;
    font-family: 'Graphik-Regular';
    font-size: 14px;
    color: #000;
    text-align: center;
    cursor: pointer;
  }
`


function App() {
  return (
    <>
      <Header/>

      <NavContainer>
        <div className="activeNav">C.V.</div>
        <div>Portfolio</div>
        <div>Library</div>
      </NavContainer>

      <SummaryButtonContainer>
        <div className="summaryButton">Don’t Make Me Read All This Bollocks</div>
      </SummaryButtonContainer>
      
      
    </>
  )
}

export default App;
