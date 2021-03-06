import styled from 'styled-components';
//This file contains anything that is in the "compnoents/layout" folder. These are the components that would make sense to be able to reuse in the future if this project is expanded.

export const StyledHeading = styled.h1`
  font-family: 'Asap', sans-serif;
  color: black;
  ${props => props.error && `text-align: center;`};
  ${props => props.error || `margin-bottom: 0.2rem;`};
  text-align: center;
`;

export const StyledRepo = styled.div`
  margin: 5px;
  ${props =>
    props.card &&
    `display: flex;
        justify-content: space-around;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 1rem 0;
        width: auto;
        @media screen and (min-width: 551px) {
            width: 20%;
        }
    `};
  background-color: white;
  color: black;
  font-family: 'Asap', sans-serif;
  border: 1px solid rgb(95, 106, 125);
  transition: border 0.2s ease-in-out;
  border-radius: 3px;
  padding: 1rem;
  ${props =>
    props.card ||
    `
            width: 100%;
            @media screen and (min-width: 667px) {
                flex: 1 44%;
            }
            @media screen and (min-width: 1261px) {
                flex: 1 30%;
            }
    `};
  :hover {
    border: 1px solid rgb(84, 114, 204);
  }
`;

export const StyledButton = styled.button`
  background-color: ${props => (props.error ? 'red' : '#000000')};
  font-size: 1.3rem;
  ${props =>
    props.card ||
    `
        flex: 0.25;
    `};
  ${props =>
    props.checked &&
    `
        flex: 0.35;
        font-size: 0.8rem;
    `};
  border-radius: 0;
  border: 0;
  font-family: 'Asap', sans-serif;
  color: white;
  text-transform: capitalize;
  margin: 0;
  height: 2.3rem;
`;
