//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import Heading from '../cv/Heading'


//STYLE
//-Components
const SectionsOuter = styled.div`
  width: 100%;
  height: calc(100vh - 210px - 60px);
  margin-top: 30px;
  overflow: scroll;
  .section{
    margin: 0 30px 50px;
    max-width: 650px;
  }
`


//MAIN COMPONENT
function Portfolio() {
  return (
    <>
      <SectionsOuter>
        <div className="sectionsInner">
          <div className="section">
            <Heading headingName="Scranny's House"/>
            {/* <img src="" alt="" /> */}
          </div>
          <div className="section">
            <Heading headingName="Apollo 30"/>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </SectionsOuter>
    </>     
  )
}
export default Portfolio;
