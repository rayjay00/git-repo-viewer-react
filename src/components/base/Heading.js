import React from 'react';
import { StyledHeading } from '../../styles/base.js';
import PropTypes from 'prop-types';

//card prop is going to be true or false and will let the button know if it's part of the github project card
const Heading = ({ title }) => {
    return (
        <StyledHeading>
           { title }
        </StyledHeading>
    );
}

Heading.propTypes = {
    title: PropTypes.string
}


export default Heading;