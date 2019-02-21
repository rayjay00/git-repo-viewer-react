import React, { Component } from 'react'
import { StyledRepo } from '../styles/base';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

const StyledUserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledUserImg = styled.img`
    max-height: 20vh;
`;

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: [],
            avatar_url: "",
            followers: "",
            total: "",
            location: "",
            bio: "",
            error: false
        }
    }
    componentWillMount() {
        this.setState({
            username: this.props.username
        })
    }
    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.state.username}`)
        .then(res => {
            const userdata = res.data;
            const { avatar_url, bio, location, followers } = userdata;
            console.log('user data', userdata);
            //I thought about rendering the state in another "then"
                this.setState({
                    //I'm still debating this next line
                    userdata: userdata,
                    avatar_url: avatar_url,
                    bio: bio,
                    location: location,
                    followers: followers
                })
            
        })
        .catch((error) => {
            this.setState(prevState => ({
                error: true
            }))
        })
    }
    render() {
        const { bio, location, followers, avatar_url } = this.state;

        return (
            <StyledRepo card={ true }>
                <StyledUserInfo>
                    <p>Username: { this.props.username }</p>
                    {bio && <p>Bio: {bio}</p> }
                    {location && <p>Location: { location }</p>}
                    <p>Followers: { followers || 0 }</p>
                    </StyledUserInfo>
                <StyledUserImg src={ avatar_url } alt={this.props.username} />
            </StyledRepo>  
        )
    } 
}


User.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string
}

