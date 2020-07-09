//IMPORTS
//-Modules
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
// import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
//-Components
import Heading from './Heading'


//STYLE
//-Variables
const tagBottomMargin = "20px"
const tagsExtraWidth = "10px"
const ulTranslate = "15px"
//-Components
const CvButtonsContainer = styled.div`
  margin-top: 30px;
  text-align: center;
  .summaryButton{
    display: inline-block;
    padding: 13px 20px 10px;
    border: 1px solid #000;
    font-family: 'Graphik-Regular';
    font-size: 12px;
    text-align: center;
    cursor: pointer;
  }
  .textResizeButton{
    display: inline-block;
    padding: 13px 17px 10px;
    border: 1px solid #000;
    font-family: 'Graphik-Regular';
    font-size: 12px;
    text-align: center;
    cursor: pointer;
  }
  .increaseSizeButton{
    margin-left: 10px;
    border-right: 0px solid transparent;
  }
`
const SectionsOuter = styled.div`
  width: 100%;
  height: calc(100vh - 210px - 60px);
  margin-top: 30px;
  overflow: scroll;
  .section{
    margin: 0 30px 50px;
    max-width: 650px;

    .storyText{
      display: block;
    }
    .summaryText{
      display: none;
    }
    h5{
      font-family: 'Graphik-Semibold';
      font-size: 12px;
    }
    p{
      font-family: 'Graphik-Regular';
      font-size: 14px;
      color: #000;
      line-height: 19px;
      font-weight: 300;
      margin-bottom: 19px;
    }
    a{
      display: block;
      color: black;
      font-size: 14px
    }
    .interestList{      
      li{
        list-style-type: disc;
        display: inline-block;
        width: 49%;
      }
    }
    ul{
      transform:translateX(${ulTranslate});
      width: calc(100% - ${ulTranslate});
      li{
        font-size: 14px;
        margin-bottom: 14px;
      }
      ul{
        margin-top: 14px;
        margin-bottom: 30px;
        list-style-type: disc;
        li{
          font-size: 12px;
          margin-bottom: 0;
          line-height: 20px;
        }
      }
    }
    .tagContainer{
      position: relative;
      left: -${tagsExtraWidth};
      width: calc(100% + calc(${tagsExtraWidth} * 2));
      display: flex;
      margin: 20px 0 calc(30px - ${tagBottomMargin});
      flex-wrap: wrap;
      .tag{
        height: 30px;
        font-family: 'Graphik-Regular';
        font-size: 11px;
        text-align: center;
        padding: 0 10px;
        line-height: 30px;
        margin: 0 10px ${tagBottomMargin};
        background: #F8F9F8;
        border: 1px solid rgba(242,242,241,0.50);
        box-shadow: -5px -5px 10px 0 #FFFFFF, 5px 5px 10px 0 #F2F2F1;
        border-radius: 5px;
      }
    }
    .tagContainer:last-of-type{
        margin-bottom: -20px;
      }
    }
`


