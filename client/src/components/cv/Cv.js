//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'



//STYLE
//-Variables
const tagBottomMargin = "20px"
const tagsExtraWidth = "10px"
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

    h4{
      display: inline-block;
      background: black;
      color: white;
      line-height: 21px;
      font-family: 'SpaceMono-Regular';
      font-size: 14px;
      text-align: center;
      padding: 0 15px 0 10px;
      font-weight: 300;
      margin-bottom: 20px;
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

    table{
      width: 100%;
    }
    td{
      font-size: 14px;
      padding-bottom: 20px;
    }
    .lastTd{
      padding-bottom: 0;
    }
`


//MAIN COMPONENT
function Cv() {
  return (
    <>
      <CvButtonsContainer>
        <div className="summaryButton">Don’t Make Me Read All This Bollocks</div>
        <div className="textResizeButton increaseSizeButton">+</div>
        <div className="textResizeButton decreseSizeButton">-</div>
      </CvButtonsContainer>
      
      <SectionsOuter>
        <div className="sectionsInner">
          <div className="section">
            <h4>Me</h4>
            <p>As a generalist, if you want to call it like that, I have hustled my way through life learning a few things on the way. I also like doing things my way like Frank Sinatra.</p>
          </div>
          <div className="section">
            <h4>What I’m Looking For</h4>
            <p>I’m preferibly looking for a business on it’s early stages, where there is shared responsability and tasks in different fields.</p>
            <p>I really value purpose-driven companies. These are companies who’s main goal is not monetary but solving an important issue in society.</p>
            <p>I also value autonomy. I like when companies let their employees take their own decisions and let them manage themselves.</p>
            <p>I also value mastery. I like when companies let their employees progress in their skills and think of long-term progression instead of short-term goals.</p>
            <p>As an extra, I find the ’20% time’, where employees are given part of their time for sideprojects an interesting concept.</p>
          </div>
          <div className="section">
            <h4>Education</h4>
            <p>It all started at an English school in Mallorca where I  had to go everyday from kindergarden until I got kicked out right before my A levels.</p>
            <p>After this, I went to a Spanish school to do the E.S.O. and bachillerato.</p>
            <p>Then I went to London to do a year of A levels in Ealing Independent College but had to come back to Spain due to economic reasons.</p>
            <p>Back in Spain I attended Elisava to do Graphic Design.</p>
          </div>
          <div className="section">
            <h4>Post-Education</h4>
            <p>Once I left Elisava I deciced I was interested in business. So I decided to start making clothing as it was an affordable business to start, and made me enough money to live.</p>
            <p>For the clothing idea I needed a website so I decided to learn how to make websites with an Adobe program called Muse. Which is a very flexible drag and drop software.</p>
            <p>Then I realized I could earn some money making websites for other people, so I moved back to Mallorca and started Gryd-Design.</p>
            <p>With Gryd-Design I made some flyers and went around door-to-door sales. Once I got a few projects running (Carpenters, Real Estate, Film Director, Hedge Fund, Artist, Fruit Shop) I managed to save enough to hire a fried to do the sales side so I could focus on website creation. I then hired an off-shore virtual assistant to investigate what businesses didn’t have websites so we could be more efficient on the sales side.</p>
            <p>On the way I saw a lot of inspiration on websites like awwwards and cssdesignawards and saw limitations on with Adobe Muse. So I started learning coding on 2014 roughly. I learnt HTML, CSS and JavaScript.</p>
            <p>During this time I bought a fucking expensive screen-printing machine so I could offer that as an extra service to my customers at Gryd. It also allowed me to retake the clothing line I wanted to initially create.</p>
            <p>I saw myself being involved in projects I didn’t particularly relate to on Gryd-Design and got offered a job for Estiber in Barcelona.</p>
            <p>So I moved back to Barcelona. I thought it was a good ideas as it started to become somewhat of a tech-hub at the time.</p>
            <p>I worked for Estiber for a year as a Lead Designer and was also involved in some of the Marketing (hand-coding Mailchimp emails). After the year we decided our values didn’t match so we stopped working together.</p>
            <p>I went back into selling clothes while I learnt new technologies like React and Node and its correspondant modules and libraries. I came to work on a coffee shop on personal projects too and got a few odd jobs here and there making webistes. I ended up catching the attention of the founder of Apollo30 in a cafe and we got on well together so he offered me to work with them and I have been working there ever since as a freelancer.</p>
          </div>
          <div className="section">
            <h4>Skills</h4>
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
            <h4>Interests</h4>
            <table>
              <tbody>
                <tr>
                  <td>•&nbsp;Cryptography</td>
                  <td>•&nbsp;Behavioural Science</td>
                </tr>
                <tr>
                  <td>•&nbsp;Neuroscience</td>
                  <td>•&nbsp;New Technologies</td>
                </tr>
                <tr>
                  <td>•&nbsp;Music Composition</td>
                  <td>•&nbsp;Business</td>
                </tr>
                <tr>
                  <td>•&nbsp;Economy</td>
                  <td>•&nbsp;Zen Meditation</td>
                </tr>
                <tr>
                  <td>•&nbsp;Nutrition</td>
                  <td>•&nbsp;Screen Printing</td>
                </tr>
                <tr>
                  <td>•&nbsp;Reading</td>
                  <td>•&nbsp;User Experience</td>
                </tr>
                <tr>
                  <td className="lastTd">•&nbsp;3D & AR/VR</td>
                  <td className="lastTd">•&nbsp;Blockchain</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <h4>Languages</h4>
            <p>- Spanish: First Language</p>
            <p>- English: Second Language</p>
          </div>
          <div className="section">
            <h4>Links</h4>
            <a href="https://github.com/egomezsalasva" target="_blank">https://github.com/egomezsalasva</a>
          </div>
          <div className="section">
            <h4>Lets Meet</h4>
            <p>I do like my coffee, so lets meet for one. <br/> Send me an email so we can schedule a call first or a meeting over a cup of coffee.</p>
          </div>
        </div>
      </SectionsOuter>
    </>      
  )
}
export default Cv;
