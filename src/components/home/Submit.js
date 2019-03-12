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

const StyledForm = styled.form`
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: space-around:
    align-items: center;
`;

export default class Submit extends React.Component {

    handleForm(e) {
        e.preventDefault();
    }

    render() {
        const { username, checked, error, handler } = this.props;
        return (
            <StyledInputWrapper>
                <StyledForm onSubmit={ this.handleForm }>
                    <InputText username={ username }/>
                    <Button type="button" checked={ checked } error={ error } handler={ handler }/>
                </StyledForm>
            </StyledInputWrapper>
        );
    }
}


    
