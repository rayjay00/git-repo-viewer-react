import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Heading from './Heading';
import Submit from './Submit';
import ColumnContainer from './ColumnContainer';

const Header = ({ source, title, error, addUsername, checked, getRepos }) => {
  return (
    <ColumnContainer>
      <Image source={source} />
      <Heading title={title} error={error} />
      <Submit
        addUsername={addUsername}
        checked={checked}
        error={error}
        getRepos={getRepos}
      />
    </ColumnContainer>
  );
};

Header.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  addUsername: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired
};

export default Header;
