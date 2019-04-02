import React from 'react';
import Image from '../base/Image';
import Heading from '../base/Heading';
import Submit from './Submit';  
import PropTypes from 'prop-types';
import ColumnContainer from '../ColumnContainer';

const Header = ({ source, title, error, value, addUsername, checked, getRepos }) => {
    return (
        <ColumnContainer>
            <Image source={ source }/>
            <Heading title={ title } 
            error={ error } />
            <Submit user={ value } 
            addUsername={ addUsername } 
            checked={ checked } 
            error={ error } 
            getRepos={ getRepos }/>
        </ColumnContainer>
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