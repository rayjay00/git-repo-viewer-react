import styled from 'styled-components';
//This file contains anything that is in the "compnoents/layout" folder. These are the components that would make sense to be able to reuse in the future if this project is expanded.

//input button 
//currently only used
export const StyledInput = styled.input`
    height: 100%;
    height: 2rem;
    -webkit-appearance:none;
    flex: 1;
`;

export const StyledHeading = styled.h1`
    font-family: 'Asap', sans-serif;
    color: black;
    ${(props) => props.error && `text-align: center;` };
`;

export const StyledRepo = styled.div`
    margin: 1rem 0 0 0;
    ${(props) => props.card && 
        `display: flex;
        justify-content: space-around;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 1rem 0;
    ` };
    background-color: white;
    color: black;
    font-family: 'Asap', sans-serif;
    border: 1px solid rgb(95, 106, 125);
    transition: border 0.2s ease-in-out;
    border-radius: 3px;
    width 100%;
    padding: 1rem;
    @media screen and (min-width: 551px) {
        width: 48%;
    }
    ${(props) => props.card || 
        `
            @media screen and (min-width: 768px) {
                width: 30%;
            }
    ` };
    :hover {
        border: 1px solid rgb(84, 114, 204);
    }
`;
