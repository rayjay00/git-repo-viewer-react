import React from 'react';
import Heading from '../base/Heading';
import Submit from './Submit';  
import PropTypes from 'prop-types';
import styled from 'styled-components';

//These styles won't go in "base" because they won't be reused
const StyledHeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Asap', sans-serif;
`;

const Header = ({ title, checked, error, handler }) => {
    return (
        <StyledHeadingWrapper>
            <Heading title={ title } />
            <Submit checked={ checked } error={ error } handler={ handler }/>
        </StyledHeadingWrapper>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
}

export default Header;