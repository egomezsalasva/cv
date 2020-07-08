//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
// import { gsap } from 'gsap'



//STYLE
//-Variables

//-Components
const HeadingContainer = styled.div`
    /* width: 0;
    overflow: hidden; */
    h4{
        display: inline-block;
        /* height: 21px; */
        /* overflow: hidden; */
        background: black;
        color: white;
        padding: 0 15px 0 10px;
        font-family: 'SpaceMono-Regular';
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        font-weight: 300;
        margin-bottom: 20px; 
    }
`


//MAIN COMPONENT
const Heading = ({ headingName, containerRef, h4RefProp }) => {

    return (          
        <HeadingContainer ref={containerRef}>
            <h4 ref={h4RefProp}>{headingName}</h4>   
        </HeadingContainer>   
    )
}
export default Heading;
