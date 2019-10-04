import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNameWrapper = styled.div`
  color: black;
  letter-spacing: 0.05rem;
  font-weight: 400;
`;

export const StyledLink = styled.a`
  background-color: #000000;
  border-radius: 3px;
  border: 0;
  font-family: 'Asap', sans-serif;
  color: white;
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0;
  flex: 0.6;
  padding: 0.6rem 0.5rem;
  text-decoration: none !important;
  float: right;
  height: auto;
  margin: 0.2rem 0;
`;

const Info = ({ name, description, url }) => {
  const projectDescription = description && <p>{description}</p>;

  return (
    <React.Fragment>
      <StyledNameWrapper>
        <h4>{name}</h4>
        {projectDescription}
        <StyledLink href={url}>See it on GitHub</StyledLink>
      </StyledNameWrapper>
    </React.Fragment>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

Info.defaultProps = {
  description: ''
};

export default Info;
