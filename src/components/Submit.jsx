import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import Button from './Button';

const StyledInputWrapper = styled.div`
  display: flex;
  width 100%;
  @media screen and (min-width: 551px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1261px) {
    width: 25%;
  }
`;

const StyledForm = styled.form`
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: space-around:
    align-items: center;
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  flex: 1;
  border: 1px solid black;
  font-size: 16px;
  -webkit-appearance: none;
`;

const Submit = ({ checked, error, setUser }) => {
  const usernameRef = React.createRef();

  const handleForm = event => {
    event.preventDefault();

    const usernameInput = usernameRef.current.value;

    setUser({
      type: 'USERNAME_SET',
      payload: usernameInput
    });
  };

  return (
    <StyledInputWrapper>
      <StyledForm onSubmit={handleForm}>
        <StyledInput
          name="search"
          type="text"
          ref={usernameRef}
          nametype="search"
          placeholder="Enter username here..."
        />
        <Button type="submit" checked={checked} error={error} />
      </StyledForm>
    </StyledInputWrapper>
  );
};

Submit.propTypes = {
  checked: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired
};

export default Submit;
