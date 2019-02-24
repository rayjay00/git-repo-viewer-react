import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 100%;
    height: 2.3rem;
    -webkit-appearance:none;
    flex: 1;
`;

const InputText = () => {
    return (
        <StyledInput type="search" placeholder="Enter username here..." id="user" />
    );
}

export default InputText;