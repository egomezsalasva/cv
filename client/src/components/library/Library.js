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
        .bookTitle{
          font-weight: 700;
        }
        .bookSubtitle{
          font-weight: 300;
        }
        .bookAuthor{
          font-family: 'Graphik-RegularItalic';
          font-weight: 300;
        }
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
            <Heading headingName="Technology" classProp="heading" />
            <ul>
              <li>
                <span className="bookTitle">Crypto</span>
                <span className="bookSubtitle">, How the code rebels beat the goverment- saving privacy in the digital age, </span>
                <span className="bookAuthor">Steven Levy</span>
              </li>
              <li>
                <span className="bookTitle">Computer Science Distilled</span>
                <span className="bookSubtitle">, Learn the art of solving computational problems, </span>
                <span className="bookAuthor">Wladston Ferreira Filho</span>
              </li>
            </ul>
          </div>



        </div>
      </SectionsOuter>
      
    </>      
  )
}
export default Library;

