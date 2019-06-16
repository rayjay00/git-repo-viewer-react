import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Repo from './Repo';

const StyledRepos = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Content = ({ repos }) => {
  return (
    <StyledRepos>
      {repos.map(repo => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </StyledRepos>
  );
};

Content.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Content;
