import React from 'react';
import Image from '../base/Image';
import Heading from '../base/Heading';
import Submit from './Submit';  
import styled from 'styled-components';
import PropTypes from 'prop-types';
//These styles won't go in "base" because they won't be reused
const StyledHeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Asap', sans-serif;
`;

const Header = ({ action, source, title, checked, error, handler }) => {
    return (
        <StyledHeadingWrapper source={ source }>
            <Image source= { source }/>
            <Heading title={ title } />
            <Submit username={ action } checked={ checked } error={ error } handler={ handler }/>
        </StyledHeadingWrapper>
    );
};

Header.propTypes = {
    checked: PropTypes.bool.isRequired,
    title: PropTypes.string,
    error: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
}

export default Header;