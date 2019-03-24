import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    -webkit-appearance:none;
    flex: 1;
    border: 1px solid black;
    font-size: 16px;
    -webkit-appearance: none;
`;


const InputText = ({ username, value }) => {
    return (
        <StyledInput onChange={ username } value={ value } name="search" type="text" nametype="search" placeholder="Enter username here..." id="user" />
    );
}

export default InputText;
