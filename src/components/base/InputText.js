import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 2.3rem;
    -webkit-appearance:none;
    flex: 1;
    border: 1px solid black;
    font-size: 16px;
    -webkit-appearance: none;
`;

const InputText = () => {
    return (
        <StyledInput name="search" type="search" placeholder="Enter username here..." id="user" />
    );
}

export default InputText;