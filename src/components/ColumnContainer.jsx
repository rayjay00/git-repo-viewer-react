import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Asap', sans-serif;
`;

const ColumnContainer = ({ children }) => {
  return <StyledHeadingWrapper>{children}</StyledHeadingWrapper>;
};

ColumnContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ColumnContainer;
