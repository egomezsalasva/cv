//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'



//STYLE
//-Variables

//-Components
const HeadingContainer = styled.div`
    background: red;
    h4{
        display: inline-block;
        background: black;
        line-height: 21px;
        font-family: 'SpaceMono-Regular';
        font-size: 14px;
        text-align: center;
        padding: 0 15px 0 10px;
        font-weight: 300;
        margin-bottom: 20px;
    }
    .box{
        background: green;
        color: black;
        padding: 0 15px 0 10px;
        font-weight: 300;
        margin-bottom: 20px;
    }
    .front{
        opacity: 0;
        transform: translateX(-100%);
        background: black;
        color: white;
        padding: 0 15px 0 10px;
        font-weight: 300;
        margin-bottom: 20px;
    }
`


//MAIN COMPONENT
const Heading = ({headingName}) => {
  return (          
    <HeadingContainer>
        <h4 className="box">{headingName}</h4>
        <h4 className="front">{headingName}</h4>
        
    </HeadingContainer>   
  )
}
export default Heading;
