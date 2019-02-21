import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/home/Header';
import User from './components/User';
import Content from './components/home/Content';
import { StyledHeading } from '../src/styles/base';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';


class UserRepo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            username: "",
            checked: false,
            error: false,
            owner: {}
        };
    }
    //this handler is passed down to the to the InputText component 
    handler() {
        const username = document.getElementById("user").value;
        //is there a way to grab username from state? when i trie, I had to click the submit button twice
        axios.get(`https://api.github.com/users/${username}/repos`)
        
        .then(res => {
            const repos = res.data;
            console.log('repos', repos);
            //I thought about rendering the state in another "then"
            this.setState({
                //I'm still debating this next line
                repos: repos,
                username: username,
                checked: true,
                error: false,
                owner: repos.length > 1 && repos[0]["owner"],
            })
        })
        .catch((error) => {
            console.log("error", error);
            this.setState({
                error: true
            })
        })
    }
   
    render() {
        const {checked, error, owner, username, repos} = this.state;
        return (
            <>
                <Header title="Search for a GitHub User" checked={ checked } error={ error } handler={ this.handler.bind(this) }/>
                { error ?
                    <StyledHeading error={ error }>Oops... Looks like that user doesn't exist. Try again!</StyledHeading>
                    :
                    <>
                        { Object.keys(owner).length > 0 && <User card= { false } username={ username } /> }
                        { repos.length > 1 && <Content card={ true } repos={ repos } /> }
                    </>
                }
            </>
        );
    }
}

ReactDOM.render(<UserRepo/>, document.getElementById('root'));

serviceWorker.unregister();
