import React from 'react';
import styled from 'styled-components';


const StyledNameWrapper = styled.div`
    color: black;
    letter-spacing: 0.05rem;
    font-weight: 400;
`;

const StyledInfoLink = styled.a`    
    text-decoration: none;
    text-align: right;
    color: white;
    background-color: darkblue;
    padding: 0.25rem 1rem;
    border-radius: 10px;
    float: right;
`;



const Info = ({ name, description, url }) => {
    return (
        <>
        <StyledNameWrapper>
            <h4>{ name }</h4>
            <p>{description}</p>
            <StyledInfoLink href={url}>See it on GitHub</StyledInfoLink>
        </StyledNameWrapper>
        </>
    )
}

export default Info;
