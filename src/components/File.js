import React from 'react';
import styled from 'styled-components';
import FileIcon from './FileIcon';
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

const File = ({ file }) => {
    return (
        <StyledFile>
        <StyledWrapper>
            <FileIcon type={file.type} />
            <FileName name={file.name} />
        </StyledWrapper>
            <Commit message={file.latestCommit.message} />
            <Time time={file.updated_at}/>
        </StyledFile>
    );
}


export default File;