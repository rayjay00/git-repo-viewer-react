import React from 'react';
import PropTypes from 'prop-types';
import { StyledRepo } from '../styles/base';
import Info from './Info';
import Time from './Time';

const Repo = ({ repo }) => {
  return (
    <StyledRepo>
      <Info
        name={repo.name}
        description={repo.description}
        url={repo.html_url}
      />
      <Time time={repo.updated_at} />
    </StyledRepo>
  );
};

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default Repo;
