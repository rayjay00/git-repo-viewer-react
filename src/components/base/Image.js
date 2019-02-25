import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
    max-height: 145px;
`;

const Image = ({ source }) => {
    return (
        <StyledImg src={ source } />
    );
}

export default Image;

Image.propTypes = {
    source: PropTypes.string.isRequired,
};