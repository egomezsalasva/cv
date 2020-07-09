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
  height: calc(100vh - 202px);
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
              <li>
                <span className="bookTitle">Blockchain Revolution</span>
                <span className="bookSubtitle">, How the technology behind bitcoin is changing money, business, and the world, </span>
                <span className="bookAuthor">Don Tapscott</span>
                <span className="bookSubtitle"> and </span>
                <span className="bookAuthor">Alex Tapscott</span>
              </li>
              <li>
                <span className="bookTitle">The Internet Of Money</span>
                <span className="bookSubtitle">, Volume 1, </span>
                <span className="bookAuthor">Andreas M. Antonopoulos</span>
              </li>
              <li>
                <span className="bookTitle">The Fourth Industrial Revolution</span>
                <span className="bookSubtitle">, </span>
                <span className="bookAuthor">Klaus Schwab</span>
              </li>
              <li>
                <span className="bookTitle">The Shallows</span>
                <span className="bookSubtitle">, What the internet is doing to our brains, </span>
                <span className="bookAuthor">Nicholas Carr</span>
              </li>
            </ul>
          </div>

          <div className="section">
            <Heading headingName="Design" classProp="heading" />
            <ul>
              <li>
                <span className="bookTitle">100 Ideas That Changed Graphic Design</span>
                <span className="bookSubtitle">, </span>
                <span className="bookAuthor">Steven Heller</span>
              </li>
              <li>
                <span className="bookTitle">Thinking With Type</span>
                <span className="bookSubtitle">, A critical guide for designers, writers, editors, & students, </span>
                <span className="bookAuthor">Ellen Lupton</span>
              </li>
              <li>
                <span className="bookTitle">Making And Breaking The Grid</span>
                <span className="bookSubtitle">, A graphic design layout workshop, </span>
                <span className="bookAuthor">Timothy Samara</span>
              </li>
              <li>
                <span className="bookTitle">Print Liberation</span>
                <span className="bookSubtitle">, The screen printing primer, </span>
                <span className="bookAuthor">Nick Paparone</span>
              </li>
              <li>
                <span className="bookTitle">Graphic Design Rules</span>
                <span className="bookSubtitle">, 365 essential design dos and don'ts, </span>
                <span className="bookAuthor">Peter Dawson</span>
              </li>
              <li>
                <span className="bookTitle">Know Your Onions: Graphic Design</span>
                <span className="bookSubtitle">, How to think like a creative, act like a businessman and design like a god, </span>
                <span className="bookAuthor">Drew de Soto</span>
              </li>
              <li>
                <span className="bookTitle">Know Your Onions: Web Design</span>
                <span className="bookSubtitle">, Jet propel yourself into the driving seat of a top-class web designer and hurtle towards creative stardom, </span>
                <span className="bookAuthor">Drew de Soto</span>
              </li>
            </ul>
          </div>

          <div className="section">
            <Heading headingName="Design" classProp="heading" />
            <ul>
              <li>
                <span className="bookTitle">100 Ideas That Changed Graphic Design</span>
                <span className="bookSubtitle">, </span>
                <span className="bookAuthor">Steven Heller</span>
              </li>
            </ul>
          </div>



        </div>
      </SectionsOuter>
      
    </>      
  )
}
export default Library;

