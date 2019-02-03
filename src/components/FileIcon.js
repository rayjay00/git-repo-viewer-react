import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.i`
    color: #00a1fe;
`;

const FileIcon = ( { type }) => {
    return type === "folder" ? <StyledIcon className="fas fa-folder"></StyledIcon> : <StyledIcon className="fas fa-file"></StyledIcon>;
}

export default FileIcon;