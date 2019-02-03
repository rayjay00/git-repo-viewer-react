import React from 'react';
import styled from 'styled-components';

const StyledName = styled.p`
    font-size: 1rem;
    color: #00a1fe;
    margin-left: 0.3rem;
`;

const FileName = ( { name }) => {
    return (
        <StyledName>
            {name}
        </StyledName>
    );
}

export default FileName;