//MAIN COMPONENT
function Cv() {

  //Smooth Scrolling

  //Toggle Summary Button
    const [toggleSummaryButton, setToggleSummaryButton] = useState("OFF")
    const handleToggleSummaryButton = () => {

      if(toggleSummaryButton === "OFF"){

        document.querySelector(".summaryButton").innerHTML = "Tell Me Your Story"
        document.querySelectorAll(".storyText").forEach(e => { e.style.display = "none" })
        document.querySelectorAll(".summaryText").forEach(e => { e.style.display = "block" })
        setToggleSummaryButton("ON")

      } else if (toggleSummaryButton === "ON") {

        document.querySelector(".summaryButton").innerHTML = "Don’t Make Me Read All This Bollocks"
        document.querySelectorAll(".storyText").forEach(e => { e.style.display = "block" })
        document.querySelectorAll(".summaryText").forEach(e => { e.style.display = "none" })
        setToggleSummaryButton("OFF")
      }

    }

  //Font Sizing
    const numberOfTimesButtonCanBeClicked = 4
    const numberOfPixelsToChange = 2
    const sectionHeadingFont = document.querySelectorAll(".section h4")
    const [headingFontSize, setHeadingFontSize] = useState(14)
    const [headingLineHeight, setHeadingLineHeight] = useState(21)
    const sectionParagraphFont = document.querySelectorAll(".section p")
    const [paragraphFontSize, setParagraphFontSize] = useState(14)
    const [paragraphLineHeight, setParagraphLineHeight] = useState(19)
    const sectionSubheadingFont = document.querySelectorAll(".section h5")
    const [subheadingFontSize, setSubheadingFontSize] = useState(12)
    const sectionListItemFont = document.querySelectorAll(".section li")
    const [listItemFontSize, setListItemFontSize] = useState(14)
    const sectionListItemInnerFont = document.querySelectorAll(".section li li")
    const [listItemInnerFontSize, setListItemInnerFontSize] = useState(12)
    const [listItemInnerLineHeightSize, setListItemInnerLineHeightSize] = useState(20)

    //Increment Font Size Button
    const handleIncrementFontSize = () => {
      //Increment H4
        setHeadingFontSize(headingFontSize + numberOfPixelsToChange)
        setHeadingLineHeight(headingLineHeight + numberOfPixelsToChange)
        if( headingFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 14) ){
          setHeadingFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 14))
        }
        if(headingLineHeight === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 21)){
          setHeadingLineHeight(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 21))
        }
        sectionHeadingFont.forEach(e => { e.style.fontSize = `${headingFontSize}px` })
        sectionHeadingFont.forEach(e => { e.style.lineHeight = `${headingLineHeight}px` })
      //Increment p
        setParagraphFontSize(paragraphFontSize + numberOfPixelsToChange)
        setParagraphLineHeight(paragraphLineHeight + numberOfPixelsToChange)
        if( paragraphFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 14) ){
          setParagraphFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 14))
        }
        if (paragraphLineHeight === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 19)){
          setParagraphLineHeight(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 19))
        }
        sectionParagraphFont.forEach(e => { e.style.fontSize = `${paragraphFontSize}px` })
        sectionParagraphFont.forEach(e => { e.style.lineHeight = `${paragraphLineHeight}px` })
      //Increment H5
        setSubheadingFontSize(subheadingFontSize + numberOfPixelsToChange)
        if( subheadingFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 12) ){
          setSubheadingFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 12))
        }
        sectionSubheadingFont.forEach(e => { e.style.fontSize = `${subheadingFontSize}px` })
      //Increment li
        setListItemFontSize(listItemFontSize + numberOfPixelsToChange)
        if( listItemFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 14) ){
          setListItemFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 14))
        }
        sectionListItemFont.forEach(e => { e.style.fontSize = `${listItemFontSize}px` })
        sectionListItemFont.forEach(e => { e.style.marginBottom = `${listItemFontSize}px` })
      //Increment li li
        setListItemInnerFontSize(listItemInnerFontSize + numberOfPixelsToChange)
        setListItemInnerLineHeightSize(listItemInnerLineHeightSize + numberOfPixelsToChange)
        if( listItemInnerFontSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 12) ){
          setListItemInnerFontSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 12))
        }
        if (listItemInnerLineHeightSize === ((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 20)){
          setListItemInnerLineHeightSize(((numberOfPixelsToChange * numberOfTimesButtonCanBeClicked) + 20))
        }
        sectionListItemInnerFont.forEach(e => { e.style.fontSize = `${listItemInnerFontSize}px` })
        sectionListItemInnerFont.forEach(e => { e.style.lineHeight = `${listItemInnerLineHeightSize}px` })
    }

    //Decrement Font Size Button
    const handleDecrementFontSize = () => {
      //Decrement H4
        setHeadingFontSize(headingFontSize - numberOfPixelsToChange)
        setHeadingLineHeight(headingLineHeight - numberOfPixelsToChange)
        if( headingFontSize === 14 ){
          setHeadingFontSize(14)
        }
        if( headingLineHeight === 21 ){
          setHeadingLineHeight(21)
        }
        sectionHeadingFont.forEach(e => { e.style.fontSize = `${headingFontSize}px` })
        sectionHeadingFont.forEach(e => { e.style.lineHeight = `${headingLineHeight}px` })
      //Decrement p
        setParagraphFontSize(paragraphFontSize - numberOfPixelsToChange)
        setParagraphLineHeight(paragraphLineHeight - numberOfPixelsToChange)
        if( paragraphFontSize === 14 ){
          setParagraphFontSize(14)
        }
        if ( paragraphLineHeight === 19 ){
          setParagraphLineHeight(19)
        }
        sectionParagraphFont.forEach(e => { e.style.fontSize = `${paragraphFontSize}px` })
        sectionParagraphFont.forEach(e => { e.style.lineHeight = `${paragraphLineHeight}px` })
      //Decrement H5
        setSubheadingFontSize(subheadingFontSize - numberOfPixelsToChange)
        if( subheadingFontSize === 12 ){
          setSubheadingFontSize(12)
        }
        sectionSubheadingFont.forEach(e => { e.style.fontSize = `${subheadingFontSize}px` })
      //Decrement li
        setListItemFontSize(listItemFontSize - numberOfPixelsToChange)
        if( listItemFontSize === (14) ){
          setListItemFontSize(14)
        }
        sectionListItemFont.forEach(e => { e.style.fontSize = `${listItemFontSize}px` })
        sectionListItemFont.forEach(e => { e.style.marginBottom = `${listItemFontSize}px` })
      //Decrement li li
        setListItemInnerFontSize(listItemInnerFontSize - numberOfPixelsToChange)
        setListItemInnerLineHeightSize(listItemInnerLineHeightSize - numberOfPixelsToChange)
        if( listItemInnerFontSize === 12 ){
          setListItemInnerFontSize(12)
        }
        if (listItemInnerLineHeightSize === 20){
          setListItemInnerLineHeightSize(20)
        }
        sectionListItemInnerFont.forEach(e => { e.style.fontSize = `${listItemInnerFontSize}px` })
        sectionListItemInnerFont.forEach(e => { e.style.lineHeight = `${listItemInnerLineHeightSize}px` })
    }

    //Anim
    let headingOne = useRef(null)
    let headingTwo = useRef(null)


    useEffect( () => {
        const tl = gsap.timeline()
        tl.from(headingOne, 0.8, { x: -62.1406 })
          .from(headingOne, 0.4, { color: "black" })
          .from(headingTwo, 0.8, { x: -216.375 })
          .from(headingTwo, 0.4, { color: "black" })
    }, [])
    

  //
  return (
    <>
      <CvButtonsContainer>
        <div className="summaryButton" onClick={handleToggleSummaryButton}>Don’t Make Me Read All This Bollocks</div>
        <div className="textResizeButton increaseSizeButton" onClick={ handleIncrementFontSize}>+</div>
        <div className="textResizeButton decreseSizeButton" onClick={handleDecrementFontSize}>-</div>
      </CvButtonsContainer>
      
      <SectionsOuter>
        <div className="sectionsInner">

          <div className="section">

            <Heading 
              headingName="Me" 
              headingRefProp = { el => headingOne = el }
            />

            <div className="storyText">
             <p>I consider myself to be a generalist, as I find interest in a wide range of subjects. I find this helps me have a different perspective in a certain field.</p>
             <p>For better or for worse, I am somewhat of a perfectionist. It helps me do detailed work but it also slows down some projects.</p>
            </div>
            <div className="summaryText">
              <ul>
                <li>Generalist</li>
                <li>Perfectionist</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <Heading 
              headingName="What I’m Looking For"
              headingRefProp = { el => headingTwo = el }
            />

            <div className="storyText">
              <p>I’m preferibly looking for a business on it’s early stages, where there is shared responsability and tasks in different fields.</p>
              <p>I really value purpose-driven companies. These are companies who’s main goal is not monetary but solving an important issue in society.</p>
              <p>I also value autonomy. I like when companies let their employees take their own decisions and let them manage themselves.</p>
              <p>Finally, I value mastery. I like when companies let their employees progress in their skills and think of long-term progression as opposed to short-term goals.</p>
              <p>As an extra, I find the ’20% time’, where employees are given part of their time for side projects an interesting concept.</p>
            </div>
            <div className="summaryText">
              <ul>
                <li>Early stage company</li>
                <li>Purpose-driven company</li>
                <li>Employee autonomy</li>
                <li>Long-term progression (Mastery)</li>
              </ul>
            </div>
          </div>

          <div className="section">

            <Heading headingName="Education"/>

            <div className="storyText">
              <p>It all started at an English school in Mallorca where I had to attend everyday from kindergarden until I got kicked out right before my A levels.</p>
              <p>After this, I went to a Spanish school to do the E.S.O. and Bachillerato.</p>
              <p>Then I went to London to do a year of A levels at Ealing Independent College but had to come back to Spain due to economic reasons.</p>
              <p>Back in Spain, I attended Elisava to do Graphic Design.</p>
            </div>
            <div className="summaryText">
              <ul>
                <li>Queen’s College, Mallorca (GCSE’s)</li>
                <li>IES Bendinat, Mallorca (Bachillerato)</li>
                <li>Ealing Independent Collage, London (A levels)</li>
                <li>Elisava, Barcelona (Graphic Design)</li>
              </ul>
            </div>
          </div>

          <div className="section">

            <Heading headingName="Post-Education"/>

            <div className="storyText">
              <p>Once I left Elisava I realized I was interested in business. So I decided to start making clothing as it was a business I could afford to start, and made me enough money to live.</p>
              <p>For the clothing, I needed a website so I started to learn how to make websites with an Adobe program called Muse.</p>
              <p>Then I realized I could earn some money making websites for other people, so I moved back to Mallorca and started Gryd-Design.</p>
              <p>With Gryd-Design I made some flyers and walked around doing door-to-door sales. Once I got a few projects running (Carpenter, Real Estate, Film Director, Hedge Fund, Artist, Fruit Shop) I managed to save enough to hire a friend to do the sales side. This allowed me to focus on website creation. I then hired an off-shore virtual assistant to investigate which businesses didn’t have a websites so we could be more efficient on the sales side.</p>
              <p>On the way I saw a lot of inspiration on websites like awwwards and cssdesignawards and saw limitations with Adobe Muse. So I started learning coding on 2014 roughly. I learnt HTML, CSS and JavaScript.</p>
              <p>During this time I bought a fucking expensive screen-printing machine so I could offer that as an extra service to my customers at Gryd. It also allowed me to retake the clothing line I wanted to initially create.</p>
              <p>I got offered a job for Estiber in Barcelona, so I moved back there. I thought it was a good idea since it was starting to become a tech-hub at the time.</p>
              <p>I worked for Estiber for a year as a Lead Designer and was also involved in some of the Marketing roles (hand-coding Mailchimp emails). After the year we decided our values didn’t match so we stopped working together.</p>
              <p>I went back into selling clothes while I learnt new technologies like React and Node and its correspondant modules and libraries. I worked on personal projects too, and got a few odd jobs here and there making webistes. I ended up catching the attention of the founder of Apollo30 in a cafe and we got on well, so he offered me to work with them and I have been working there as a freelancer ever since.</p>
            </div>
            <div className="summaryText">
              <ul>
                <li>Clothing Freelance, Barcelona
                  <ul>
                    <li>Sales</li>
                  </ul>
                </li>
                <li>Gryd-Design, Mallorca
                  <ul>
                    <li>Design</li>
                    <li>Web Development</li>
                    <li>Sales</li>
                    <li>Management</li>
                    <li>Screen-printing</li>
                  </ul>
                </li>
                <li>Viatges Estiber, Barcelona
                  <ul>
                    <li>Lead Design</li>
                    <li>Marketing</li>
                  </ul>
                </li>
                <li>Clothing Freelance, Barcelona
                  <ul>
                    <li>Sales</li>
                  </ul>
                </li>
                <li>Websites Freelance, Barcleona
                  <ul>
                    <li>Design</li>
                    <li>Web Development</li>
                  </ul>
                </li>
                <li>Apollo30, Barcleona
                  <ul>
                    <li>Design</li>
                    <li>Web Development</li>
                  </ul>
                </li>
                <li>Scranny's House, Barcelona
                  <ul>
                    <li>Sales</li>
                    <li>Design</li>
                    <li>Web Development</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="section">

            <Heading headingName="Skills"/>

            <h5>Design</h5>
            <div className="tagContainer">
              <div className="tag">Sketch App</div>
              <div className="tag">Corportate Design</div>
            </div>
            <h5>Core Coding & Tools</h5>
            <div className="tagContainer">
              <div className="tag">HTML 5</div>
              <div className="tag">CSS 3</div>
              <div className="tag">CSS Grid</div>
              <div className="tag">SASS</div>
              <div className="tag">JavaScrips ES6</div>
              <div className="tag">Git</div>
              <div className="tag">npm</div>
              <div className="tag">Netlify</div>
              <div className="tag">Strapi CMS</div>
            </div>
            <h5>Front-end Development</h5>
            <div className="tagContainer">
              <div className="tag">React.js</div>
              <div className="tag">React Router</div>
              <div className="tag">React Hooks</div>
              <div className="tag">Styled Components</div>
              <div className="tag">Fetch API</div>
              <div className="tag">Axios</div>
              <div className="tag">GeenSock Animation Platform (GSAP)</div>
              <div className="tag">Svelte</div>
            </div>
            <h5>Back-end Development</h5>
            <div className="tagContainer">
              <div className="tag">Node.js</div>
              <div className="tag">Express</div>
              <div className="tag">MongoDB</div>
              <div className="tag">Mongoose</div>
              <div className="tag">mLab</div>
              <div className="tag">Firebase</div>
            </div>
            <h5>Code Testing</h5>
            <div className="tagContainer">
              <div className="tag">Jest</div>
              <div className="tag">Cypress</div>
            </div>
          </div>

          <div className="section">

            <Heading headingName="Interests"/>

            <ul className="interestList">
              <li>Cryptography</li>
              <li>Behavioural Science</li>
              <li>Neuroscience</li>
              <li>New Technologies</li>
              <li>Music Composition</li>
              <li>Business</li>
              <li>Economy</li>
              <li>Nutrition</li>
              <li>Reading</li>
              <li>User Experience</li>
              <li>3D & AR/VR</li>
              <li>Blockchain</li>
            </ul>
          </div>

          <div className="section">

            <Heading headingName="Languages"/>

            <ul>
              <li>Spanish: First Language</li>
              <li>English: Second Language</li>
            </ul>
          </div>

          <div className="section">

            <Heading headingName="Links"/>
  
            <a href="https://github.com/egomezsalasva" target="_blank" rel="noopener noreferrer">https://github.com/egomezsalasva</a>
          </div>

          <div className="section">

            <Heading headingName="Lets Meet"/>
  
            <p>I do like my coffee, so lets meet for one. <br/> Send me an email so we can schedule a call first or a meeting over a cup of coffee.</p>
          </div>

        </div>
      </SectionsOuter>
    </>      
  )
}
export default Cv;
