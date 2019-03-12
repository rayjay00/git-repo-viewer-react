import React from 'react';
import Header from './home/Header';
import Content from './home/Content';
import { StyledHeading } from '../styles/base';
import axios from 'axios';

export default class UserRepo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            username: "",
            checked: false,
            error: false,
            owner: ""
        };
    }

    //Is document.getElementById the best solution here?
    //Also should this live in the input text component instead of here?
    listenForSubmit() {
        document.getElementById("user").addEventListener("keyup", function(e) {
            e.preventDefault();
                if (e.keyCode === 13) {
                    document.getElementById("search-btn").click();
                }
        });
    }

    //this handler is passed down to the to the InputText component 
    handler() {
        //is there a way to grab username from state? when i trie, I had to click the submit button twice
        axios.get(`https://api.github.com/users/${this.state.username}/repos`)
        
        .then(res => {
            const repos = res.data;
            console.log('repos', repos);
            //I thought about rendering the state in another "then"
            this.setState({
                //I'm still debating this next line
                repos: repos,
                username: "",
                user: "",
                checked: true,
                error: false,
                owner: repos[0]["owner"],
                avatar: repos[0]["owner"]["avatar_url"]
            })
        })
        .catch((error) => {
            console.log("error", error);
            this.setState({
                error: true
            })
        })
    }

    addUsername(e) {
        console.log('ran fun');
        this.setState({
            username: e.target.value
        })
    }

    componentDidMount() {
        this.listenForSubmit();
    }
   
    render() {
        const {repos, username, checked, error, avatar} = this.state;
        return (
            <>
                <Header action={ this.addUsername.bind(this) } title={username && !error ? username : "Search for a GitHub User"} checked={ checked } error={ error } source={ checked && !error ? avatar : "https://github.githubassets.com/images/modules/logos_page/Octocat.png" } handler={ this.handler.bind(this) }/>
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
