import React from 'react';
import Header from './home/Header';
import Content from './home/Content';
import { StyledHeading } from '../styles/base';
import axios from 'axios';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            username: "",
            checked: false,
            error: false,
            owner: "",
            value: "",
            loading: false
        };
    }
    
    //this handler is passed down to the to the InputText component 
    getRepos = () => {
        this.setState({
            loading: true
        });
        //is there a way to grab username from state? when i trie, I had to click the submit button twice
        axios.get(`https://api.github.com/users/${this.state.value}/repos`)
        
        .then(res => {
            const repos = res.data;
            console.log('repos', repos);
            //I thought about rendering the state in another "then"
            this.setState({
                //I'm still debating this next line
                repos: repos,
                username: "",
                user: repos[0]["owner"]["login"],
                checked: true,
                error: false,
                owner: repos[0]["owner"],
                avatar: repos[0]["owner"]["avatar_url"],
                loading: false
            })
        })
        .catch((error) => {
            console.log("error", error);
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    addUsername = (e) => {
        this.setState({
            value: e.target.value
        })
    }
   
    render() {
        const {repos, checked, error, user, avatar, value} = this.state;
        return (
            <> 
                <Header action={ this.addUsername } value={ value } title={user && !error ? user : "Search for a GitHub User"} checked={ checked } error={ error } source={ checked && !error ? avatar : "https://github.githubassets.com/images/modules/logos_page/Octocat.png" } handler={ this.getRepos }/>
                { error ?
                    <StyledHeading error={ error }>Oops... Looks like that user doesn't exist. Try again!</StyledHeading>
                    :
                    <>
                        { repos.length > 1 && <Content repos={ repos } /> }
                    </>
                }
            </>
        );
    }
}

