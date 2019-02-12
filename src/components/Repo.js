import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import Time from './Time';

const StyledRepo = styled.div`
    width: 30%;
    padding: 1rem;
    margin: 1rem 0;
    background-color: white;
    color: black;
    font-family: 'Asap', sans-serif;
    border: 1px solid rgb(95, 106, 125);
    transition: border 0.2s ease-in-out;
    border-radius: 3px;
    :hover {
        border: 1px solid rgb(84, 114, 204);
    }
`;

const Repo = ({ repos }) => {
    return (
        <React.Fragment>
            {repos.map(project =>
                <StyledRepo key={project.id}>
                <Info name={project.name} description={project.description} url={project.html_url} />
                <Time time={project.updated_at} />
                </StyledRepo>
            )}
        </React.Fragment>
    )
}

export default Repo;

