import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../styles/base';

// card prop is going to be true or false and will let the button know if it's part of the github project card
const Button = ({ error, checked, type, card }) => {
  return (
    <StyledButton type={type} error={error} checked={checked} id="search-btn">
      {card ? 'See on GitHub' : [checked ? 'Search Again' : 'Search']}
    </StyledButton>
  );
};

Button.propTypes = {
  error: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  card: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  card: true,
  type: ''
};

export default Button;
