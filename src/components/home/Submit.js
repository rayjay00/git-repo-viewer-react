import React from 'react';
import InputText from '../base/InputText';
import Button from '../base/Button';
import styled from 'styled-components';

//I placed these styles here instead of the base.js file since I don't anticipate reusing this wrapper. 
const StyledInputWrapper = styled.div`
    display: flex;
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

const Submit = ({ checked, error, handler }) => {
    return (
        <StyledInputWrapper>
            <form action=".">
                <InputText />
                <Button checked={ checked } error={ error } handler={ handler }/>
            </form>
        </StyledInputWrapper>
    );
}

export default Submit;
    
