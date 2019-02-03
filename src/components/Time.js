import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
 

const StyledTime = styled.p`
    font-size: 1rem;
    color: #00a1fe;
    text-align: right;
`;

const Time = ( { time }) => {
    return (
        <StyledTime>
            {moment(time).fromNow()}
        </StyledTime>
    );
}


export default Time;