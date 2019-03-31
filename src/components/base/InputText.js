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
    
    const listenForSubmit = (e) => {
        if (e.keyCode === 13) {
            document.getElementById("search-btn").click();   
        }
    }

    return (
        <StyledInput onKeyDown={ listenForSubmit }  
        onChange={ username } 
        value={ value } 
        name="search" 
        type="text" 
        nametype="search" 
        defaultValue="Enter username here..." 
        id="user" />
    );
}

export default InputText;
