import React from 'react';
import axios from 'axios';
import Header from './home/Header';
import Content from './home/Content';
import { StyledHeading } from '../styles/base';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient ({
    uri: 'https://api.github.com/graphql',
    request: async operation => {
        // const token = await  aed762f3c4f7e021047d8673bcc5d5261157ded9 
        operation.setContext({
            headers: {
                authorization: `token aed762f3c4f7e021047d8673bcc5d5261157ded9`
            }
        });
    }
})

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            user: "",
            repos: "",
            error: false,
            loading: false,
            avatar: "",
            value: ""
        };
    }

    
    //This function is passed to the to the Submit component as a prop and is called within a function in that file that uses the text input ref as a parameter. 
    getRepos = username => {
        client.query({
           query: gql`
            {
                user(login: ${username}) {
                login
                name
                bio
                avatarUrl
                repositories(first: 100, isFork: false)
                        {
                            nodes {
                                name
                                createdAt
                            }
                        }
                    }
                } 
            `
        })
        .then(res => {
            const repos = res.data;
            console.log('repos', repos);
            this.setState({
                checked: true,
                user: repos.user.login,
                repos: repos.user.repositories.nodes,
                error: false,
                avatar: repos.user.avatarUrl
            })
        })
        .catch( error => {
            console.log("error", error);
            this.setState({
                error: true,
                loading: false,
                avatar: ""
            })
        })
    }

    render() {
        const { checked, error, avatar, user, repos } = this.state;
        return (
            <> 
                <Header 
                source={ checked && !error ? avatar : "https://github.githubassets.com/images/modules/logos_page/Octocat.png" } 
                title={ user && !error ? user : "Search for a GitHub User" } 
                checked={ checked } 
                error={ error } 
                getRepos={ this.getRepos }/>
                { error ? 
                    <StyledHeading>Oops! It looks like that user doesn't exist.</StyledHeading>
                    :
                    <>
                        { repos.length > 0 && <Content repos={ repos } /> }
                    </>
                }
            </>
        );
    }
}

