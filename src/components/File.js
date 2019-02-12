import React from 'react';
import styled from 'styled-components';
import Commit from './Commit';
import FileName from './Filename';
import Time from './Time';


const StyledFile = styled.div`
    width: auto;
    height: 3rem;
    background: #F6F2F1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 0;
    padding: 0 0.45rem;
    border-bottom: 1px solid lightgrey;
`

const StyledWrapper = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
`;

const File = ({ repo }) => {
    return (
        <StyledFile>
        <StyledWrapper>
            <FileName name={repo.name} />
        </StyledWrapper>
        8
        </StyledFile>
    );
}


export default File;