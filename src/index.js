import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/home/Header';
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
            owner: ""
        };
    }

    listenForSubmit() {
        document.getElementById("user")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("search-btn").click();
        }
        });
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

    componentDidMount() {
        this.listenForSubmit();
    }
   
    render() {
        const {repos, username, checked, error, avatar} = this.state;
        return (
            <>
                <Header title={username && !error ? username : "Search for a GitHub User"} checked={ checked } error={ error } source={ checked && !error ? avatar : "https://github.githubassets.com/images/modules/logos_page/Octocat.png" } handler={ this.handler.bind(this) }/>
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

ReactDOM.render(<UserRepo/>, document.getElementById('root'));

serviceWorker.unregister();

