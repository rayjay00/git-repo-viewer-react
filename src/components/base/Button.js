import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    background-color: ${(props) => props.error ? "red" : "#000000" };
    border-radius: 0;
    border: 0;
    font-family: 'Asap', sans-serif;
    color: white;
    font-size: 1.5vh;
    text-transform: capitalize;
    margin: 0;
    height: 2.3rem;
    flex: 0.6;
`;

//card prop is going to be true or false and will let the button know if it's part of the github project card
const Button = ( {error, checked, type, card, handler }) => {
    return (
        <StyledButton onClick={ handler } type={ type } error={ error }>
            {card ? 'See on GitHub' :
            (checked ? 'Search Again' : 'Search For a User')}
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