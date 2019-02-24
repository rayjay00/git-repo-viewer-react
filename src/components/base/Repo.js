import React from 'react';
import { StyledRepo } from '../../styles/base';
import Info from '../Info';
import Time from '../Time';

const Repo = ({ repo }) => {
    return (
        <StyledRepo>
            <Info name={repo.name} description={repo.description} url={repo.html_url} />
            <Time time={repo.updated_at} />
        </StyledRepo>
    )
}

export default Repo;



