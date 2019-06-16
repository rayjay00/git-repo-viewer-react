import React from 'react';
import axios from 'axios';
import Header from './Header';
import Content from './Content';
import { StyledHeading } from '../styles/base';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      user: '',
      repos: [],
      error: false,
      loading: false,
      avatar: '',
      value: ''
    };
  }

  //This function is passed to the to the Submit component as a prop and is called within a function in that file that uses the text input ref as a parameter.
  getRepos = username => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        const repos = res.data;
        this.setState({
          checked: true,
          user: repos[0]['owner']['login'],
          repos: repos,
          error: false,
          avatar: repos[0]['owner']['avatar_url']
        });
      })
      .catch(error => {
        console.error('error', error);
        this.setState({
          error: true,
          loading: false,
          avatar: ''
        });
      });
  };

  addUsername = userinput => {
    this.setState({
      value: userinput
    });
  };

  render() {
    const { checked, error, avatar, user, repos } = this.state;
    return (
      <>
        <Header
          source={
            checked && !error
              ? avatar
              : 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'
          }
          title={user && !error ? user : 'Search for a GitHub User'}
          addUsername={this.addUsername}
          checked={checked}
          error={error}
          getRepos={this.getRepos}
        />
        {error ? (
          <StyledHeading>
            Oops! It looks like that user doesn't exist.
          </StyledHeading>
        ) : (
          <>{repos.length > 0 && <Content repos={repos} />}</>
        )}
      </>
    );
  }
}
