import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
 

const StyledTime = styled.p`
    font-size: 1rem;
    color: #00a1fe;
    text-align: right;
    text-transform: capitalize;
    clear: both;
    margin: 4rem 0 0 0;
`;

const Time = ( { time }) => {
    return (
        <StyledTime>
            Last Updated: {moment(time).fromNow()}
        </StyledTime>
    );
}


export default Time;