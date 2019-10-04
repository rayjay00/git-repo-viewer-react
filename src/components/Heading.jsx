import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledHeading } from '../styles/base';

const StyledExtraInfo = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;

// card prop is going to be true or false and will let the button know if it's part of the github project card
const Heading = ({ title }) => {
  return (
    <Fragment>
      <StyledHeading>{title}</StyledHeading>
      <StyledExtraInfo>
        Made by{' '}
        <a
          href="https://www.ryanjordal.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ryan
        </a>
        .
      </StyledExtraInfo>
    </Fragment>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired
};

export default Heading;
