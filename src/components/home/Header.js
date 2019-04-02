import React from 'react';
import styled from 'styled-components';
import Image from '../base/Image';
import Heading from '../base/Heading';
import Submit from './Submit';  
import PropTypes from 'prop-types';
//These styles won't go in "base" because they won't be reused
const StyledHeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Asap', sans-serif;
`;

const Header = ({ source, title, error, value, checked, getRepos }) => {
    return (
        <StyledHeadingWrapper>
            <Image source={ source }/>
            <Heading title={ title } 
            error={ error } />
            <Submit user={ value } 
            checked={ checked } 
            error={ error } 
            getRepos={ getRepos }/>
        </StyledHeadingWrapper>
    );
};

Header.propTypes = {
    source: PropTypes.string,
    title: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    user: PropTypes.string,
    getRepos: PropTypes.func.isRequired
}

export default Header;