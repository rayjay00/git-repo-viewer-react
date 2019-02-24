import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../base/Repo';
import styled from 'styled-components';
//These styles are specific to this component so it is not in 'base', which is for more reusable components
const StyledRepos = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Content = ({ repos }) => {
    return (
        <StyledRepos>
            {repos.map(repo =>
                <Repo key={ repo.id } repo={ repo } />
            )}
        </StyledRepos>
    )
}

Content.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Content;


