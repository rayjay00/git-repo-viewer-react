import React, { Fragment, useEffect, useReducer } from 'react';

import axios from 'axios';

import Header from './Header';
import Content from './Content';

const initialState = {
  checked: false,
  user: '',
  repos: [],
  error: false,
  loading: false,
  avatar: '',
  username: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOAD':
      return {
        ...state,
        loading: true,
        repos: [],
        user: '...'
      };
    case 'USER_LOAD_SUCCESS':
      return {
        ...state,
        checked: true,
        error: false,
        loading: false,
        user: action.payload.user,
        repos: action.payload.repos,
        avatar: action.payload.avatar
      };
    case 'USER_LOAD_FAILURE':
      return {
        ...state,
        error: true,
        loading: false,
        avatar: '',
        user: `Oops! It looks like that user doesn't exist.`
      };

    case 'USERNAME_SET':
      return {
        ...state,
        username: action.payload
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, error, loading, repos, checked, avatar, username } = state;

  useEffect(() => {
    if (username === '') {
      return;
    }

    dispatch({
      type: 'USER_LOAD'
    });

    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        const userProfile = res.data;

        const userInfo = {
          user: userProfile[0].owner.login,
          repos: userProfile,
          avatar: userProfile[0].owner.avatar_url
        };
        dispatch({
          type: 'USER_LOAD_SUCCESS',
          payload: userInfo
        });
      })
      .catch(e => {
        dispatch({
          type: 'USER_LOAD_FAILURE',
          e
        });
      });
  }, [username]);

  const title = () => {
    return user || 'Search for a GitHub User';
  };

  const image = () => {
    if (loading) {
      return 'https://media.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif';
    }

    if (checked && !error) {
      return avatar;
    }

    return 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';
  };

  const repoContent = () => {
    return <Fragment>{repos.length > 0 && <Content repos={repos} />}</Fragment>;
  };

  return (
    <Fragment>
      <Header
        source={image()}
        title={title()}
        checked={checked}
        error={error}
        setUser={dispatch}
      />
      {repoContent()}
    </Fragment>
  );
};

export default App;
