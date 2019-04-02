import React from 'react';
import styled from 'styled-components';

//These styles won't go in "base" because they won't be reused
const StyledHeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Asap', sans-serif;
`;

const ColumnContainer = (props) => {
    return (
        <StyledHeadingWrapper>
            {props.children}
        </StyledHeadingWrapper>
    )
};

export default ColumnContainer;