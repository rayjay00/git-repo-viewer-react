import React from 'react';
import ReactDOM from 'react-dom';
import Repo from './components/Repo';
import styled from 'styled-components';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import User from './components/User';
class Filepanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            checked: false,
            error: false,
            owner: {}
        };
    }

    handleClick() {
        const username = document.getElementById("user").value;
        axios.get(`https://api.github.com/users/${username}/repos`)
        .then(res => {
            const repos = res.data;
            this.setState({ repos });
            console.log(repos);
            //I thought about rendering the state in another "then"
            this.setState(prevState => ({
                checked: true
            })) 

            repos.length === 0 ?
                this.setState(prevState => ({
                    error: true
                })) 
            : 
                this.setState(prevState => ({
                    error: false
                }));

            this.setState({ owner: this.state.repos[0]["owner"] });
        })
        .catch((error) => {
            console.log(error, "catch the hoop")
            this.setState(prevState => ({
                error: true
              }))
        })
    }
    
   
    render() {
        const StyledHeadingWrapper = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: 'Asap', sans-serif;
        `;

        const StyledInputWrapper = styled.div`
            margin: 0 auto;
            height: auto;
            width: 25%;
            display: flex;
        `;

        const StyledInput = styled.input`
            height: 100%;
            background-image: none !important;
            height: 1.5rem;
            flex: 1.5;
        `;

        const StyledRepos = styled.section`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        `;

        const StyledButton = styled.button`
            background-color: #0E376F;
            border: 0;
            font-family: 'Asap', sans-serif;
            color: white;
            font-size: 1rem;
            text-transform: capitalize;
            margin: 0;
            height: 1.85rem;
            flex: 1;
        `;
        // console.log("repos", this.state.repos[0]["id"]);
    
        return (
            <React.Fragment>
                <StyledHeadingWrapper>
                    {this.state.error ? <h3>Invalid Input</h3> : <h1>GitHub File Viewer</h1>}
                    <StyledInputWrapper>
                        <StyledInput placeholder="Enter a GitHub username..." type="text" name="user" id="user"/>
                        <StyledButton onClick={ this.handleClick.bind(this)} type="submit">
                        {this.state.checked ? 
                        <span>Search Again</span> 
                        : <span>Search for a user</span>}
                    </StyledButton>
                    </StyledInputWrapper>
                </StyledHeadingWrapper>
                <StyledInputWrapper>
                    <User username={this.state.owner.login} avatar={this.state.owner.avatar_url} />
                </StyledInputWrapper>
                    <StyledRepos>
                        <Repo repos={this.state.repos} />
                    </StyledRepos>
                </React.Fragment>
        );
    }
}



ReactDOM.render(<Filepanel/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
