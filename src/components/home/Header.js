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

const Header = ({ source, title, error, value, addUsername, checked, getRepos }) => {
    return (
        <StyledHeadingWrapper>
            <Image source= { source }/>
            <Heading title={ title } 
            error={ error } />
            <Submit user={ value } 
            addUsername={ addUsername } 
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
    addUsername: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired
}

export default Header;