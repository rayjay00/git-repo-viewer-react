import React from 'react';
import { StyledButton } from '../../../src/styles/base';
import PropTypes from 'prop-types';

//card prop is going to be true or false and will let the button know if it's part of the github project card
const Button = ({ error, checked, type, card, handler }) => {
    return (
        <StyledButton onClick={ handler } type={ type } error={ error } checked={ checked } id="search-btn">
            {card ? 'See on GitHub' :
            (checked ? 'Search Again' : 'Search')}
        </StyledButton>
    );
}

Button.propTypes = {
    error: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    card: PropTypes.bool,
    text: PropTypes.string,
    type: PropTypes.string,
    handler: PropTypes.func
}

export default Button;