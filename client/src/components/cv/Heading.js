//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'


//STYLE
//-Variables

//-Components
const HeadingContainer = styled.div`
    overflow: hidden;
    h4{
        display: inline-block;
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
const Heading = ({ headingName, headingRefProp }) => {
    return (          
        <HeadingContainer>
            <h4 ref={headingRefProp}>{headingName}</h4>   
        </HeadingContainer>   
    )
}
export default Heading
