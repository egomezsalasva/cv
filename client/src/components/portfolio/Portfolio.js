//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import Heading from '../global/shared/Heading'
//-Images
import scrannysHouseImg from '../../images/scrannysHouse.png'
import apollo30Img from '../../images/apollo30.png'

//DATA
const portfolioData = [
  {
    name: "Scranny's House",
    imgUrl: scrannysHouseImg,
    webUrl: "https://www.scrannyshouse.com/",
  },
  {
    name: "Apollo 30",
    imgUrl:apollo30Img,
    webUrl: "https://apollo30.com/",
  }
]


//STYLE
//-Components
const SectionsOuter = styled.div`
  width: 100%;
  height: calc(100vh - 202px );
  margin-top: 30px;
  overflow: scroll;
  .section{
    margin: 0 30px 50px;
    max-width: 650px;
    .portfolioImg{
      width: 100%;
      height: 29.9850075vh;
      background-repeat: no-repeat;

    }
  }
`


//MAIN COMPONENT
function Portfolio() {
  return (
    <>
      <SectionsOuter>
        <div className="sectionsInner">
          {portfolioData.map( section => {
            return (
                      <a href={section.webUrl} target="_blank" rel="noopener noreferrer">
                        <div className="section">
                          <Heading headingName={section.name}/>
                          <div className="portfolioImg" 
                            style={{ 
                              background: `url(${section.imgUrl}) center center`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                            }}
                          />
                        </div>
                      </a>
                   )
          })}
        </div>
      </SectionsOuter>
    </>     
  )
}
export default Portfolio;
