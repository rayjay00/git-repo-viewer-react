import React from 'react'
import { StyledRepo } from '../styles/base';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledUserImg = styled.img`
    max-height: 20vh;
`;

const StyledUsername = styled.p`
    text-align: center;
`;

const User = ({ avatar, username }) => {
        return (
            <StyledRepo card={ true }>
                <StyledUserInfo>
                    <StyledUserImg src={ avatar } />
                    <StyledUsername>{ username }</StyledUsername>
                </StyledUserInfo>
            </StyledRepo>  
        )
}

User.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string
}

export default User;

