//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
// import { gsap } from 'gsap'



//STYLE
//-Variables

//-Components
const HeadingContainer = styled.div`
    h4{
        display: inline-block;
        background: black;
        line-height: 21px;
        font-family: 'SpaceMono-Regular';
        font-size: 14px;
        text-align: center;
        font-weight: 300;
        margin-bottom: 20px;
    }
    /* .box{
        display: inline-block;
        width: 100%;
        background: green;
        color: black;
        height: 21px;
    } */
    .front{
        opacity: 1;
        background: black;
        color: white;
        padding: 0 15px 0 10px;
    }
`


//MAIN COMPONENT
const Heading = ({headingName}) => {
    return (          
        <HeadingContainer>
            {/* <div className="box"/> */}
            <h4 className="front">{headingName}</h4>   
        </HeadingContainer>   
    )
}
export default Heading;
