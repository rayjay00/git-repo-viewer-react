import React from 'react';
import { StyledRepo } from '../../styles/base';
import Info from '../Info';
import Time from '../Time';

const Repo = ({ repo, card }) => {
    return (
        <StyledRepo>
            <Info card= { true } name={repo.name} description={repo.description} url={repo.html_url} />
            <Time time={repo.updated_at} />
        </StyledRepo>
    )
}

export default Repo;



