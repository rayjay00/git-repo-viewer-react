import React from 'react';
import { StyledHeading } from '../../styles/base.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledExtraInfo = styled.p`
    margin: 0;
    font-size: 1rem;
    margin-bottom: 0.3rem;
`;

//card prop is going to be true or false and will let the button know if it's part of the github project card
const Heading = ({ title }) => {
    return (
        <>
            <StyledHeading>
            { title }
            </StyledHeading>
            <StyledExtraInfo>Made by <a href="https://www.ryanjordal.me/" target="_blank" rel="noopener noreferrer">Ryan</a>.</StyledExtraInfo>
        </>
    );
}

Heading.propTypes = {
    title: PropTypes.string
}

export default Heading;