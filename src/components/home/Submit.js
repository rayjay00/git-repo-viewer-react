import React from 'react';
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

const StyledInput = styled.input`
    -webkit-appearance:none;
    flex: 1;
    border: 1px solid black;
    font-size: 16px;
    -webkit-appearance: none;
`;

const Submit = ({ getRepos, checked, error }) => {

    const usernameRef = React.createRef();

    const handleForm = event => {
        event.preventDefault();
        const usernameInput = usernameRef.current.value
        getRepos(usernameInput);
    }

    return (
        <StyledInputWrapper>
            <StyledForm onSubmit={ handleForm }>
                <StyledInput 
                name="search" 
                type="text" 
                ref={ usernameRef }
                nametype="search" 
                placeholder="Enter username here..." 
                />
                <Button type="submit" checked={ checked } error={ error } />
            </StyledForm>
        </StyledInputWrapper>
    );

}

export default Submit;
// export default class Submit extends React.Component {
//     usernameRef = React.createRef();

//     handleForm = event => {
//         event.preventDefault();
//         const usernameInput = this.usernameRef.current.value
//         this.props.getRepos(usernameInput);
//     }

//     render() {
//         const { checked, error } = this.props;
//         return (
//             <StyledInputWrapper>
//                 <StyledForm onSubmit={ this.handleForm }>
//                     <StyledInput 
//                     name="search" 
//                     type="text" 
//                     ref={ this.usernameRef }
//                     nametype="search" 
//                     placeholder="Enter username here..." 
//                     />
//                     <Button type="submit" checked={ checked } error={ error } />
//                 </StyledForm>
//             </StyledInputWrapper>
//         );
//     }
// }


    
