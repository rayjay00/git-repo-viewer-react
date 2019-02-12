import React from 'react';
import styled from 'styled-components';


const StyledUser = styled.div`
    width: 30;
    margin: 0 auto;
    font-family: 'Asap', sans-serif;
    display: flex;
`;

const StyledUserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledUserImg = styled.img`
    max-height: 20vh;
`;

const User = ({ username, avatar }) => {
    return (
        <StyledUser>
            <StyledUserInfo>
                <h1>{username}</h1>
            </StyledUserInfo>
            <StyledUserImg src={avatar} alt=""/>
        </StyledUser>  
    )
}

export default User;
