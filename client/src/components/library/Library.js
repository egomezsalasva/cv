//IMPORTS
//-Modules
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
//-Components
import Heading from '../global/shared/Heading'


//STYLE
//-Variables
const tagBottomMargin = "20px"
const tagsExtraWidth = "10px"
const ulTranslate = "15px"
//-Components
const SectionsOuter = styled.div`
  width: 100%;
  height: calc(100vh - 210px - 60px);
  margin-top: 30px;
  overflow: scroll;
  .section{
    margin: 0 30px 50px;
    max-width: 650px;
    ul{
      transform:translateX(${ulTranslate});
      width: calc(100% - ${ulTranslate});
      li{
        font-size: 14px;
        margin-bottom: 14px;
      }
    }
  }
`


//MAIN COMPONENT
const Library = () => {
  return (
    <>

      <SectionsOuter>
        <div className="sectionsInner">

          <div className="section">
            <Heading headingName="Languages" classProp="heading" />
            <ul>
              <li>Spanish: First Language</li>
              <li>English: Second Language</li>
            </ul>
          </div>



        </div>
      </SectionsOuter>
      
    </>      
  )
}
export default Library;

