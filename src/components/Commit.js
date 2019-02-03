import React from 'react';
import styled from 'styled-components';

const StyledCommit = styled.p`
    color: #878383;
    text-align: left;
    font-size: 1rem;
    flex: 1;
`;

const Commit = ( { message }) => {
    return (
        <StyledCommit>{message}</StyledCommit>
    );
}

export default Commit;