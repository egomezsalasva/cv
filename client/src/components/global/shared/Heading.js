//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'


//STYLE
//-Variables
const fontSizeH4 = 14
//-Components
const HeadingContainer = styled.div`
    overflow: hidden;
    h4{
        display: inline-block;
        background: black;
        color: white;
        padding: 0 15px 0 10px;
        font-family: 'SpaceMono-Regular';
        font-size: ${fontSizeH4}px;
        line-height: 21px;
        text-align: center;
        font-weight: 300;
        margin-bottom: 20px; 
    }
`


//MAIN COMPONENT
const Heading = ({ headingName, classProp }) => {
    return (          
        <HeadingContainer>
            <h4 className={classProp}>{headingName}</h4>   
        </HeadingContainer>   
    )
}
export default Heading
