import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

const StyledTime = styled.p`
  font-size: 1rem;
  color: #00a1fe;
  text-align: right;
  text-transform: capitalize;
  clear: both;
`;

const Time = ({ time }) => {
  return <StyledTime>Last Updated: {moment(time).fromNow()}</StyledTime>;
};

Time.propTypes = {
  time: PropTypes.string.isRequired
};

export default Time;
