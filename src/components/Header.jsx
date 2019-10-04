import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import Heading from './Heading';
import Submit from './Submit';
import ColumnContainer from './ColumnContainer';

const Header = ({ error, checked, setUser, source, title }) => {
  return (
    <ColumnContainer>
      <Image source={source} />
      <Heading title={title} error={error} />
      <Submit checked={checked} error={error} setUser={setUser} />
    </ColumnContainer>
  );
};

Header.defaultProps = {
  title: 'Username',
  source: ''
};

Header.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired
};

export default Header;
